import { RequestInit } from "node-fetch";

export class Request {
  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  #method: string;

  public constructor(input: string, init: RequestInit = {}) {
    this.#method = init.method || "GET";
  }

  public get method(): string {
    return this.#method;
  }
}
