export function truncate(n, useWordBoundary = false) {
  if (this.length <= n) {
    return this
  }

  const subString = this.substr(0, n - 1)

  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + ' ...'
  )
}