let totalGeneral = 0;
let contadorDeProductos = 0;
let listadoDeProductos = 'Listado de Productos\n\n';

function solicitarDatosUsuario() {
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su Apellido');
    alert('Bienvenido '+ nombre.toUpperCase() + ' ' + apellido.toUpperCase()
);
}

function elegirDesayuno() {
    let confirmacion = confirm('Ingrese la letra correspondiente al desayuno de su elección'
 
    +'\n\n Ingrese A - Desayuno Express $18000'
    +'\n Ingrese B - Desayuno Ejecutivo $25.000'
    +'\n Ingrese C - Desayuno Para 2 $45.000');
    
    while (confirmacion){
        ingresarSeleccionDesayuno();

        confirmacion = confirm('Desea elegir otro desayuno?');

    }

    if (contadorDeProductos >0) {
        mostrarInfo();
    }
}

function ingresarSeleccionDesayuno() {
    let nombreDesayuno, tipoDesayuno, ramoFlores, total;

    tipoDesayuno = prompt('Ingrese la letra que corresponda a su desayuno A, B o C');
    ramoFlores = prompt('Quisiera agregar un ramo de flores por $5.000?\n ¿SI o NO?');
    
    if(tipoDesayuno == 'A'){
        tipoDesayuno = '18000'
        nombreDesayuno = 'EXPRESS'
    }
    else if(tipoDesayuno == 'B'){
        tipoDesayuno = '25000'
        nombreDesayuno = 'EJECUTIVO'
    }
    else if(tipoDesayuno == 'C'){
        tipoDesayuno = '45000'
        nombreDesayuno = 'PARA 2'
    }

    if(ramoFlores == 'SI') {
        ramoFlores = '5000'
    }
    else if(ramoFlores == 'NO') {
        ramoFlores = '0'
    }

    total = calcularTotal(tipoDesayuno, ramoFlores);
    contadorDeProductos++;

    console.log({tipoDesayuno, nombreDesayuno, ramoFlores: ramoFlores, total});
    listadoDeProductos +='\n |Desayuno ' + contadorDeProductos + '\n Tipo de Desayuno: '+ nombreDesayuno + ' $' + tipoDesayuno + '\n Ramo de Flores: ' + ramoFlores +  '\n|Total $' + total + '\n'


    function calcularTotal(tipoDesayuno){
        let total = parseInt(tipoDesayuno) + parseInt(ramoFlores);
        totalGeneral += total;
    
        return total;
    
    }

}





function mostrarInfo(){
    listadoDeProductos +='\n\n||El total a pagar de todos los productos es  de $' + totalGeneral + '||';
    alert(listadoDeProductos);
    console.log(listadoDeProductos);
}

solicitarDatosUsuario();
elegirDesayuno();