function ok () {
    var txt = window.document.getElementById('txtNome')
    var nome = txt.value

    var res = window.document.getElementById('res')

    res.innerHTML = `Olá ${nome}, é um prazer te conhecer!`
}