import { FormEvent, useEffect, useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

interface SearchInputProps {
  initialValue?: string
}

export function SearchInput({ initialValue }: SearchInputProps) {
  const [query, setQuery] = useState<string>(initialValue || '')
  const navigate = useNavigate()

  useEffect(() => {
    if (!initialValue || query === initialValue) return

    setQuery(initialValue)
  }, [initialValue])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!query) return
    navigate(`/?query=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        autoComplete="off"
        fullWidth
      />
    </form>
  )
}
