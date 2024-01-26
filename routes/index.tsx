import { Wiki } from "../islands/wiki/Wiki.tsx";

export default function Home() {
  return (
    <div class="align-center flex flex-col w-full min-h-screen justify-center">
      <div class="flex flex-col items-center justify-center mt-[-20vh]">
        <h1>Selecione uma aplicação</h1>
        <ul>
          <li>
            <a href="/controller">Controle</a>
          </li>
          <li>
            <a href="/wiki">Interface</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
