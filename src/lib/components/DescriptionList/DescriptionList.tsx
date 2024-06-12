import { Chip, Divider, Paper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { OpenFDA } from '../../../types'
import InfoIcon from '@mui/icons-material/InfoOutlined'
import openFdaDescriptionMap from '../../helpers/openFdaDescriptionMap.json'
import { Link } from 'react-router-dom'
import drugsAPI from '../../drugsAPI'

interface DescriptionListProps {
  data: OpenFDA
}

export function DescriptionList({ data }: DescriptionListProps) {
  const keys = Object.keys(data)
  return (
    <Paper component="dl" sx={(t) => ({ padding: t.spacing(2), margin: 0 })}>
      {keys.map((k, i) => {
        const key = k as keyof OpenFDA
        const map = openFdaDescriptionMap as { [key: string]: string }

        return (
          <React.Fragment key={`descriptionListItem-${k}`}>
            <Typography component="dt" variant="subtitle2" gutterBottom>
              {k}
              {map[k] ? (
                <Tooltip title={map[k]}>
                  <InfoIcon color="info" fontSize="small" />
                </Tooltip>
              ) : null}
            </Typography>
            <Typography
              component="dd"
              variant="body2"
              sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}
              marginBottom={2}
            >
              {data[key].map((v) => (
                <Chip
                  component={Link}
                  to={`/?query=${drugsAPI.getQueryForField(`openfda.${key}`, v)}`}
                  key={`openfda-${v}`}
                  label={v}
                  size="small"
                  clickable
                />
              ))}
            </Typography>
            {keys.length - 1 === i ? null : <Divider sx={{ marginBottom: 2 }} />}
          </React.Fragment>
        )
      })}
    </Paper>
  )
}
