import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface ButtonProps  {
  tall?: boolean
}

export function Button(
  props: JSX.HTMLAttributes<HTMLButtonElement> & ButtonProps,
) {
  return (
    <button
      type="button"
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      className={`cursor-pointer items-center text-[#969faf] border-0 rounded-sm
      flex justify-center w-[64px] pb-[1px]
      bg-[linear-gradient(-225deg,#d5dbe4,#f8f8f8)]
      shadow-[inset_0_-2px_0_0_#cdcde6,inset_0_0_1px_1px_#fff,0_1px_2px_1px_rgba(30,35,90,.4)]
      ${props.tall ? "h-[116px]" : "h-[58px]"}
      focus:bg-selection hover:bg-selection
      `}
    />
  );
}
