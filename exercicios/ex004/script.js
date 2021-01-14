function verificar() {
    var n1 = window.document.getElementById('n1')
    var num1 = Number(n1.value)
    

    var n2 = window.document.getElementById('n2')
    var num2 = Number(n2.value)
    

    var res = window.document.getElementById('res')

    var s = num1 + num2

    res.innerHTML = `A soma entre ${num1} e ${num2} é igual a ${s}.`
}