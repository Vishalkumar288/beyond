import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import "./customTable.css";

export interface Column {
  header: string;
  accessor: string;
}

export interface CustomTableProps {
  getColumns: () => Column[];
  getRows: () => Record<string, React.ReactNode>[];
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPages: number;
}

const CustomTable: React.FC<CustomTableProps> = ({ getColumns, getRows }) => {
  const columns = getColumns();
  const rows = getRows();

  return (
    <div className="image-table-container">
      <Table>
        <TableHeader className="image-table-head">
          <TableRow className="image-table-row">
            {columns.map((col, index) => (
              <TableHead key={index} className="image-table-th">
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="image-table-body">
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="image-table-row"
            >
              {columns.map((col, colIndex) => (
                <TableCell key={colIndex} className="image-table-td">
                  {row[col.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTable;
