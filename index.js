function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      i--; // зменшуємо лічильник, щоб не пропустити наступний елемент
    }
  }
  return array;
}
const arr = [1, 2, 3, 2, 4, 2];
console.log(removeElement(arr, 2)); // виведе [1, 3, 4]