import { Typography } from '@mui/material'

interface ErrorMessageProps {
  value?: string
}

export function ErrorMessage({ value }: ErrorMessageProps) {
  if (!value) return null

  return (
    <Typography variant="body2" color="red" align="center">
      {value}
    </Typography>
  )
}
