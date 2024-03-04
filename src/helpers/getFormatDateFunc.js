export const getFormatDate = () => {
  const data = new Date()
  const year = data.getUTCFullYear()
  let month = data.getUTCMonth() + 1
  if (month < 10) month = `0${month}`
  let day = data.getUTCDate()
  if (day < 10) day = `0${day}`
  return `${year}${month}${day}`
}
