var x = 0;
var array = Array();
function add_element_to_array() {
    array [x] = document.getElementById('textValue').value;
    alert('Element: ' + array[x] + ' Added at index ' + x);
    x++;
    document.getElementById('textValue').value = '';
}

function compare_element_to_array() {
    var array = [x]
    var text = '';
    for (var i = 0; i < array.length; i++) {
        text += 'Element ' + i + ' = ' + array[i] + '</br>';
    }
    document.write(text);
}