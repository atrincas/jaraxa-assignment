import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Typography,
  Link
} from '@mui/material'
import { DrugSubmission } from '../../../types'
import InfoIcon from '@mui/icons-material/InfoOutlined'
import { submissionsTableHeaders } from './Table.helpers'

interface SubmissionsTableProps {
  items: DrugSubmission[]
}

export function SubmissionsTable({ items }: SubmissionsTableProps) {
  return (
    <>
      <Typography variant="h6" component="h2" color="primary" gutterBottom>
        Submissions
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {submissionsTableHeaders.map((cell) => (
                <TableCell key={`SubmissionsTableCell-${cell.label}`}>
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
                key={`SubmissionsTableRow-${row.submission_number}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.submission_number}</TableCell>
                <TableCell>{row.submission_type}</TableCell>
                <TableCell>{row.submission_status}</TableCell>
                <TableCell>{row.submission_class_code}</TableCell>
                <TableCell>{row.submission_class_code}</TableCell>
                <TableCell>
                  {row.application_docs?.map((a) => (
                    <Link
                      key={`applicationDocLink-${a.id}`}
                      href={a.url}
                      target="_blank"
                      marginRight={1}
                    >
                      {a.id}
                    </Link>
                  ))}
                </TableCell>
                <TableCell>{row.submission_public_notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
