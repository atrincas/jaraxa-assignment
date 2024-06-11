import { useState } from 'react'
import { ApiStatus, DrugsApiResponse } from '../../types'
import drugsAPI from '../drugsAPI'

export function useDrugsApi() {
  const [data, setData] = useState<DrugsApiResponse | null>(null)
  const [status, setStatus] = useState(ApiStatus.Pending)
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  async function search(q: string, skip?: number) {
    if (q !== query) {
      setQuery(q)
    }

    setStatus(ApiStatus.Loading)

    const result = await drugsAPI.search(q, skip)

    setData(result)

    if (result.error) {
      setStatus(ApiStatus.Error)
    } else if (result.meta) {
      const metaResults = result.meta.results
      const newTotalPages = Math.ceil(metaResults.total / metaResults.limit)
      const newCurrentPage = Math.floor(metaResults.skip / metaResults.limit) + 1

      if (newTotalPages !== totalPages) {
        setTotalPages(newTotalPages)
      }

      if (newCurrentPage !== currentPage) {
        setCurrentPage(newCurrentPage)
      }

      setStatus(ApiStatus.Success)
    }
  }

  return { search, query, data, status, totalPages, currentPage }
}
