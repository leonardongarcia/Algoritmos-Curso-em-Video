function verificar() {
    var n1 = window.document.getElementById('n1')
    var num = Number(n1.value)

    var res = window.document.getElementById('res')

    var num1 = num + 1

    var num2 = num - 1

    res.innerHTML = `O número sucessor de ${num} é ${num1} e o seu antecessor é ${num2}.`


}