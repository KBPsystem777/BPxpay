export const shortenHash = (hash: string, length: number) => {
  return `${hash.slice(0, length)}...${hash.slice(-length)}`
}
