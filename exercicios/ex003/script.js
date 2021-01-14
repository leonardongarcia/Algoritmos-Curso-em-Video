function verificar() {
    var nomeFunc = window.document.getElementById('txtFunc')
    var nome = nomeFunc.value

    var salFunc = window.document.getElementById('txtSal')
    var sal = salFunc.value

    var res = window.document.getElementById('res')

    res.innerHTML = `O funcionário ${nome} recebe um salário mensal de R$ ${sal}.`
}