document.getElementById("botonGuardar").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let celular = document.getElementById("celular").value;
    let direccion = document.getElementById("direccion").value;
    let menuSelect = document.getElementById("menu");
    let menu = menuSelect.options[menuSelect.selectedIndex].text;

    let tabla = document.getElementById("tablaDatos").getElementsByTagName('tbody')[0];
    let fila = tabla.insertRow();

    let celdaNombre = fila.insertCell(0);
    let celdaApellido = fila.insertCell(1);
    let celdaCelular = fila.insertCell(2);
    let celdaDireccion = fila.insertCell(3);
    let celdaMenu = fila.insertCell(4);

    celdaNombre.innerText = nombre;
    celdaApellido.innerText = apellido;
    celdaCelular.innerText = celular;
    celdaDireccion.innerText = direccion;
    celdaMenu.innerText = menu;

});

