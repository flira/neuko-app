const connectedClients: Map<WebSocket, string> = new Map();

Deno.serve({
  port: 1337,
  handler: (request) => {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);

      /**
       * A aplicação usa o protocolo passado ao websocket para diferenciar
       * as funções do websocket. Clientes conectados com o protocolo "App"
       * apenas recebem mensagens enquanto os de protocolo "Controller"
       * apenas enviam.
       */
      const client = request.headers.get("sec-websocket-protocol") ||
        request.headers.get("origin") || "APP";

      connectedClients.set(socket, client);

      socket.onopen = () => {
        console.log(
          `Client "${client}" connected.`,
        );
      };

      /**
       * Assim que cliente um "Controller" envia uma mensagem, ela
       * é repassada a todos os clientes "App". Como o servidor é usado
       * apenas localmente, não houve necessecidade de associar um único
       * "Controller" a um único "App".
       */
      socket.onmessage = (event) => {
        connectedClients.forEach((client, socket) => {
          if (!/controller/i.test(client)) {
            socket.send(event.data);
          }
        })
      }

      socket.onclose = () => {
        connectedClients.delete(socket);
        console.log(`Client "${client}" disconnected.`);
      }
      socket.onerror = (error) => console.error("ERROR:", error);

      return response;
    } else {
      return new Response("Websocket connection only.");
    }
  },
});
