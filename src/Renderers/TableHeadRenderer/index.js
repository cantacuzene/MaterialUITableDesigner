import React from 'react'
import { TableHead } from '@material-ui/core'
import { RecursiveTableRowRenderer } from '../RowRendered'

const TableHeadRenderer = props => {
  const config = props.config

  return (
    <TableHead>
      <RecursiveTableRowRenderer config={config} />
    </TableHead>
  )
}

export { TableHeadRenderer }
