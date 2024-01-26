import { JSX } from "preact";
import { Key } from "../../components/Key.tsx";
import type { KeyboardState } from "../../types/index.d.ts";

function createRoll(
  keys: { value: string; id: string; icon?: string }[],
): JSX.Element[] {
  return keys.map((key) => (
    <li key={key.id} class="flex items-center justify-center" >
      <Key value={key.value} id={`key_${key.id}`} icon={key.icon}>
        {key.value}
      </Key>
    </li>
  ));
}

export function Keyboard(): JSX.Element {
  return (
    <div>
      <ul class={"grid grid-cols-9 gap-2"}>
        <div class="col-span-3"/>
        {createRoll([
          { value: "z", id: "-1_3" },
          { value: "r", id: "0_3" },
          { value: "b", id: "1_3" },
        ])}
        <div class="col-span-3"/>
        <div class="col-span-2"/>
        {createRoll([
          { value: "w", id: "-2_2" },
          { value: "l", id: "-1_2" },
          { value: "o", id: "0_2" },
          { value: "t", id: "1_2" },
          { value: "x", id: "2_2" },
        ])}
        <div class="col-span-2"/>
        <div class="col-span-2"/>
        {createRoll([
          { value: "h", id: "-2_1" },
          { value: "m", id: "-1_1" },
          { value: "a", id: "0_1" },
          { value: "n", id: "1_1" },
          { value: "v", id: "2_1" },
        ])}
        <div class="col-span-2"/>
        {createRoll([
          { value: "previous", id: "-4_0", icon: "west" },
          { value: "shift", id: "-3_0", icon: "shift" },
          { value: "backspace", id: "-2_0", icon: "backspace" },
          { value: "autocomplete", id: "-1_0", icon: "match_word" },
          { value: "neutral", id: "0_0", icon: "trip_origin" },
          { value: "space", id: "1_0", icon: "space_bar" },
          { value: "enter", id: "2_-0", icon: "keyboard_return" },
          { value: "numpad", id: "3_-0", icon: "123" },
          { value: "next", id: "4_-0", icon: "east" },
        ])}
        <div class="col-span-2"/>
        {createRoll([
          { value: "q", id: "-2_-1" },
          { value: "u", id: "-1_-1" },
          { value: "e", id: "0_-1" },
          { value: "d", id: "1_-1" },
          { value: "g", id: "2_-1" },
        ])}
        <div class="col-span-2"/>
        <div class="col-span-2"/>
        {createRoll([
          { value: "y", id: "-2_-2" },
          { value: "p", id: "-1_-2" },
          { value: "s", id: "0_-2" },
          { value: "c", id: "1_-2" },
          { value: "k", id: "2_-2" },
        ])}
        <div class="col-span-2"/>
        <div class="col-span-3"/>
        {createRoll([
          { value: "z", id: "-1_-3" },
          { value: "r", id: "0_-3" },
          { value: "b", id: "1_-3" },
        ])}
        <div class="col-span-3"/>
      </ul>
    </div>
  );
}
