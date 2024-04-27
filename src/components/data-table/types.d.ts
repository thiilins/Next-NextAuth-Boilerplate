interface IFiltersTableData {
  placeholder: string
  value: string
}

interface IDataTableProps<T> {
  data: T[]
  columns: ColumnDef<T>[]
  filters?: IFiltersTableData[]
}
/**
 *
 *   <Input
          placeholder="Filtrar Alias..."
          value={(table.getColumn('alias')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('alias')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
 */
/**
 *
 *   <Input
          placeholder="Filtrar Alias..."
          value={(table.getColumn('alias')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('alias')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
 */
