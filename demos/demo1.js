const output = document.getElementById('output');

let lastIndex = 0;
for (let index = 0; index < 3000000000; index++) {
    // operación tonta:
    const operacion1 = index / 0.33333;
    const operacion2 = index / 0.66666;
    lastIndex = index;
}
console.log('fin del bucle', lastIndex);
output.textContent = 'fin del bucle';
