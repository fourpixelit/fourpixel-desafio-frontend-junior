export function renderClass(data: { [x: string]: any }): string {
  const keys = Object.keys(data);
  return keys
    .reduce((result, key) => (data[key] ? `${result} ${key}` : result), "")
    .trimLeft();
}
