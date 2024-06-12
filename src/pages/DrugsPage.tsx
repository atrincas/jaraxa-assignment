import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiStatus, DrugsApiResponse } from '../types'
import drugsAPI from '../lib/drugsAPI'
import { Box, Container, Typography } from '@mui/material'
import {
  DescriptionList,
  Disclaimer,
  ProductsTable,
  SearchInput,
  Skeleton,
  SubmissionsTable
} from '../lib/components'

export function DrugsPage() {
  const { id } = useParams()
  const [data, setData] = useState<DrugsApiResponse | null>(null)
  const [status, setStatus] = useState(ApiStatus.Loading)
  const drug = data?.results?.[0] || null

  useEffect(() => {
    if (!id) return

    drugsAPI
      .search(`application_number:"${id}"`)
      .then((d) => {
        setData(d)
        setStatus(ApiStatus.Success)
      })
      .catch(() => setStatus(ApiStatus.Error))
  }, [])

  if (status === ApiStatus.Loading) return <Skeleton type="drugsPage" />

  if (status === ApiStatus.Error) return <div>Error occured. Try again</div>

  if (!drug)
    return <Typography variant="body1">No drug found with application_number: {id}</Typography>

  return (
    <>
      <Container maxWidth="sm">
        <SearchInput />
      </Container>
      <Container component="article" maxWidth="lg" sx={(t) => ({ padding: t.spacing(2) })}>
        <Box component="header" marginBottom={2}>
          <Typography component="h1" variant="h4">
            {drug.application_number}
          </Typography>
          <Typography variant="subtitle1">{drug.sponsor_name}</Typography>
        </Box>
        <Box component="section" marginBottom={4}>
          <ProductsTable items={drug.products} />
        </Box>
        <Box component="section" marginBottom={4}>
          <SubmissionsTable items={drug.submissions} />
        </Box>
        {drug.openfda ? (
          <Box component="section" marginBottom={4}>
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
              Openfda
            </Typography>
            <DescriptionList data={drug.openfda} />
          </Box>
        ) : null}
        <Disclaimer value={data?.meta?.disclaimer} />
      </Container>
    </>
  )
}
