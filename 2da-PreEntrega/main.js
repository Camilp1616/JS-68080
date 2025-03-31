const Libro = function( titulo,autor,precio,stock){
    this.titulo = titulo
    this.autor = autor
    this.precio = precio
    this.stock = stock
}
let Libro1= new Libro("el pais de las ultimas cosas", "paul auster",20000,30)
let Libro2= new Libro("la musica del azar", "paul auster" ,15000,30)
let Libro3= new Libro("como me enamore de nicolas cage", "carla quevedo",350000,100)
let Libro4= new Libro("ser feliz era esto","eduardo sacheri",27000,57)

const libros = [Libro1,Libro2,Libro3,Libro4]


//Función para filtrar libros


function filtrarLibros(){
    let palabraClave = prompt("ingresa el nombre del libro u Autor que buscas").trim().toUpperCase()
    let resultado = libros.filter((x)=> x.titulo.toUpperCase().includes(palabraClave) || x.autor.toUpperCase().includes(palabraClave))

    if (resultado.length > 0) {
        console.table(resultado)
        alert("Hay stock. Para más detalles puedes ingresar a la consola.");
    } else {
        alert("No se encontraron coincidencias.");
    }
}

function agregarLibro(){

    let titulo = prompt("ingresa el nombre del libro").trim();
    let autor = prompt(prompt("ingresa el nombre del autor"));
    let precio = parseInt(prompt("ingresa el stock del producto"))
    let stock = parseInt(prompt("ingresa el stock del producto"))

    if(isNaN(precio) || isNaN(stock) || titulo === "" || autor === ""){ //si los datos son erroneos o vacios capturo el error
    alert("por favor ingrese datos validos")
    return; // si no pongo que retorne, me guareda el producto como NAN
    }

    let Libro = new Libro(titulo,autor,precio,stock)
    libros.push(libro)
    console.table(libros)
}

function menuPrincipal() {
    alert("Bienvenido a Libreria: lo de Tavs.");
    let continuar = true;
    while (continuar) {
        filtrarLibros()
        continuar = confirm("¿Desea seguir buscando otro libro u autor?")
    }
    alert("Gracias por elegir Lo de Tavs.")
    console.table(libros)
}

menuPrincipal()