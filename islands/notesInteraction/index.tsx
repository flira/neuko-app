import { JSX } from "preact";
import { signal } from "@preact/signals";
import { Keyboard } from "./Keyboard.tsx";
import type { KeyboardState } from "../../types/index.d.ts";

const defaultState: KeyboardState = {
  currentKey: 0,
  number: false,
  shift: false,
};

const sentence = signal("");

export function Notes(): JSX.Element {
  return (
    <>
      <input type="text" value={sentence.value} />
      <Keyboard />
    </>
  );
}
