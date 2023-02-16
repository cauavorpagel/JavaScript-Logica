function go() {
    var valueA = document.getElementById('value_a').value;
    var valueB = document.getElementById('value_b').value;
    var warehouse = valueB;
    valueB = valueA;
    valueA = warehouse;
    console.log('valueA:' + valueA)
    console.log('valueB:' + valueB)
}