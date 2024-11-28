const http = require('http');
const os = require('os');
const fs = require('fs');
const process = require('process');

const port = 3000;

// Lee la configuración de intervalo desde config.json
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
const interval = config.interval * 1000;

// Información del sistema y de la versión de node.js
console.log(`Node.js version: ${process.version}`);
console.log(`Sistema operativo: ${os.type()} ${os.platform()} ${os.release()}`);

// Crea el servidor
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Servidor en Node.js ejecutándose\n');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});


// Función para mostrar el uso de CPU, memoria, tiempo del sistema activo, tiempo de node.js
function mostrarInformacionSistema() {
    const cpuUsage = process.cpuUsage();
    const memoriaUso = process.memoryUsage();
    const tiempoActivo = os.uptime();
    const tiempoNode = process.uptime();

    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
    console.log(`Uso de CPU: ${cpuUsage.user + cpuUsage.system} microsegundos`);
    console.log(`Uso de memoria: ${(memoriaUso.rss / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Tiempo activo del sistema: ${Math.floor(tiempoActivo)} segundos`);
    console.log(`Tiempo que lleva ejecutándose Node.js: ${Math.floor(tiempoNode)} segundos`);
}

// Se ejecuta la función en el intervalo definido
setInterval(mostrarInformacionSistema, interval);
