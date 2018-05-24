const output = document.getElementById('output');

// Comprobrar si hay soporte para Web Workers
// https://caniuse.com/#search=web%20workers
if ('Worker' in window) {

    // crear una instancia de Worker pasándole su URI
    const demo2Worker = new Worker('demo2-worker.js');

    demo2Worker.postMessage('Aitor'); // Enviar un mensaje al worker

    // recibir datos del worker
    demo2Worker.onmessage = function (e) {
        output.textContent = e.data;
    }

}
