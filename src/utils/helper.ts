export function convertCamelCaseToWords(camelCaseString: string) {
  return camelCaseString
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .toLowerCase()
    .replace(/^./, (str) => str.toUpperCase());
}