import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function DrugsPage() {
  const { id } = useParams()

  useEffect(() => {
    if (!id) return

    console.log(id)
  }, [])
  return <div>DrugsPage Component</div>
}
