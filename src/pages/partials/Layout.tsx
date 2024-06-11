import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <Box padding={2}>
      <Outlet />
    </Box>
  )
}
