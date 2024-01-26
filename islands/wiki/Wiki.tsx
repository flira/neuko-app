import { useEffect } from "preact/hooks";
import { createRef, RefObject } from "preact";
import { createSocket } from "../../utils/createSocket.ts";
import { signal } from "@preact/signals";
import { JSX } from "preact";
import { CtrlAction } from "../../types/index.d.ts";

const itemsQuery = `button:not([disabled]),
  [href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  [tabindex]:not([tabindex="-1"]):not([disabled]),
  details:not([disabled]),
  summary:not(:disabled)`;

const focusClass = "focus";

export function Wiki({ children }: JSX.HTMLAttributes<HTMLElement>) {
  const ref: RefObject<HTMLElement> = createRef();
  const interactableItems: HTMLElement[] = [];
  const currentItem = signal(-1);

  const changeFocus: (action: "right" | "left") => void = (action) => {
    const limit = interactableItems.length - 1;
    if (action === "right") {
      currentItem.value = currentItem.value !== limit
        ? currentItem.value + 1
        : 0;
    } else {
      currentItem.value = currentItem.value > 0 ? currentItem.value - 1 : limit;
    }
    ref.current?.querySelector(`.${focusClass}`)?.classList.remove(focusClass);
    interactableItems[currentItem.value].focus();
    interactableItems[currentItem.value].classList.add(focusClass);
  };

  const scrollApp: (action: "up" | "down") => void = (action) => {
    const value: number = window.outerHeight / 2 * (action === "up" ? -1 : 1);
    window.scroll({ top: scrollY + value, behavior: "smooth" });
  };

  const reducer: (action: CtrlAction) => void = (action) => {
    switch (action) {
      case "down":
      case "up":
        scrollApp(action);
        break;
      case "right":
      case "left":
        changeFocus(action);
        break;
      case "select":
        interactableItems[currentItem.value].click();
        break;
      default:
        console.warn(`invalid command ${action}`);
        break;
    }
  };

  const websocketConnection = () => {
    const ws = createSocket({
      protocol: "APP",
      onmessage: (event) => {
        reducer(event.data);
      },
    });

    return () => {
      ws.close();
    };
  };

  const getInteractableElements = () => {
    const _interactable = (ref.current as HTMLElement).querySelectorAll(
      itemsQuery,
    );
    _interactable.forEach((el: Node) => {
      interactableItems.push(el as HTMLElement);
    });
  };

  useEffect(websocketConnection, []);
  useEffect(getInteractableElements, []);

  return (
    <>
      <article ref={ref as RefObject<HTMLUListElement>}>
        {children}
      </article>
    </>
  );
}
