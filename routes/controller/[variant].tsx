import { PageProps } from "$fresh/server.ts";
import { Controls } from "../../islands/controls/Controls.tsx";

export default function (props: PageProps) {
  return (
    <div class="align-center flex flex-col w-full min-h-screen justify-center">
      <div class="flex flex-col items-center justify-center mt-[-20vh]">
        <Controls variant={props.params.variant}/>
      </div>
    </div>
  );
}
