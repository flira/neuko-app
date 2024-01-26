import { Button } from "../../components/Button.tsx";
import type { CtrlProps } from "../../types/index.d.ts";

export function EnterCtrl({ action }: CtrlProps) {
  return (
    <section class="flex flex-col">
      <h2>Confirmar</h2>
      <div class="flex gap-4 grow items-center justify-center">
        <Button tall={true} onClick={action.bind(null, "select")}>
          <img
            class="opacity-75"
            src={"/icons/keyboard_return_FILL0_wght400_GRAD0_opsz24.svg"}
            width="20px"
            height="20px"
            alt="Anterior"
          />
        </Button>
      </div>
    </section>
  );
}
