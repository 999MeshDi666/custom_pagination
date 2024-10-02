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
  const shouldDisablePrevBtn = !isLoopedPagination && currentRow <= 1;
  const shouldDisableNextBtn = !isLoopedPagination && currentRow >= totalPage;
  return (
    <div className="table_pagination">
      <div className="table_pagination_btn_group">
        <button
          className="table_pagination_button"
          disabled={currentRow <= 1}
          onClick={handleMoveToBeginRow}>
          {"<<"}
        </button>
        <button
          className="table_pagination_button"
          disabled={shouldDisablePrevBtn}
          onClick={handleMoveToPrevRow}>
          {"<"}
        </button>
      </div>
      <p style={{ margin: 0 }}>
        {currentRow} из {totalPage}
      </p>
      <div className="table_pagination_btn_group">
        <button
          className="table_pagination_button"
          onClick={handleMoveToNextRow}
          disabled={shouldDisableNextBtn}>
          {">"}
        </button>
        <button
          className="table_pagination_button"
          disabled={currentRow >= totalPage}
          onClick={handleMoveToEndRow}>
          {">>"}
        </button>
      </div>
    </div>
  );
};
export default TablePagination;
