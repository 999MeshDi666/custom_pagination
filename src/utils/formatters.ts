export function formatPaginatedList<T>(array: Array<T>, itemsPerRow: number) {
  const paginatedList = [];
  for (let i = 0; i < array.length; i += itemsPerRow) {
    paginatedList.push(array.slice(i, i + itemsPerRow));
  }
  return paginatedList;
}
