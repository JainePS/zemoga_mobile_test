const objectCount = (arr: any[]) => {
  let objectsLen = 0;
  for (let i = 0; i < arr.length; i++) {
    // if entity is object, increase objectsLen by 1, which is the stores the total number of objects in array.
    if (arr[i] instanceof Object) {
      objectsLen++;
    }
  }

  return objectsLen;
};

export default objectCount;
