// Inputs
const inputNombre = document.getElementById('nombre');
const inputApellido = document.getElementById('apellido');
const inputDireccion = document.getElementById('direccion');
const inputCelular = document.getElementById('celular');
const inputReferencia = document.getElementById('referencia');
const inputCantidad = document.getElementById('cantidad');
const inputEmail = document.getElementById('email');
const btnEnviar = document.getElementById('botonGuardar');

// Elementos para mostrar errores
const errorNombre = document.getElementById('errorNombre');
const errorApellido = document.getElementById('errorApellido');
const errorDireccion = document.getElementById('errorDireccion');
const errorCelular = document.getElementById('errorCelular');
const errorReferencia = document.getElementById('errorReferencia');
const errorCantidad = document.getElementById('errorCantidad');
const errorEmail = document.getElementById('errorEmail');

// Validar Nombre
const validarNombre = () => {
    const regex = /^[A-Za-z ]{2,}$/;
    if (inputNombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio';
        inputNombre.classList.add('noValido');
        inputNombre.classList.remove('valido');
        return false;
    } else if (!regex.test(inputNombre.value)) {
        errorNombre.textContent = 'Solo letras y espacios, mínimo 2 caracteres';
        inputNombre.classList.add('noValido');
        inputNombre.classList.remove('valido');
        return false;
    } else {
        errorNombre.textContent = '';
        inputNombre.classList.remove('noValido');
        inputNombre.classList.add('valido');
        return true;
    }
};

// Validar Apellido
const validarApellido = () => {
    const regex = /^[A-Za-z ]{2,}$/;
    if (inputApellido.value.trim() === '') {
        errorApellido.textContent = 'El apellido es obligatorio';
        inputApellido.classList.add('noValido');
        inputApellido.classList.remove('valido');
        return false;
    } else if (!regex.test(inputApellido.value)) {
        errorApellido.textContent = 'Solo letras y espacios, mínimo 2 caracteres';
        inputApellido.classList.add('noValido');
        inputApellido.classList.remove('valido');
        return false;
    } else {
        errorApellido.textContent = '';
        inputApellido.classList.remove('noValido');
        inputApellido.classList.add('valido');
        return true;
    }
};

// Validar Dirección
const validarDireccion = () => {
    if (inputDireccion.value.trim() === '') {
        errorDireccion.textContent = 'La dirección es obligatoria';
        inputDireccion.classList.add('noValido');
        inputDireccion.classList.remove('valido');
        return false;
    } else {
        errorDireccion.textContent = '';
        inputDireccion.classList.remove('noValido');
        inputDireccion.classList.add('valido');
        return true;
    }
};

// Validar Celular
const validarCelular = () => {
    const regex = /^[0-9]{9,10}$/;
    if (inputCelular.value.trim() === '') {
        errorCelular.textContent = 'El celular es obligatorio';
        inputCelular.classList.add('noValido');
        inputCelular.classList.remove('valido');
        return false;
    } else if (!regex.test(inputCelular.value)) {
        errorCelular.textContent = 'Debe tener 9 o 10 dígitos numéricos';
        inputCelular.classList.add('noValido');
        inputCelular.classList.remove('valido');
        return false;
    } else {
        errorCelular.textContent = '';
        inputCelular.classList.remove('noValido');
        inputCelular.classList.add('valido');
        return true;
    }
};

// Validar Referencia (opcional, pero aquí validamos que no esté vacía)
const validarReferencia = () => {
    if (inputReferencia.value.trim() === '') {
        errorReferencia.textContent = 'La referencia es obligatoria';
        inputReferencia.classList.add('noValido');
        inputReferencia.classList.remove('valido');
        return false;
    } else {
        errorReferencia.textContent = '';
        inputReferencia.classList.remove('noValido');
        inputReferencia.classList.add('valido');
        return true;
    }
};

// Validar Cantidad
const validarCantidad = () => {
    const cantidad = parseInt(inputCantidad.value);
    if (inputCantidad.value.trim() === '') {
        errorCantidad.textContent = 'La cantidad es obligatoria';
        inputCantidad.classList.add('noValido');
        inputCantidad.classList.remove('valido');
        return false;
    } else if (isNaN(cantidad) || cantidad <= 0) {
        errorCantidad.textContent = 'Debe ser un número mayor que 0';
        inputCantidad.classList.add('noValido');
        inputCantidad.classList.remove('valido');
        return false;
    } else {
        errorCantidad.textContent = '';
        inputCantidad.classList.remove('noValido');
        inputCantidad.classList.add('valido');
        return true;
    }
};

// Validar Email
const validarEmail = () => {
    const regex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if (inputEmail.value.trim() === '') {
        errorEmail.textContent = 'El email es obligatorio';
        inputEmail.classList.add('noValido');
        inputEmail.classList.remove('valido');
        return false;
    } else if (!regex.test(inputEmail.value)) {
        errorEmail.textContent = 'Ingrese un correo válido';
        inputEmail.classList.add('noValido');
        inputEmail.classList.remove('valido');
        return false;
    } else {
        errorEmail.textContent = '';
        inputEmail.classList.remove('noValido');
        inputEmail.classList.add('valido');
        return true;
    }
};

// Validar todo el formulario y activar botón
const validarFormulario = () => {
    if (
        validarNombre() &&
        validarApellido() &&
        validarDireccion() &&
        validarCelular() &&
        validarReferencia() &&
        validarCantidad() &&
        validarEmail()
    ) {
        btnEnviar.disabled = false;
        return true;
    } else {
        btnEnviar.disabled = true;
        return false;
    }
};

// Listeners en tiempo real
inputNombre.addEventListener('input', () => {
    validarNombre();
    validarFormulario();
});
inputApellido.addEventListener('input', () => {
    validarApellido();
    validarFormulario();
});
inputDireccion.addEventListener('input', () => {
    validarDireccion();
    validarFormulario();
});
inputCelular.addEventListener('input', () => {
    validarCelular();
    validarFormulario();
});
inputReferencia.addEventListener('input', () => {
    validarReferencia();
    validarFormulario();
});
inputCantidad.addEventListener('input', () => {
    validarCantidad();
    validarFormulario();
});
inputEmail.addEventListener('input', () => {
    validarEmail();
    validarFormulario();
});