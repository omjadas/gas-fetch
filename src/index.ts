import { getStatusText } from "http-status-codes";
import type { ResponseInit } from "node-fetch";
import { Response } from "./response";

interface IRequestInit {
  body?: string,
  headers?: Record<string, any>,
  method?: GoogleAppsScript.URL_Fetch.HttpMethod,
}

export function fetch(
  resource: string,
  init: IRequestInit = {}
): Promise<Response> {
  try {
    const response = UrlFetchApp.fetch(resource, {
      headers: init.headers,
      method: init.method,
      muteHttpExceptions: true,
      payload: init.body,
    });

    const responseCode = response.getResponseCode();

    const responseInit: ResponseInit = {
      status: responseCode,
      statusText: getStatusText(responseCode),
      url: resource,
    };

    return Promise.resolve(new Response(undefined, responseInit));
  } catch (e) {
    return Promise.reject(e);
  }
}
