export default function printLastElement(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    const lastElement = arr[arr.length - 1];
    return lastElement;
  }
  return undefined;
  // console.log('Массив пуст или не является массивом.');
}
