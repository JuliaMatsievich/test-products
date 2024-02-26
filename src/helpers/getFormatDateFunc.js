export const getFormatDate = () => {
  const data = new Date()
  const year = data.getUTCFullYear()
  let month = data.getUTCMonth() + 1
  if (month < 10) month = `0${month}`
  const day = data.getUTCDate()
  return `${year}${month}${day}`
}
