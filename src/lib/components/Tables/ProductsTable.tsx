import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Typography
} from '@mui/material'
import { DrugProduct } from '../../../types'
import InfoIcon from '@mui/icons-material/InfoOutlined'
import { productsTableHeaders } from './Table.helpers'
import React from 'react'

interface ProductsTableProps {
  items: DrugProduct[]
}

export function ProductsTable({ items }: ProductsTableProps) {
  return (
    <>
      <Typography variant="h6" component="h2" color="primary" gutterBottom>
        Products
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {productsTableHeaders.map((cell) => (
                <TableCell key={`productsTableCell-${cell.label}`}>
                  {cell.label}
                  {cell.description ? (
                    <Tooltip title={cell.description}>
                      <InfoIcon color="info" fontSize="small" />
                    </Tooltip>
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow
                key={`productsTableRow-${row.product_number}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.product_number}</TableCell>
                <TableCell>{row.brand_name}</TableCell>
                <TableCell>{row.marketing_status}</TableCell>
                <TableCell>
                  {row.active_ingredients.map((a) => (
                    <React.Fragment key={`ingredient-${a.name}`}>
                      <Typography variant="body2">{a.name}</Typography>
                      <Typography variant="caption">({a.strength})</Typography>
                    </React.Fragment>
                  ))}
                </TableCell>
                <TableCell>{row.dosage_form}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
