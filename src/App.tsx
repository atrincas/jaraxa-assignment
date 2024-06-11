import { Box, Container, CssBaseline } from '@mui/material'
import {
  Disclaimer,
  ErrorMessage,
  DrugList,
  SearchInput,
  Pagination,
  Skeleton
} from './lib/components'
import { useDrugsApi } from './lib/hooks'
import { ApiStatus } from './types'

function App() {
  const { search, query, data, status, currentPage, totalPages } = useDrugsApi()
  let Component = null

  if (status === ApiStatus.Loading) {
    Component = <Skeleton />
  }

  if (status === ApiStatus.Error) {
    Component = <ErrorMessage value={data?.error?.message} />
  }

  if (status === ApiStatus.Success) {
    Component = (
      <>
        <DrugList items={data?.results || []} />
        <Box display="flex" justifyContent="center" marginBottom={2}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={(page) => {
              if (!data?.meta?.results.limit) return

              const skip = (page - 1) * data.meta.results.limit
              search(query, skip)
            }}
          />
        </Box>
        <Disclaimer value={data?.meta?.disclaimer} />
      </>
    )
  }
  console.log({ data, status })
  return (
    <>
      <CssBaseline />
      <Box padding={2}>
        <Container maxWidth="sm">
          <SearchInput onSubmit={search} />
        </Container>
        <Container maxWidth="md" sx={(t) => ({ padding: t.spacing(2) })}>
          {Component}
        </Container>
      </Box>
    </>
  )
}

export default App
