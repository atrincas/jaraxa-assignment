import { Alert } from '@mui/material'

interface DisclaimerProps {
  value?: string
}

export function Disclaimer({ value }: DisclaimerProps) {
  if (!value) return null

  return <Alert severity="info">{value}</Alert>
}
