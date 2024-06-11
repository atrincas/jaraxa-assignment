import { createContext, useEffect } from 'react'
import { ApiStatus, DrugsApiResponse } from '../../types'
import { useSearchParams } from 'react-router-dom'
import { useDrugsApi } from '../hooks'

interface ProviderProps {
  children?: React.ReactNode
}

interface HomePageState {
  data: DrugsApiResponse | null
  status: ApiStatus
  query: string
  currentPage: number
  totalPages: number
  search: (q: string, skip?: number) => Promise<void>
}

const HomePageContext = createContext<HomePageState>({} as HomePageState)
const HomePageProvider = (props: ProviderProps) => {
  const { query, data, status, totalPages, currentPage, search } = useDrugsApi()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('query')
    const page = searchParams.get('page')
    const limit = searchParams.get('limit')

    if (!query) return

    let skip: number | undefined

    if (!isNaN(Number(page)) && !isNaN(Number(limit))) {
      skip = (Number(page) - 1) * Number(limit)
    }

    search(query, skip)
  }, [searchParams])

  return (
    <HomePageContext.Provider value={{ search, query, data, status, totalPages, currentPage }}>
      {props.children}
    </HomePageContext.Provider>
  )
}

export { HomePageContext, HomePageProvider }
