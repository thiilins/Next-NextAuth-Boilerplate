/* eslint-disable @typescript-eslint/no-explicit-any */
export const removeNullOrUndefined = <T>(obj: T): Partial<T> => {
  const newObj: any = { ...obj }
  Object.keys(newObj).forEach(key => {
    if (newObj[key] === null || newObj[key] === undefined) {
      delete newObj[key]
    }
  })
  return newObj
}

export const removeNullOrUndefinedOrEmpty = <T>(obj: T): Partial<T> => {
  const newObj: any = { ...obj }
  Object.keys(newObj).forEach(key => {
    if (
      newObj[key] === null ||
      newObj[key] === undefined ||
      newObj[key] === ''
    ) {
      delete newObj[key]
    }
  })
  return newObj
}
