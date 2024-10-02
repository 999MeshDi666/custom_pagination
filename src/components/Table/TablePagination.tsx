type TablePaginationProps = {
  currentRow: number;
  totalPage: number;
  isLoopedPagination?: boolean;
  handleMoveToBeginRow: () => void;
  handleMoveToPrevRow: () => void;
  handleMoveToNextRow: () => void;
  handleMoveToEndRow: () => void;
};
const TablePagination = ({
  currentRow,
  totalPage,
  isLoopedPagination = false,
  handleMoveToBeginRow,
  handleMoveToPrevRow,
  handleMoveToNextRow,
  handleMoveToEndRow,
}: TablePaginationProps) => {
  return (
    <div className="table_pagination">
      <div className="table_pagination_btn_group">
        <button
          className="table_pagination_button"
          disabled={currentRow <= 1}
          onClick={handleMoveToBeginRow}>
          начало
        </button>
        <button
          className="table_pagination_button"
          disabled={currentRow <= 1}
          onClick={handleMoveToPrevRow}>
          назад
        </button>
      </div>
      <p style={{ margin: 0 }}>
        {currentRow} из {totalPage}
      </p>
      <div className="table_pagination_btn_group">
        <button
          className="table_pagination_button"
          onClick={handleMoveToNextRow}
          disabled={!isLoopedPagination && currentRow >= totalPage}>
          вперед
        </button>
        <button
          className="table_pagination_button"
          disabled={currentRow >= totalPage}
          onClick={handleMoveToEndRow}>
          конец
        </button>
      </div>
    </div>
  );
};
export default TablePagination;
