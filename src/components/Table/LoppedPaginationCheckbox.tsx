type LoppedPaginationCheckBoxProps = {
  isLoopedPagination: boolean;
  setIsLoopedPagination: (isLoppedPagination: boolean) => void;
};

const LoppedPaginationCheckBox = ({
  isLoopedPagination,
  setIsLoopedPagination,
}: LoppedPaginationCheckBoxProps) => {
  return (
    <div className="table_toolbar_pagination_checkbox">
      <label htmlFor="loppedPagination">Зацикленная пагинация:</label>
      <input
        name="loppedPagination"
        id="loppedPagination"
        checked={isLoopedPagination}
        onChange={(event) => setIsLoopedPagination(event.target.checked)}
        type="checkbox"
      />
    </div>
  );
};

export default LoppedPaginationCheckBox;
