
let totalGeneral = 0;
let contadorDeProductos = 0;
let listadoDeProductos = 'Listado de Productos\n\n';

function solicitarDatosUsuario() {
//Se solicitan datos al usuario para Saludo personalizado
    let nombre = prompt('Ingrese su nombre');
    let apellido = prompt('Ingrese su Apellido');
    alert('Bienvenido '+ nombre.toUpperCase() + ' ' + apellido.toUpperCase()
);
}

function elegirDesayuno() {
    let confirmacion = confirm('Ingrese la letra correspondiente al desayuno de su elección'

    //se indica cuales son los desayunos ofertados y la letra que debe ingresar para su seleccion
    +'\n\n Ingrese A - Desayuno Express $18000'
    +'\n Ingrese B - Desayuno Ejecutivo $25.000'
    +'\n Ingrese C - Desayuno Para 2 $45.000');

    //Una vez que selecciona un desayuno se le ofrece la posibilidad de escoger otro
    while (confirmacion){
        ingresarSeleccionDesayuno();

        confirmacion = confirm('Desea elegir otro desayuno?');

    }

    //Una vez que termino la selección si es que hay al menos uno seleccionado muestra el listado de la solicitud    
    if (contadorDeProductos >0) {
        mostrarInfo();
    }
}

//Ingresa la opción que permite la selección del desayuno
function ingresarSeleccionDesayuno() {
    let nombreDesayuno, tipoDesayuno, ramoFlores, total;

    tipoDesayuno = prompt('Ingrese la letra que corresponda a su desayuno A, B o C');
    ramoFlores = prompt('Quisiera agregar un ramo de flores por $5.000?\n ¿SI o NO?');
    
//Acá carga el monto a la calculadora según la opción elegida    

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

//calcula el monto de cada desayuno a
    total = calcularTotal(tipoDesayuno, ramoFlores);
    contadorDeProductos++;

    console.log({tipoDesayuno, nombreDesayuno, ramoFlores: ramoFlores, total});
    listadoDeProductos +='\n |Desayuno ' + contadorDeProductos + '\n Tipo de Desayuno: '+ nombreDesayuno + ' $' + tipoDesayuno + '\n Ramo de Flores: ' + ramoFlores +  '\n|Total $' + total + '\n'

//Calcula el total final de todos los productos seleccionados
    function calcularTotal(tipoDesayuno){
        let total = parseInt(tipoDesayuno) + parseInt(ramoFlores);
        totalGeneral += total;
    
        return total;
    
    }

}




//Muestra el listado de cada precio así como subtotales y total general
function mostrarInfo(){
    listadoDeProductos +='\n\n||El total a pagar de todos los productos es  de $' + totalGeneral + '||';
    alert(listadoDeProductos);
    console.log(listadoDeProductos);
}

solicitarDatosUsuario();
elegirDesayuno();