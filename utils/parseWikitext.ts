import wikity from "wikity";

class ParseWikitext {
  code: string;

  constructor(wikitext: string) {
    this.code = wikitext;
  }

  parse() {
    this.code = wikity.parse(this.code);
    return this;
  }

  clean() {
    this.code = this.code.replaceAll(/{{.*}}/g, "");
    return this;
  }

  fixLinks() {
    this.code = this.code.replaceAll('href="/', 'href="');
    return this;
  }

  getCode() {
    return this.code;
  }
}

export function parseWikitext(wikitext: string) {
  const parser = new ParseWikitext(wikitext);
  return parser.clean().parse().fixLinks().getCode();
}
