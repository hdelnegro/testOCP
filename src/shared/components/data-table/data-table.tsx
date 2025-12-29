import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table"
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { Button } from "@/shared/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu"
import { Input } from "@/shared/components/ui/input"
import { useSidebar } from "@/shared/components/ui/sidebar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table"
import { DataTablePagination } from "./data-table-pagination"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchKey?: string
  searchPlaceholder?: string
  pageSize?: number
  onRowClick?: (row: TData) => void
  enableColumnVisibility?: boolean
  enableSearch?: boolean
  enableRowSelection?: boolean
  className?: string
  maxHeight?: string
  // Propiedades para paginación controlada
  manualPagination?: boolean
  pageCount?: number
  pageIndex?: number
  onPaginationChange?: (pageIndex: number, pageSize: number) => void
  customActions?: React.ReactNode
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchKey,
  searchPlaceholder = "Buscar...",
  pageSize = 10,
  onRowClick,
  enableColumnVisibility = false,
  enableSearch = false,
  enableRowSelection = false,
  className = "",
  maxHeight = "calc(100vh - 200px)",
  // Propiedades para paginación controlada
  manualPagination = false,
  pageCount,
  pageIndex: controlledPageIndex,
  onPaginationChange,
  customActions,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [globalFilter, setGlobalFilter] = React.useState("")
  const [pagination, setPagination] = React.useState({
    pageIndex: controlledPageIndex ?? 0,
    pageSize: pageSize,
  })

  // Sincronizar el estado interno con el prop controlledPageIndex
  React.useEffect(() => {
    if (controlledPageIndex !== undefined && controlledPageIndex !== pagination.pageIndex) {
      setPagination(prev => ({ ...prev, pageIndex: controlledPageIndex }));
    }
  }, [controlledPageIndex]);

  const { state } = useSidebar()

  const sidebarWidth = state === "expanded" ? 288 : 96 // 18rem = 288px, 6rem = 96px
  const padding = 70
  const availableWidth = `calc(100vw - ${sidebarWidth + padding}px)`

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: (updater) => {
      const newPagination = typeof updater === 'function'
        ? updater(pagination)
        : updater;

      setPagination(newPagination);

      // Si hay paginación manual, notificar al padre
      if (manualPagination && onPaginationChange) {
        onPaginationChange(newPagination.pageIndex, newPagination.pageSize);
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    // Configuración de paginación
    manualPagination,
    pageCount: manualPagination ? pageCount : undefined,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
      pagination,
    },
  })

  // Filtrar columnas que se pueden ocultar
  const hidableColumns = table
    .getAllColumns()
    .filter((column) => column.getCanHide())

  return (
    <div className={`w-full space-y-4 ${className}`}>
      {/* Header con controles */}
      {(enableSearch || enableColumnVisibility || customActions) && (
        <div className="flex items-center justify-between" style={{ width: availableWidth }}>
          <div className="flex flex-1 items-center space-x-2">
            {enableSearch && (
              <Input
                placeholder={searchPlaceholder}
                value={
                  searchKey
                    ? (table.getColumn(searchKey)?.getFilterValue() as string) ?? ""
                    : globalFilter
                }
                onChange={(event) => {
                  if (searchKey) {
                    table.getColumn(searchKey)?.setFilterValue(event.target.value)
                  } else {
                    setGlobalFilter(event.target.value)
                  }
                }}
                className="max-w-sm"
              />
            )}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            {customActions}
            {enableColumnVisibility && hidableColumns.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secundario">
                    Columnas <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {hidableColumns.map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    )
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      )}

      {/* Tabla con scroll */}
      <div
        className="relative overflow-auto rounded-md border"
        style={{
          maxHeight,
          width: availableWidth,
          minWidth: '800px'
        }}
      >
        <div className="min-w-full">
          <Table className="min-w-[1200px]">
            <TableHeader className="sticky top-0 z-10 bg-primary-500">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-b-0">
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} className="bg-primary-500 text-white">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
                    onClick={() => onRowClick?.(row.original)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="whitespace-normal">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No se encontraron resultados.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      <DataTablePagination table={table} showSelection={enableRowSelection} />
    </div>
  )
}