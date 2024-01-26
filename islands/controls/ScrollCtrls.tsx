import { Button } from "../../components/Button.tsx";
import type { CtrlProps } from "../../types/index.d.ts";

export function ScrollCtrls({ action }: CtrlProps) {
  return (
    <section class="flex flex-col">
      <h2>Rolar página</h2>
      <ul class="flex flex-col gap-4 items-center justify-center">
        <li>
          <Button onClick={action.bind(null, "up")}>
            <img
              class="opacity-75"
              src={"/icons/north_FILL0_wght400_GRAD0_opsz24.svg"}
              width="20px"
              height="20px"
              alt="Para cima"
            />
          </Button>
        </li>
        <li>
          <Button onClick={action.bind(null, "down")}>
            <img
              class="opacity-75"
              src={"/icons/south_FILL0_wght400_GRAD0_opsz24.svg"}
              width="20px"
              height="20px"
              alt="Para baixo"
            />
          </Button>
        </li>
      </ul>
    </section>
  );
}
