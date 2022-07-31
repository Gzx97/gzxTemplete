export const getQueryParams = <Params = Record<string, any>>(): Params => {
  const searchParams = new URLSearchParams(location.search);
  return Object.fromEntries(
    Array.from(searchParams.keys()).map((key) => [
      key,
      (() => {
        const values = searchParams.getAll(key);
        if (!values) {
          return values;
        }
        return values.length === 1 ? values[0] : values;
      })(),
    ]),
  ) as any as Params;
};
