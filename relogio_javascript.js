function moveRelogio(){
    momentoAtual = new Date()
    hora = momentoAtual.getHours()
    minuto = momentoAtual.getMinutes()
    segundo = momentoAtual.getSeconds()

    horaImprimivel = hora + "h : " + minuto + "m : " + segundo + "s"

    document.form_relogio.relogio.value = horaImprimivel

    setTimeout("moveRelogio()",1000)
}