export const searchByName = <T extends { name: string }>(
  listData: T[],
  search: string
) => {
  return listData.filter((data) => data.name === search);
};
