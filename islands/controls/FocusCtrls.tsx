import { Button } from "../../components/Button.tsx";
import type { CtrlProps } from "../../types/index.d.ts";

export function FocusCtrls({ action }: CtrlProps) {

  return (
    <section class="flex flex-col">
      <h2>Selecionar</h2>
      <ul class="flex gap-4 grow items-center justify-center">
        <li>
          <Button onClick={action.bind(null, 'left')}>
            <img
              class="opacity-75"
              src={"/icons/west_FILL0_wght400_GRAD0_opsz24.svg"}
              width="20px"
              height="20px"
              alt="Anterior"
            />
          </Button>
        </li>
        <li>
          <Button onClick={action.bind(null, 'right')}>
            <img
              class="opacity-75"
              src={"/icons/east_FILL0_wght400_GRAD0_opsz24.svg"}
              width="20px"
              height="20px"
              alt="Próximo"
            />
          </Button>
        </li>
      </ul>
    </section>
  );
}
