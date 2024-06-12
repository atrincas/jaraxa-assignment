import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { HomePageContext } from '../../context'
import { Pagination } from '../Pagination/Pagination'
import { Disclaimer } from '../Disclaimer/Disclaimer'

export function DrugList() {
  const { data, query, currentPage, totalPages } = useContext(HomePageContext)
  const navigate = useNavigate()

  if (!data?.results) return null

  return (
    <>
      <List>
        {data.results.map((item) => (
          <ListItemButton
            key={`drugListItem-${item.application_number}`}
            component={Link}
            to={`/drugs/${item.application_number}`}
          >
            <ListItemText primary={item.application_number} secondary={item.sponsor_name} />
          </ListItemButton>
        ))}
      </List>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={(page) => navigate(`/?query=${query}&page=${page}`)}
        />
      </Box>
      <Disclaimer value={data.meta?.disclaimer} />
    </>
  )
}
