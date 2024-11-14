export const splitItemsIntoColumns = (
  items: FastActionType[],
  itemsPerColumn: number
) => {
  const columns = [];
  for (let i = 0; i < items.length; i += itemsPerColumn) {
    columns.push(items.slice(i, i + itemsPerColumn));
  }
  return columns;
};
