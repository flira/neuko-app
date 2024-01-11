import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function Display() {
    const currentCommand = useSignal("No commands yet.");

    const websocketConnection = () => {
      const ws = new WebSocket('ws://localhost:1337', 'APP');
  
      ws.onopen = () => {
        console.log('Websocket connected!');
      }
  
      ws.onmessage = event => {
        currentCommand.value = event.data;
      };
  
      ws.onerror = err => {
        console.error(err);
      };
  
      return () => {
        ws.close();
      }
    }
  
    useEffect(websocketConnection, []);

    return <div>{currentCommand.value}</div>
}