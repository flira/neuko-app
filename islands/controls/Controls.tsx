import { FocusCtrls } from "./FocusCtrls.tsx";
import { ScrollCtrls } from "./ScrollCtrls.tsx";
import { EnterCtrl } from "./EnterCtrl.tsx";
import { createSocket } from "../../utils/createSocket.ts";
import { useEffect } from "preact/hooks";
import type { CtrlAction } from "../../types/index.d.ts";

export function Controls({ variant }: { variant?: string }) {
  const ws = createSocket({ protocol: "CONTROLLER" });
  const sendMsg = (msg: CtrlAction) => {
    ws.send(msg);
  };

  const keyEvent = (event: KeyboardEvent) => {
    switch (event.key) {
      default:
        return;
      case "ArrowDown":
        return sendMsg("down");
      case "ArrowLeft":
        return sendMsg("left");
      case "ArrowRight":
        return sendMsg("right");
      case "ArrowUp":
        return sendMsg("up");
      case "Enter":
        return sendMsg("select");
    }
  };

  useEffect(() => {
    document.addEventListener("keyup", keyEvent);
    return () => {
      document.removeEventListener("keyup", keyEvent);
    };
  }, []);

  return (
    <>
      <h1>Controles</h1>
      <div class="flex gap-8">
        <FocusCtrls action={sendMsg} />
        {(variant === "full" || variant === "arrows") && <ScrollCtrls action={sendMsg} /> }
        {variant === "full" && <EnterCtrl action={sendMsg} />}
      </div>
    </>
  );
}