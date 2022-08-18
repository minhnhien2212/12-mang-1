let array = [-2, 5, 1, 9, 7, 3];
let first = 0;
let last = array.length -1;
while (first < last) {
    let b = array[first];
    array[first] = array[last];
    array[last] = b;
    first++;
    last--;
} document.write(array);