import { Pagination as MuiPagination } from '@mui/material'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onChange: (page: number) => void
}

export function Pagination({ totalPages, currentPage, onChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    if (page < 1 || page > totalPages) return
    onChange(page)
  }

  return <MuiPagination count={totalPages} page={currentPage} onChange={handlePageChange} />
}
