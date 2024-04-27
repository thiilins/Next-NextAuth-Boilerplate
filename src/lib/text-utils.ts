export const generateShortValues = (data: string[], sliceSize = 2) => {
  const values =
    data.length > sliceSize
      ? data.slice(0, sliceSize)?.map(item => String(item))
      : data.map(item => String(item))
  return data.length > sliceSize
    ? [...values, `+ ${data.length - sliceSize}`]
    : values
}
export const reverseString = (string: string) => {
  const splitString = string.split('')
  const reverseArray = splitString.reverse()
  const joinArray = reverseArray.join('')
  return joinArray
}

export const toTitleCase = (string: string) => {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}
