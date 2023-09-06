// const inpputNacimiento = document.querySelector('#birth');

// inpputNacimiento.addEventListener('blur', (evento) => {
//     validarNacimiento(evento.target);
// });

export function validar(inpputtt) {
    const tipoDeInput = inpputtt.dataset.tipo; //el dataset me trae todos los datos de data y en el pinto trar el nombre que le puse por lo tanto trae a date-tipo del html 
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](inpputtt);
    }
    //console.log(inpputtt.parentElement);//el parent element selecciona padre del que llamo para poder quitary agrgar las clases

    if (inpputtt.validity.valid) {
        inpputtt.parentElement.classList.remove("input-container--invalid");
        inpputtt.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        inpputtt.parentElement.classList.add("input-container--invalid");
        inpputtt.parentElement.querySelector(".input-message-error").innerHTML =
            mostrarMensajeDeError(tipoDeInput, inpputtt);
    }

};

const tipoDeError = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "This field cannot be empty"
    },
    correo: {
        valueMissing: "This field cannot be empty",
        typeMismatch: "The email is invalid"
    },
    asunto: {
        valueMissing: "This field cannot be empty",
        patternMismatch: "The subject line must contain between 10 and 50 characters."
    },
    mensaje: {
        valueMissing: "Enter a message",
    }
};


const validadores = {
    validando: (entrada) => validar(entrada),
};

function mostrarMensajeDeError(tipoDeInputsito, entradota) {
    let mensaje = "";
    tipoDeError.forEach((error) => {
        if (entradota.validity[error]) {
            console.log(tipoDeInputsito, error);
            console.log(entradota.validity[error]);
            console.log(mensajesDeError[tipoDeInputsito][error]);
            mensaje = mensajesDeError[tipoDeInputsito][error];
        }
    });
    return mensaje;

    
};



