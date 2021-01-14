function verificar() {
    var n1 = window.document.getElementById('n1')
    var num = Number(n1.value)

    var num1 = num * 1000
    var num2 = num * 100
    var num3 = num * 10
    var num4 = num / 10
    var num5 = num / 100
    var num6 = num / 1000

    res.innerHTML = `A distância de ${num} metros corresponde a:`
    res1.innerHTML = `${num1} mm.`
    res2.innerHTML = `${num2} cm.`
    res3.innerHTML = `${num3} dm.`
    res4.innerHTML = `${num4} Dam.`
    res5.innerHTML = `${num5} Hm.`
    res6.innerHTML = `${num6} Km.`
}