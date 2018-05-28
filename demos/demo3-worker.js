this.inicializado = false;

function fnProxi (e) {
    switch (e.data.cmd) {
        case 'init':
            postMessage('sistema inicializado');
            this.inicializado = true;
            break;
        case 'saludo':
            if (this.inicializado) {
                if (typeof e.data.mensaje === 'string' && e.data.mensaje.length) {
                    postMessage(e.data.mensaje);
                } else {
                    postMessage('No hay mensaje que mostrar. Escribe uno por favor.');
                }
            } else {
                postMessage('Me temo que no puedo hacer eso');
            }
            break;
    }
}

// Definimos el callback a lanzar cuando la página principal nos llame con postMessage()
this.addEventListener('message', fnProxi, false);
