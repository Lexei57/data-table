export type apiDescription = {
  [key: string]: any
}

export function arrayToString(params: apiDescription): void {
  for (const paramKey in params) {
  if (Array.isArray(params[paramKey])) {
    params[paramKey] = params[paramKey].join(',');
  }
}
}
