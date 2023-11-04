export const searchByName = <T extends { name: string }>(
  listData: T[],
  search: string
) => {
  if (search === "") {
    return listData;
  }
  return listData.filter((data) => data.name.includes(search));
};
