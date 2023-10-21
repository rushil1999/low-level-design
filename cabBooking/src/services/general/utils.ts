export const checkIfStringIsEmpty = (str: string): boolean => {
  if (str.length === 0) {
    return true
  }
  return false
}

export const isNullOrUndefined = (item: any) => {
  return item === undefined || item === null ? true : false;
}