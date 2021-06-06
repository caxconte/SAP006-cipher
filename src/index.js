import cipher from './cipher.js';

const offset = document.getElementById("offset_input").value;
const str = document.getElementById("texto_input");

// Botões //

const encryptButton = document.getElementById("criptografar");
    criptografar.addEventListener("click")
    document.getElementById("retornodafuncao").innerHTML = cipher.encode(offset, str);

// cipher.encode();
// cipher.decode();

console.log(cipher);