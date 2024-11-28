const http = require("http");
const url = require("url");

const PORT = 3000;

const dic_palabras = ["chamarra", "tigre", "estrella", "alfombra", "espejo", "ratón", "perro", 
                      "rímel", "puerta", "teclado", "vino", "cielo", "tierra", "mesa", "jabón", 
                      "agua", "gato", "silla", "sol", "bolsa", "bufanda", "nube", "billete",
                      "teléfono", "lámpara", "luna", "fuego", "hormiga", "lentes", "café"];

                      
// Función para generar una contraseña con palabras aleatorias del diccionario creado
function generatePassword(wordCount) {
  const password_words = [];

  for (let i = 0; i < wordCount; i++) {
    const random_index = Math.floor(Math.random() * dic_palabras.length);

    password_words.push(dic_palabras[random_index]);
  }

  return password_words.join("");
}

// Se crea el servidor
const server = http.createServer((req, res) => {
  const query_object = url.parse(req.url, true).query;

  // Se obtiene el número de palabras del query (por default 4 palabras) --> http://localhost:3000/?w=4
  const word_count = parseInt(query_object.w) || 4;

  const password = generatePassword(word_count);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Generated Password: ${password}`);
});


// Se corre el servidor
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
