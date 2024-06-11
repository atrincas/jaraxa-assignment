import { Typography } from '@mui/material'
import { useContext } from 'react'
import { HomePageContext } from '../../context'

export function ErrorMessage() {
  const { data } = useContext(HomePageContext)

  if (!data?.error) return null

  return (
    <Typography variant="body2" color="red" align="center">
      {data.error.message}
    </Typography>
  )
}
