var value = parseInt(prompt('Enter a number:'));
var array = [1, 3, 5, 7, 9, 11, 13, 15];
var i; //

for (var i = 0; i < array.length - 1; i++) {
    if (value == array[i]) {
        alert('Your input is found in position ' + i);
        break;
    }

}
