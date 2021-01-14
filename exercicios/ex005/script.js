function verificar() {
    var n1 = window.document.getElementById('n1')
    var num1 = Number(n1.value)
    

    var n2 = window.document.getElementById('n2')
    var num2 = Number(n2.value)
    

    var res = window.document.getElementById('res')

    var m = (num1 + num2) / 2

    res.innerHTML = `A média entre a nota ${num1} e a nota ${num2} é igual a ${m}.`
}