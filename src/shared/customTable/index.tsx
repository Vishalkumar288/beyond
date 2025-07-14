import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
  PaginationEllipsis
} from "@/components/ui/pagination";
import "./customTable.css";

export interface Column {
  header: string;
  accessor: string;
  width?: string;
}

export interface CustomTableProps {
  getColumns: () => Column[];
  getRows: () => Record<string, React.ReactNode>[];
  currentPage?: number;
  onPageChange?: (page: number) => void;
  totalPages: number;
  onRowClick?: (rowIndex: number) => void;
}

const CustomTable: React.FC<CustomTableProps> = ({
  getColumns,
  getRows,
  currentPage = 1,
  onPageChange,
  totalPages,
  onRowClick
}) => {
  const columns = getColumns();
  const rows = getRows();

  const renderPageLinks = () => {
    const pageLinks: React.ReactNode[] = [];

    const pageNumbers = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const startPages = [1, 2];
      const endPages = [totalPages - 1, totalPages];

      if (currentPage <= 3) {
        pageNumbers.push(...[1, 2, 3, "...", totalPages]);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          ...[1, "...", totalPages - 2, totalPages - 1, totalPages]
        );
      } else {
        pageNumbers.push(...[1, "...", currentPage, "...", totalPages]);
      }
    }

    pageNumbers.forEach((num, index) => {
      if (num === "...") {
        pageLinks.push(
          <PaginationItem key={`ellipsis-${index}`}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      } else {
        pageLinks.push(
          <PaginationItem key={num}>
            <PaginationLink
              isActive={num === currentPage}
              onClick={() => onPageChange?.(Number(num))}
              className={
                num === currentPage
                  ? "rounded-none border border-transparent bg-[#EAEAEA]"
                  : "rounded-none border-l border-r  border-[#EAEAEA]"
              }
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        );
      }
    });

    return pageLinks;
  };

  return (
    <div className="image-table-container">
      <Table>
        <TableHeader className="image-table-head">
          <TableRow className="image-table-row">
            {columns.map((col, index) => (
              <TableHead
                key={index}
                className="image-table-th"
                style={{ width: col.width }}
              >
                {col.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="image-table-body">
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              className="image-table-row cursor-pointer"
              onClick={() => onRowClick?.(rowIndex)}
            >
              {columns.map((col, colIndex) => (
                <TableCell
                  key={colIndex}
                  className="image-table-td"
                  style={{ width: col.width }}
                >
                  {row[col.accessor]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* ShadCN Pagination */}
      {totalPages > 1 && (
        <Pagination className="mt-4">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => onPageChange?.(Math.max(currentPage - 1, 1))}
                aria-disabled={currentPage <= 1}
              />
            </PaginationItem>

            {renderPageLinks()}

            <PaginationItem>
              <PaginationNext
                onClick={() =>
                  onPageChange?.(Math.min(currentPage + 1, totalPages))
                }
                aria-disabled={currentPage >= totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default CustomTable;
