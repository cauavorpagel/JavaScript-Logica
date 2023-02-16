function go() {
    var age_a = parseInt(document.querySelector('#num_a').value);
    var age_b = parseInt(document.querySelector('#num_b').value);

    var sum = age_a + age_b;

    var average = sum / 2

    console.log('A soma das idades é ' + sum)
    console.log('A média das idades é ' + average)
}