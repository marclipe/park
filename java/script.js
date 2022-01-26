function clicar() {
    var num = window.document.getElementById("num")
    var res = window.document.getElementById("res")
    var tab = window.document.querySelector('select#seltab')

    var n = Number(num.value)
    res.innerHTML = '' //apagar
    if(num.value.length == 0) {
        window.alert("[ERRO] Digite o número de entradas!")
    } else {
        tab.innerHTML = ''
        for(let c = 1; c <= n; c++) {
            let item = document.createElement('option')
            item.text = `${c} x ${n} = ${n*c} reais`
            tab.appendChild(item)
        }
        
        res.innerHTML += `Você adiquiriu o seguinte número de entradas: ${n} e irá pagar: `
    }
}
