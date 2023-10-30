'use client';

import { usePagination, useSortBy, useTable } from 'react-table';
import { Pagination, PaginationItem } from '@mui/material';

import { TableSchema } from '@/common/types';
import { getUniqueIdentifier } from '@/common/utils';
import TableWrapper from '@/styles/StyledTable';
import { DEFAULT_PAGE_INDEX, DEFAULT_PAGE_SIZE, PLACEHOLDER_TEXT } from './constants';

type TableProps<T = Record<string, number | string | JSX.Element>> = {
  columns: TableSchema<T>;
  data: T[];
  pageCount: number;
  currentPage: number;
  search: string;
  onPageChange: (page: number) => void;
  onSearchChange: (search: string) => void;
};

const Table = ({
  columns,
  data,
  pageCount,
  currentPage,
  search,
  onPageChange,
  onSearchChange,
}: TableProps) => {
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, page, gotoPage, rows } =
    useTable(
      {
        columns,
        data,
        initialState: { pageIndex: DEFAULT_PAGE_INDEX, pageSize: DEFAULT_PAGE_SIZE },
      },
      useSortBy,
      usePagination,
    );

  const isSmallDevice = window.innerWidth <= 600;

  return (
    <TableWrapper>
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={event => {
          onSearchChange(event.target.value);
          if (currentPage !== 1) onPageChange(1);
        }}
        placeholder={PLACEHOLDER_TEXT}
      />
      <div className="table-wrapper">
        <table {...getTableProps()} className="table">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                key={getUniqueIdentifier()}
                className="table-row"
              >
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps({ title: undefined }))}
                    {...column.getHeaderProps({
                      style: { minWidth: column.minWidth, width: column.width },
                    })}
                    key={getUniqueIdentifier()}
                    className="table-header"
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.length ? (
              page.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={getUniqueIdentifier()} className="table-row">
                    {row.cells.map(cell => (
                      <td
                        {...cell.getCellProps()}
                        key={getUniqueIdentifier()}
                        className="table-data"
                      >
                        {cell.value ? cell.value : 0}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr className="table-row">
                <td colSpan={columns.length} className="table-data">
                  <p>No results found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="pagination-wrapper">
        <Pagination
          size={isSmallDevice ? 'small' : 'medium'}
          siblingCount={1}
          count={pageCount}
          page={currentPage}
          color="primary"
          shape="rounded"
          renderItem={item => <PaginationItem {...item} className="pagination" />}
          onChange={(_, i) => {
            onPageChange(i);
            gotoPage(i - 1);
          }}
        />
      </div>
    </TableWrapper>
  );
};

export default Table;
