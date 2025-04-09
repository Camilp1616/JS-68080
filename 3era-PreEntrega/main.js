const Libro = function(titulo, autor, precio, stock) {
    this.titulo = titulo
    this.autor = autor
    this.precio = precio
    this.stock = stock
}

let Libro1 = new Libro("El país de las últimas cosas", "Paul Auster", 20000, 30)
let Libro2 = new Libro("La música del azar", "Paul Auster", 15000, 30)
let Libro3 = new Libro("Como me enamoré de Nicolás Cage", "Carla Quevedo", 350000, 100)
let Libro4 = new Libro("Ser feliz era esto", "Eduardo Sacheri", 27000, 57)

let libros = [Libro1, Libro2, Libro3, Libro4]

            libros = [
                {
                    titulo: "El país de las últimas cosas",
                    autor: "Paul Auster",
                    precio: 20000,
                    stock: 30
                },
                {
                    titulo: "La música del azar",
                    autor: "Paul Auster",
                    precio: 15000,
                    stock: 30
                },
                {
                    titulo: "Como me enamoré de Nicolás Cage",
                    autor: "Carla Quevedo",
                    precio: 350000,
                    stock: 100
                },
                {
                    titulo: "Ser feliz era esto",
                    autor: "Eduardo Sacheri",
                    precio: 27000,
                    stock: 57
                }
            ]

            localStorage.setItem("libros", JSON.stringify(libros))
            

function Buscarlibro() {
    Swal.fire({
        title: "Libreria lo de Tavs. Buscador:",
        html: `<label>Titulo:</label> <input id="titulo-input" class="swal2-input" type="text" autofocus> 
            <label>Autor:</label> <input id="autor-input" class="swal2-input" type="text">`, 
        showCancelButton: true,
        confirmButtonText: "Buscar",
    }).then((result) => {
        if (result.isConfirmed) {
            let nombre = document.getElementById("titulo-input").value.trim()
            let autor = document.getElementById("autor-input").value.trim()

            if ((nombre !== "" && !isNaN(nombre)) || (autor !== "" && !isNaN(autor))) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "El título y el autor no deben ser números."
                });
                return;
            }

            let resultados = libros.filter(libro => {
    
                return (nombre && libro.titulo.toLowerCase().includes(nombre.toLowerCase())) ||
                    (autor && libro.autor.toLowerCase().includes(autor.toLowerCase()))
            })

            if (resultados.length > 0) {
                let mensaje = "Libros encontrados:\n";
                resultados.forEach(libro => {
                    mensaje += `Título: ${libro.titulo}, Autor: ${libro.autor}, Precio: $${libro.precio}, Stock: ${libro.stock}\n`;
                });
                Swal.fire({
                    title: "Se encontraron los siguientes resultados:",
                    text: mensaje,
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "No se encontraron resultados",
                    text: "No se encontraron libros que coincidan con los criterios de búsqueda.",
                    icon: "error"
                });
            }
        }
    });
}

let boton = document.getElementById("boton")
boton.addEventListener("click", Buscarlibro)
