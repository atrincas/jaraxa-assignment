import { Skeleton as MuiSkeleton } from '@mui/material'

export function Skeleton() {
  return (
    <>
      <MuiSkeleton variant="rectangular" height={90} sx={(t) => ({ marginBottom: t.spacing(1) })} />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
      <MuiSkeleton />
    </>
  )
}
