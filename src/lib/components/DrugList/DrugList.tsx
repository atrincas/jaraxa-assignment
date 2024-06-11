import { List, ListItemButton, ListItemText } from '@mui/material'
import { DrugResult } from '../../../types'

interface DrugListProps {
  items: DrugResult[]
}

export function DrugList({ items }: DrugListProps) {
  return (
    <List>
      {items.map((item) => (
        <ListItemButton
          key={item.application_number}
          component="a"
          href={`/${item.application_number}`}
        >
          <ListItemText primary={item.application_number} secondary={item.sponsor_name} />
        </ListItemButton>
      ))}
    </List>
  )
}
