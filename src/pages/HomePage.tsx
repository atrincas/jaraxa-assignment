import { Container } from '@mui/material'
import { ErrorMessage, DrugList, SearchInput, Skeleton } from '../lib/components'
import { ApiStatus } from '../types'
import { HomePageContext, HomePageProvider } from '../lib/context'
import { useContext } from 'react'

// Context Wrapper
export function HomePage() {
  return (
    <HomePageProvider>
      <HomePageInner />
    </HomePageProvider>
  )
}

function HomePageInner() {
  const { status, query } = useContext(HomePageContext)
  let Component = null

  if (status === ApiStatus.Loading) {
    Component = <Skeleton type="homePage" />
  }

  if (status === ApiStatus.Error) {
    Component = <ErrorMessage />
  }

  if (status === ApiStatus.Success) {
    Component = <DrugList />
  }
  return (
    <>
      <Container maxWidth="sm">
        <SearchInput initialValue={query} />
      </Container>
      <Container maxWidth="lg" sx={(t) => ({ padding: t.spacing(2) })}>
        {Component}
      </Container>
    </>
  )
}
