import React from 'react'
import { TableRow } from '@material-ui/core'
import { TableCellRenderer } from '../CellRenderer'
import * as R from 'ramda'
import { countLeafs } from '../Common'

const RecursiveTableRowRenderer = props => {
  const config = props.config

  const children = R.chain(
    R.map(o => o),
    config.filter(x => x.children !== undefined).map(d => d.children)
  )

  return (
    <>
      <TableRowRenderer config={config} />
      {children.length > 0 && <RecursiveTableRowRenderer config={children} />}
    </>
  )
  //
}

const TableRowRenderer = props => {
  const { config } = props

  return (
    <TableRow>
      {config.map(o => {
        const cols = countLeafs(o)
        console.log({ code: o.code, cols })
        return <TableCellRenderer key={o.code} config={o} colSpan={cols} />
      })}
    </TableRow>
  )
}

export { RecursiveTableRowRenderer, TableRowRenderer }
