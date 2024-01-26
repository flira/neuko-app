import { JSX } from "preact";

interface KeyProps {
  value: string;
  selected?: boolean;
  icon?: string;
}

export function Key(
  { children, ...props }: JSX.HTMLAttributes<HTMLButtonElement> & KeyProps,
) {
  return (
    <button type="button" {...props}>
      {props.icon
        ? (
          <img
            src={`/icons/${props.icon}_FILL0_wght400_GRAD0_opsz24.svg`}
            width="28x"
            height="28px"
            alt={props.value}
          />
        )
        : props.value}
    </button>
  );
}
