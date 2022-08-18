var sout;
var i;
var j;
var x = parseInt(prompt('Nhap so hang va cot ban muon tao:'))
sout = sout + <table>;
    for (i = 0; i < x; i++) {
        sout = sout + <tr>;
            for (j = 0; j < x ; j++) {
                sout = sout + <td> + 0 + </td>
            }
            sout = sout + </tr>
    }
sout = sout + </table>;