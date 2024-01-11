const connectedClients: Map<WebSocket, string> = new Map();

Deno.serve({
  port: 1337,
  handler: (request) => {
    if (request.headers.get("upgrade") === "websocket") {
      const { socket, response } = Deno.upgradeWebSocket(request);

      const client = request.headers.get("sec-websocket-protocol") ||
        request.headers.get("origin") || "APP";

      connectedClients.set(socket, client);

      socket.onopen = () => {
        console.log(
          `Client "${client}" connected.`,
        );
      };

      socket.onmessage = (event) => {
        connectedClients.forEach((client, socket) => {
          if (/app/i.test(client)) {
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
