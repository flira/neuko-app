import wikity from "wikity";
import { Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import { Wiki } from "../../islands/wiki/Wiki.tsx";
import type { WikiResponse } from "../../types/index.d.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const url = "https://pt.wikipedia.org/w/rest.php/v1/page/" +
      decodeURI(ctx.params.title);
    const response = await fetch(url);
    const data: WikiResponse = await response.json();
    return ctx.render(data);
  },
};

const cleanCode: (html: string) => string = (html) =>
  html.replaceAll(/{{.*}}/g, "").replaceAll(/href=\"/gi, 'href="/wiki');

export default function (props: PageProps) {
  const html = wikity.parse(cleanCode(props.data.source));
  return (
    <div class="max-w-2xl m-auto px-4 py-6">
      <Wiki>
        <h1>{props.data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wiki>
    </div>
  );
}
