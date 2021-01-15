function verificar() {
    var n1 = window.document.getElementById('n1')
    var num = Number(n1.value)

    var res = window.document.getElementById('res')

    var dol = num / 5.20

    res.innerHTML = `Você tem R$${num} em sua carteira, e você consegue comprar U$${dol}.`

}