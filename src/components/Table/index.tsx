import { useState } from "react";
import usePagination from "../../hooks/usePagination";
import TablePagination from "./TablePagination";
import LoppedPaginationCheckBox from "./LoppedPaginationCheckbox";
import "./styles/table.scss";
import { peopleList } from "../../mock/table";
import { People } from "../../types/people";

const Table = () => {
  const [isLoopedPagination, setIsLoopedPagination] = useState<boolean>(false);

  const {
    currentRow,
    totalPage,
    paginatedList,
    handleMoveToBeginRow,
    handleMoveToPrevRow,
    handleMoveToNextRow,
    handleMoveToEndRow,
  } = usePagination<People>({ list: peopleList, isLoopedPagination });

  return (
    <div className="table_container">
      <div className="table_toolbar">
        <LoppedPaginationCheckBox
          {...{ isLoopedPagination, setIsLoopedPagination }}
        />
        <p>Кол-во строк: {paginatedList.length}</p>
      </div>
      <table className="table">
        <tr className="table_row">
          <th className="table_header">Имя</th>
          <th className="table_header">Фамилия</th>
          <th className="table_header">Возраст</th>
        </tr>
        {paginatedList.map((fp: People, index: number) => (
          <tr className="table_row" key={index}>
            <td className="table_cell">{fp.name}</td>
            <td className="table_cell">{fp.surname}</td>
            <td className="table_cell">{fp.age}</td>
          </tr>
        ))}
      </table>
      <TablePagination
        {...{
          currentRow,
          totalPage,
          isLoopedPagination,
          handleMoveToBeginRow,
          handleMoveToPrevRow,
          handleMoveToNextRow,
          handleMoveToEndRow,
        }}
      />
    </div>
  );
};
export default Table;
