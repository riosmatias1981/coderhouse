let totalGeneral = 0;
let contadorDeProductos = 0;
let listadoDeProductos = 'Listado de Productos\n\n';

function solicitarDatosUsuario() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su Apellido');
    alert('Bienvenido '+ nombre + ' ' + apellido);
}

function agregarProductos() {
    let confirmacion = confirm('Desea agregar un producto a su carrito?');
    
    while (confirmacion){
        introducirDatosProducto();

        confirmacion = confirm('Desea agregar un producto a su carrito?');

    }

    if (contadorDeProductos >0) {
        mostrarInfo();
    }
}

function introducirDatosProducto() {
    let nombre, precio, cantidad, total;

    nombre = prompt('Ingrese el Nombre del Producto');
    precio = parseFloat(prompt('Ingrese el precio del Producto'));
    cantidad = parseInt(prompt('Ingrese la cantidad de Productos'));
    total = calcularTotal(precio, cantidad);
    contadorDeProductos++;

    console.log({nombre, precio, cantidad, total});
    listadoDeProductos +='Producto' + contadorDeProductos + '\n|Nombre: '+ nombre + '|Precio: ' + precio + '|Cantidad' + cantidad + '\n|Total $' + total + '\n'
}

function calcularTotal(precio, cantidad){
    let total = precio * cantidad;
    totalGeneral += total;

    return total;

}

function mostrarInfo(){
    listadoDeProductos +='\n\nEl total a pagar de todos los productos es  de $' + totalGeneral;
    alert(listadoDeProductos);
    console.log(listadoDeProductos);
}

solicitarDatosUsuario();
agregarProductos();