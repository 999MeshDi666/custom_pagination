import { useState } from "react";

function formatPaginatedList<T>(array: Array<T>, itemsPerRow: number) {
  const paginatedList = [];
  for (let i = 0; i < array.length; i += itemsPerRow) {
    paginatedList.push(array.slice(i, i + itemsPerRow));
  }
  return paginatedList;
}

const usePagination = <T,>({
  list,
  isLoppedPagination,
}: {
  list: Array<T>;
  isLoppedPagination: boolean;
}) => {
  const paginatedList = formatPaginatedList(list, 10);
  const [row, setRow] = useState<number>(0);

  const handlePrevRow = () => setRow(row - 1);
  const handleNextRow = () => {
    const isEqual = paginatedList.length - 1 === row;
    if (isLoppedPagination && isEqual) setRow(0);
    else setRow(row + 1);
  };
  const handleBeginRow = () => setRow(0);
  const handleEndRow = () => setRow(paginatedList.length - 1);

  return {
    currentRow: row + 1,
    totalPage: paginatedList.length,
    paginatedList: paginatedList[row],
    handleBeginRow,
    handlePrevRow,
    handleNextRow,
    handleEndRow,
  };
};
export default usePagination;
