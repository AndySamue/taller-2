document.getElementById("botonGuardar").addEventListener("click", () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let celular = document.getElementById("celular").value;
    let direccion = document.getElementById("direccion").value;
    let referencia = document.getElementById ("referencia").value;
    let cantidad = document.getElementById ("cantidad").value;
    let email = document.getElementById ("email").value;


    let tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow();

    let celdaNombre = fila.insertCell(0);
    let celdaApellido = fila.insertCell(1);
    let celdaDireccion = fila.insertCell(2);
    let celdaCelular = fila.insertCell(3);
    let celdaReferencia = fila.insertCell(4);
    let celdaCantidad = fila.insertCell(5);
    let celdaEmail = fila.insertCell(6);

    celdaNombre.innerText = nombre;
    celdaApellido.innerText = apellido;
    celdaDireccion.innerText = direccion;
    celdaCelular.innerText = celular;
    celdaReferencia.innerText = referencia;
    celdaCantidad.innerText = cantidad;
    celdaEmail.innerText = email;

});



