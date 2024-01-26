type CreateSocketProps = {
  protocol?: string | string[];
  onmessage?: ((this: WebSocket, evt: MessageEvent<any>) => void) | null;
};

export function createSocket({ protocol, onmessage }: CreateSocketProps) {
  const ws = new WebSocket("ws://localhost:1337", protocol);

  ws.onopen = () => {
    console.log("Websocket connected!");
  };

  ws.onerror = (err) => {
    console.error(err);
  };

  if (onmessage) {
    ws.onmessage = onmessage;
  }

  return ws;
}
