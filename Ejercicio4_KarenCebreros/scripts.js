// Diccionario de palabras
const dic_palabras = ["chamarra", "tigre", "estrella", "alfombra", "espejo", "ratón", "perro", 
                     "rímel", "puerta", "teclado", "vino", "cielo", "tierra", "mesa", "jabón", 
                     "agua", "gato", "silla", "sol", "bolsa", "bufanda", "nube", "billete",
                     "teléfono", "lámpara", "luna", "fuego", "hormiga", "lentes", "café"];

// Función para generar una contraseña
function generarContrasena() {
    // Se obtiene la longitud de la contraseña seleccionada por el usuario
    const num_palabras = document.getElementById('num_palabras').value;
    let contrasena = '';
    let palabras_seleccionadas = [];

    for (let i = 0; i < num_palabras; i++) {
        let palabra;

        // Se selecciona una palabra aleatoria del diccionario y evita que se repita
        do {
            palabra = dic_palabras[Math.floor(Math.random() * dic_palabras.length)];
        } while (palabras_seleccionadas.includes(palabra));
        palabras_seleccionadas.push(palabra);

        // Se formatea la palabra para que inicie con mayúscula
        contrasena += palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }

    // Se muestra la contraseña generada
    document.getElementById('resultado').textContent = 'La contraseña generada es: ' + contrasena;
}

// Evento del botón
document.getElementById('generar_boton').addEventListener('click', generarContrasena);
