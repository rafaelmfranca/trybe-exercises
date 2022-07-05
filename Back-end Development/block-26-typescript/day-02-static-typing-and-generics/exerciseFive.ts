type FilterCallback<T> = (item: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], callback: FilterCallback<T>) {
  const newArr: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArr.push(array[i]);
    }
  }

  return newArr;
}

console.log(myFilter([1, 2, 3, 4, 5], (item) => item >= 3));
