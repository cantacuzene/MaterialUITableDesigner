import React from 'react'
import { Table } from '@material-ui/core'
import { TableHeadRenderer } from '../TableHeadRenderer'

const TableRenderer = props => {
  const { config } = props
  return (
    <Table>
      <TableHeadRenderer config={config.Head} />
    </Table>
  )
}

export { TableRenderer }
