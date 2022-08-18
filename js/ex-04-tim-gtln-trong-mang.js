// Hoi lam sao de nguoi ngoai nhap input la cac so bat ky de may tinh lua chon so lon nhat

var array = [22, 35, 14, 62, 70, 69];
var i = 0;

for (i=0; i < array.length - 1; i++) {
    var maxNumber = array[i];
    if (maxNumber < array[i+1]) {
        maxNumber = array[i+1];
    }
}
document.write('So lon nhat trong day ' + array + ' la: ' + maxNumber);