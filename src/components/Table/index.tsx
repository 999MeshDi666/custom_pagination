import { useState } from "react";
import "./styles/table.scss";
import usePagination from "../../hooks/usePagination";
import { peopleList } from "../../mock/table";
import { People } from "../../types/people";

const Table = () => {
  const [isLoppedPagination, setIsLoppedPagination] = useState<boolean>(false);

  const {
    currentRow,
    totalPage,
    paginatedList,
    handleBeginRow,
    handlePrevRow,
    handleNextRow,
    handleEndRow,
  } = usePagination<People>({ list: peopleList, isLoppedPagination });

  return (
    <div className="table_container">
      <div className="table_toolbar">
        <div className="table_toolbar_pagination_checkbox">
          <label htmlFor="loppedPagination">Зацикленная пагинация:</label>
          <input
            name="loppedPagination"
            id="loppedPagination"
            checked={isLoppedPagination}
            onChange={(event) => setIsLoppedPagination(event.target.checked)}
            type="checkbox"
          />
        </div>
        <p>Кол-во строк: {paginatedList.length}</p>
      </div>
      <table className="table">
        <tr className="table_row">
          <th className="table_header">Имя</th>
          <th>Фамилия</th>
          <th>Возраст</th>
        </tr>
        {paginatedList.map((fp: People, index: number) => (
          <tr key={index}>
            <td className="table_cell">{fp.name}</td>
            <td>{fp.surname}</td>
            <td>{fp.age}</td>
          </tr>
        ))}
      </table>
      <div className="table_pagination">
        <div className="table_pagination_btn_group">
          <button
            className="table_pagination_button"
            disabled={currentRow <= 1}
            onClick={handleBeginRow}>
            начало
          </button>
          <button
            className="table_pagination_button"
            disabled={currentRow <= 1}
            onClick={handlePrevRow}>
            назад
          </button>
        </div>
        <p style={{ margin: 0 }}>
          {currentRow} из {totalPage}
        </p>
        <div className="table_pagination_btn_group">
          <button
            className="table_pagination_button"
            onClick={handleNextRow}
            disabled={!isLoppedPagination && currentRow >= totalPage}>
            вперед
          </button>
          <button
            className="table_pagination_button"
            disabled={currentRow >= totalPage}
            onClick={handleEndRow}>
            конец
          </button>
        </div>
      </div>
    </div>
  );
};
export default Table;
