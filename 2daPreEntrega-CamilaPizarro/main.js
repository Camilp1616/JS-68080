const Producto = function( titulo,autor,precio,stock){
    this.titulo = titulo
    this.autor = autor
    this.precio = precio
    this.stock = stock
}
let producto1= new Producto("el pais de las ultimas cosas", "paul auster",20000,30)
let producto2= new Producto("la musica del azar", "paul auster" ,15000,30)
let producto3= new Producto("como me enamore de nicolas cage", "carla quevedo",350000,100)
let producto4= new Producto("ser feliz era esto","eduardo sacheri",27000,57)

const lista = [producto1,producto2,producto3,producto4]


//filtrar los productos para modificarlos


function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que buscas").trim().toUpperCase()
    let resultado = lista.filter((x)=> x.titulo.toUpperCase().includes(palabraClave) || x.autor.toUpperCase().includes(palabraClave))


    if(resultado.length >0){ // si es mayor a 0, significa que al menos un resultado encontro
        console.table(resultado)
    }else{
        alert("no se encontraron coincidencias en la base")
    }
}

function agregarProducto(){

    let titulo = prompt("ingresa el nombre del producto").trim();
    let autor = prompt(prompt("ingresa el nombre del autor"));
    let precio = parseInt(prompt("ingresa el stock del producto"))
    let stock = parseInt(prompt("ingresa el stock del producto"))

    if(isNaN(precio) || isNaN(stock) || titulo === "" || autor === ""){ //si los datos son erroneos o vacios capturo el error
    alert("por favor ingrese datos validos")
    return; // si no pongo que retorne, me guareda el producto como NAN
    }

    let producto = new Producto(titulo,autor,precio,stock)
    lista.push(producto)
    console.table(lista)
}