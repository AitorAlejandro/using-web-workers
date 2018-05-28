const btnInit = document.getElementById('btnInit');
const btnFin = document.getElementById('btnFin');
const btnMensaje = document.getElementById('btnMensaje');
const output = document.getElementById('output');
const c1 = document.getElementById('c1');
const idForm = document.getElementById('idForm');

btnFin.style.display = 'none';

// https://caniuse.com/#search=web%20workers
if ('Worker' in window) {

    // crear una instancia de Worker pasándole su URI
    const demo3Worker = new Worker('demo3-worker.js');

    const oInicializar = {
        cmd: 'init'
    };
    const oSaludo = {
        cmd: 'saludo',
        mensaje: ''
    };


    // recibir datos del worker
    demo3Worker.onmessage = function (e) {
        c1.value = '';
        oSaludo.mensaje = '';
        output.textContent = e.data;
    }

    btnInit.addEventListener('click', (e) => {
        demo3Worker.postMessage(oInicializar);
        btnInit.style.display = 'none';
        btnFin.style.display = 'inline';
    }, false);
    btnMensaje.addEventListener('click', (e) => {
        if (c1.value) {
            oSaludo.mensaje = c1.value;
        }
        demo3Worker.postMessage(oSaludo); 
    }, false);
    btnFin.addEventListener('click', (e) => {
        demo3Worker.terminate();
        output.textContent = 'Web Worker finalizado';
        idForm.style.display = 'none';
    }, false);

}

