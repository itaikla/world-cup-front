import React, { useMemo } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
} from '@tanstack/react-table';
import './WorldCupPlayersTable.css';

// TODO: Use tanstack virtual

export interface Player {
  id: number;
  name: string;
  country: string;
  position: string;
  age: number;
  club: string;
  goals: number;
  assists: number;
  appearances: number;
  marketValue: number;
}

interface WorldCupPlayersTableProps {
  data: Player[];
  className?: string;
}

const columnHelper = createColumnHelper<Player>();

export const WorldCupPlayersTable: React.FC<WorldCupPlayersTableProps> = ({ 
  data, 
  className = '' 
}) => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = React.useState('');

  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Player Name',
        cell: (info) => (
          <div className="player-name">
            <div className="name">{info.getValue()}</div>
          </div>
        ),
      }),
      columnHelper.accessor('country', {
        header: 'Country',
        cell: (info) => (
          <div className="country">
            <span className="flag">🏳️</span>
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor('position', {
        header: 'Position',
        cell: (info) => (
          <span className={`position position-${info.getValue().toLowerCase()}`}>
            {info.getValue()}
          </span>
        ),
      }),
      columnHelper.accessor('age', {
        header: 'Age',
        cell: (info) => <span className="age">{info.getValue()}</span>,
      }),
      columnHelper.accessor('club', {
        header: 'Club',
        cell: (info) => <span className="club">{info.getValue()}</span>,
      }),
      columnHelper.accessor('goals', {
        header: 'Goals',
        cell: (info) => (
          <span className="stat-goals">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('assists', {
        header: 'Assists',
        cell: (info) => (
          <span className="stat-assists">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('appearances', {
        header: 'Apps',
        cell: (info) => (
          <span className="stat-appearances">{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('marketValue', {
        header: 'Market Value',
        cell: (info) => (
          <span className="market-value">
            €{(info.getValue() / 1000000).toFixed(1)}M
          </span>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className={`world-cup-table-container ${className}`}>
      <div className="table-header">
        <h2 className="table-title">World Cup Players</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search players..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="world-cup-table">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className={`table-header-cell ${
                      header.column.getCanSort() ? 'sortable' : ''
                    }`}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="header-content">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {header.column.getCanSort() && (
                        <span className="sort-indicator">
                          {{
                            asc: '↑',
                            desc: '↓',
                          }[header.column.getIsSorted() as string] ?? '↕'}
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="table-row">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="table-cell">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="table-footer">
        <div className="table-info">
          Showing {table.getRowModel().rows.length} of {data.length} players
        </div>
      </div>
    </div>
  );
};

export default WorldCupPlayersTable; 