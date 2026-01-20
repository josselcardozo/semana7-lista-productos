// Arreglo de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 850,
        descripcion: "Laptop para uso académico"
    },
    {
        nombre: "Mouse",
        precio: 15,
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: 25,
        descripcion: "Teclado básico"
    }
];

// Referencias al DOM
const lista = document.getElementById("lista-productos");
const boton = document.getElementById("btn-agregar");

// Función para renderizar productos
function renderizarProductos() {
    lista.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Renderizar al cargar la página
renderizarProductos();

// Evento para agregar producto
boton.addEventListener("click", () => {
    productos.push({
        nombre: "Producto nuevo",
        precio: 10,
        descripcion: "Descripción del producto"
    });

    renderizarProductos();
});
