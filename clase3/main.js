let intentos = 1
let identificar = true

do {
    let usuario = prompt ("ingrese su usuario")
    if (usuario === null) {
        break
    }
    if (usuario === "camila pizarro" && intentos <=3){
        alert ("bienvenida camila")
        identificar = false
    }else{
        alert ("usuario incorrecto")
        intentos ++
        if (intentos > 3) {
        alert ("usted supero los 3 intentos")
        break 
        }
    }
}while (identificar)