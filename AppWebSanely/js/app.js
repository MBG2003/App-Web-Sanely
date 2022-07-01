const productos = [
    new Producto("Carro 1", "Niños", 15000),
    new Producto("Carro 2", "Niños", 10000),
    new Producto("Carro 3", "Niños", 7000),
    new Producto("Carro 4", "Niños", 5000),
    new Producto("Carro 5", "Niños", 4000),
    new Producto("Carro 6", "Niños", 3000),
    new Producto("Carro 7", "Niños", 2000),
    new Producto("Carro 8", "Niños", 1000),
    new Producto("Carro 9", "Niños", 500)
];

const carrito = [];

const cargarPagina = () => {
    cargarProductos();
    document.getElementById("cantProductosCarrito").innerHTML = carrito.length;
}

const cargarProductos = () => {
    let productosHTML = "";
    for(let producto of productos){
        productosHTML += crearProductoHTML(producto);
    }
    document.getElementById("productos").innerHTML = productosHTML;
}

let crearProductoHTML = (producto) => {
    let productoHTML = `
    <div class="producto" onclick="agregarProductoCarrito(${producto.id})">
        <img src="/10.jpg" alt="Foto producto">
        <div class="producto-descripcion">
            <p>Nombre: ${producto.nombre}</p>
            <p>Tipo: ${producto.tipo}</p>
            <p>Precio: ${formatoMoneda(producto.precio)}</p>
        </div>
    </div>`;
    return productoHTML;
}

const agregarProductoCarrito = (id) => {
    let indiceAgregar = productos.findIndex(producto => producto.id === id);
    carrito.push(productos[indiceAgregar]);
    alert("Producto agregado al carrito");
    console.log(carrito);
    cargarPagina();
}

const abrirInicio = () => {

}

const abrirProductos = () => {
    
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString("es-CO", {style:"currency", currency:"COP", minimumFractionDigits:2});
}