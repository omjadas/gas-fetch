import type { RequestInit, ResponseInit } from "node-fetch";
import { Response } from "./response";

export function fetch(
  resource: string,
  init: RequestInit & { headers?: Record<string, any>, method?: GoogleAppsScript.URL_Fetch.HttpMethod } = {}
): Promise<Response> {
  const response = UrlFetchApp.fetch(resource, {
    headers: init.headers,
    method: init.method,
    muteHttpExceptions: true,
    payload: init.body,
  });

  const responseInit: ResponseInit = {
    status: response.getResponseCode(),
    url: resource,
  };

  return Promise.resolve(new Response(undefined, responseInit));
}
