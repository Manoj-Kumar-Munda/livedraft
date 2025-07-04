import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam(key: string) {
  return useQueryState(
    key,
    /* default search param with empty string and if it is a falsy value then clear it */
    parseAsString.withDefault("").withOptions({
      clearOnDefault: true,
    })
  );
}
