let libros = [];

function mostrarLibros(libros) {
const contenedor = document.getElementById("lista-stock");
contenedor.innerHTML = "";

libros.forEach(libro => {
    const div = document.createElement("div");
    div.innerHTML = `
    <strong>${libro.titulo}</strong><br>
    Autor: ${libro.autor}<br>`;

    div.addEventListener("click", () => {
        Swal.fire({
        title: libro.titulo,
        html: `
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Precio:</strong> $${libro.precio}</p>
        <p><strong>Stock:</strong> ${libro.stock}</p>
        `,
        icon: "info"
    });
    });

    contenedor.appendChild(div);
});
}

function Buscarlibro() {
    Swal.fire({
    title: "Buscador de libros",
    html: `
    <label>Título:</label> <input id="titulo-input" class="swal2-input" type="text" autofocus>
    <label>Autor:</label> <input id="autor-input" class="swal2-input" type="text">
    `,
    showCancelButton: true,
    confirmButtonText: "Buscar"
}).then(result => {
    if (result.isConfirmed) {
    const nombre = document.getElementById("titulo-input").value.trim();
    const autor = document.getElementById("autor-input").value.trim();

    if ((nombre !== "" && !isNaN(nombre)) || (autor !== "" && !isNaN(autor))) {
        Swal.fire({
        icon: "error",
        title: "Error",
        text: "El título y el autor no deben ser números."
        });
        return;
    }

    const resultados = libros.filter(libro =>
        (nombre && libro.titulo.toLowerCase().includes(nombre.toLowerCase())) ||
        (autor && libro.autor.toLowerCase().includes(autor.toLowerCase()))
    );

    if (resultados.length > 0) {
        let mensaje = "";
        resultados.forEach(libro => {
        mensaje += `${libro.titulo} - ${libro.autor} - $${libro.precio} (Stock: ${libro.stock})\n\n`;
        });
        Swal.fire({
        title: "Resultados encontrados",
        text: mensaje,
        icon: "success"
        });
    } else {
        Swal.fire({
        title: "Sin resultados",
        text: "No se encontraron coincidencias.",
        icon: "error"
        });
    }
    }
});
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("libros.json")  // <-- acá va tu archivo externo
    .then(response => {
    if (!response.ok) {
        throw new Error("Error al cargar el JSON");
    }
    return response.json();
    })
    .then(data => {
    libros = data;
    localStorage.setItem("libros", JSON.stringify(libros));
    mostrarLibros(libros);
    })
    .catch(error => {
    console.error("Error al cargar libros:", error);
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudieron cargar los libros."
    });
    });

document.getElementById("boton").addEventListener("click", Buscarlibro);
});