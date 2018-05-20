export const indexOfRange = (arr, val) => {
  /*
  * Return the index of item if in range
  * In case item not found return -1
  * */
  const size = arr.length;
  for (let i = 0; i < size; i++) {
    const current = arr[i];
    const next = i + 1 < size ? arr[i + 1] : null;
    if (next) {
      if (val >= current && val < next) { return i;}
    } else {
      if (val >= current) {
        return i;
      }
    }
  }
  return -1;
};
