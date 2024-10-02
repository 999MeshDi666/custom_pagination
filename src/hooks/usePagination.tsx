import { useState } from "react";
import { formatPaginatedList } from "../utils/formatters";

type PaginationProps<T> = {
  list: Array<T>;
  isLoopedPagination: boolean;
};

const usePagination = <T,>({
  list,
  isLoopedPagination,
}: PaginationProps<T>) => {
  const paginatedList = formatPaginatedList(list, 10);
  const [row, setRow] = useState<number>(0);

  const handleMoveToPrevRow = () => {
    if (isLoopedPagination && row === 0) setRow(paginatedList.length - 1);
    else setRow(row - 1);
  };
  const handleMoveToNextRow = () => {
    const isEqual = paginatedList.length - 1 === row;
    if (isLoopedPagination && isEqual) setRow(0);
    else setRow(row + 1);
  };
  const handleMoveToBeginRow = () => setRow(0);
  const handleMoveToEndRow = () => setRow(paginatedList.length - 1);

  return {
    currentRow: row + 1,
    totalPage: paginatedList.length,
    paginatedList: paginatedList[row],
    handleMoveToBeginRow,
    handleMoveToPrevRow,
    handleMoveToNextRow,
    handleMoveToEndRow,
  };
};
export default usePagination;
