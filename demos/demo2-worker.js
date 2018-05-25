function funcionPesada (e) {
    let lastIndex = 0;
    for (let index = 0; index < 3000000000; index++) {
        // operación tonta:
        const operacion1 = index / 0.33333;
        const operacion2 = index / 0.66666;
        lastIndex = index;
    }
    postMessage(`${e.data}: fin del bucle`);
}

// Definimos el callback a lanzar cuando la página principal nos llame con postMessage()
this.addEventListener('message', funcionPesada, false);
