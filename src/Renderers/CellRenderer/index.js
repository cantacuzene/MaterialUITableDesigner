import React from 'react'
import { TableCell } from '@material-ui/core'

const TableCellRenderer = props => {
  const { config, colSpan } = props
  return <TableCell colSpan={colSpan}>{config.code}</TableCell>
}

export { TableCellRenderer }
