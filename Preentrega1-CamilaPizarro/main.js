function login () {
    let intentos = 1
let identificar = true

do {
    let usuario = prompt ("Bienvenido, ingrese su usuario para continuar")
    if (usuario === null || usuario === ""){
        break
    }
    if (usuario === "camila pizarro" && intentos <=3){
        alert ("bienvenida camila")
        identificar = false
    }else{
        alert ("usuario incorrecto")
        intentos ++
        if (intentos > 3) {
        alert ("usted supero los 3 intentos de inicio de sesion")
        break 
        }
    }
}while (identificar)
}

login ()