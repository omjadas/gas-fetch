import type { ResponseInit } from "node-fetch";

export class Response {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  #body: string;

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  #status: number;

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  #statusText: string;

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  #url: string;

  public constructor(body: string = "", init: ResponseInit = {}) {
    this.#body = body;
    this.#status = init.status ?? 200;
    this.#statusText = init.statusText ?? "";
    this.#url = init.url ?? "";
  }

  public get ok(): boolean {
    return this.#status >= 200 && this.#status < 300;
  }

  public get status(): number {
    return this.#status;
  }

  public get statusText(): string {
    return this.#statusText;
  }

  public get url(): string {
    return this.#url;
  }

  public json(): Promise<unknown> {
    return Promise.resolve(JSON.parse(this.#body) as unknown);
  }

  public text(): Promise<string> {
    return Promise.resolve(this.#body);
  }
}
