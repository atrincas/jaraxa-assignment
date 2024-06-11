import { FormEvent, useState } from 'react'
import { InputAdornment, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

interface SearchInputProps {
  onSubmit: (query: string) => void
}

export function SearchInput({ onSubmit }: SearchInputProps) {
  const [query, setQuery] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    onSubmit(query)
    // setQuery('')
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
