function verificar() {
    var n1 = window.document.getElementById('n1')
    var num = Number(n1.value)

    var res = window.document.getElementById('res')
    var res1 = window.document.getElementById('res1')

    var num1 = num * 2
    var num2 = num / 3

    res.innerHTML = `O dobro de ${num} é ${num1}.`
    res1.innerHTML = `A terça parte de ${num} é ${num2}.`
}