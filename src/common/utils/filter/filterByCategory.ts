export const filterByCategory = <T, K extends keyof T>(
  list: T[],
  key: K,
  value: T[K]
) => {
  return list.filter((item) => item[key] === value);
};
