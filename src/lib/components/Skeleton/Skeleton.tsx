import { Container, Skeleton as MuiSkeleton, Stack, Typography } from '@mui/material'

interface SkeletonProps {
  type: 'homePage' | 'drugsPage'
}

export function Skeleton({ type }: SkeletonProps) {
  switch (type) {
    case 'homePage':
      return (
        <>
          <MuiSkeleton
            variant="rectangular"
            height={90}
            sx={(t) => ({ marginBottom: t.spacing(1) })}
          />
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
    case 'drugsPage':
      return (
        <>
          <Container maxWidth="sm">
            <MuiSkeleton variant="rectangular" height={60} />
          </Container>
          <Container maxWidth="lg" sx={(t) => ({ padding: t.spacing(2) })}>
            <Stack spacing={2}>
              <div>
                <Typography component="div" variant="h4" width={200} margin={0}>
                  <MuiSkeleton />
                </Typography>
                <Typography component="div" variant="h6" width={150} margin={0}>
                  <MuiSkeleton />
                </Typography>
              </div>
              <div>
                <Typography component="div" variant="h6" width={150}>
                  <MuiSkeleton />
                </Typography>
                <MuiSkeleton variant="rectangular" height={250} />
              </div>
              <div>
                <Typography component="div" variant="h6" width={150}>
                  <MuiSkeleton />
                </Typography>
                <MuiSkeleton variant="rectangular" height={200} />
              </div>
              <div>
                <Typography component="div" variant="h6" width={150}>
                  <MuiSkeleton />
                </Typography>
                <MuiSkeleton variant="rectangular" height={150} />
              </div>
            </Stack>
          </Container>
        </>
      )

    default:
      return null
  }
}
