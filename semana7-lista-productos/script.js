const productos = [
    { nombre: "Laptop", precio: 850, descripcion: "Laptop para estudio" },
    { nombre: "Mouse", precio: 15, descripcion: "Mouse inalámbrico" },
    { nombre: "Teclado", precio: 25, descripcion: "Teclado básico" }
];

const lista = document.getElementById("lista-productos");

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

renderizarProductos();

document.getElementById("btn-agregar").addEventListener("click", () => {
    productos.push({
        nombre: "Producto nuevo",
        precio: 10,
        descripcion: "Descripción del producto"
    });
    renderizarProductos();
});
