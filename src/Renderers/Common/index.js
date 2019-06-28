const countLeafs = element => {
  let res = 0
  if (element.children !== undefined) {
    return (
      res +
      element.children
        .map(o => countLeafs(o))
        .reduce((acc, next) => acc + next, 0)
    )
  } else {
    return 1
  }
}

export { countLeafs }
