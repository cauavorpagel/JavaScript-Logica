function go() {
    var numA = parseInt(document.querySelector('#valueA').value);
    var numB = parseInt(document.querySelector('#valueB').value);

    var selectOperation = document.querySelector('input[name="operation"]:checked').value;
    var nameOperation, calc;

    if(selectOperation == 'addiction') {
        nameOperation = 'Addction';
        calc = numA + numB;
    } else if (selectOperation == 'subtraction'){
        nameOperation = 'Subtraction';
        calc = numA + numB;
    }

    console.log(calc);
    

}