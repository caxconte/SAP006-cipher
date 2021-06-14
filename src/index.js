import cipher from './cipher.js';

let textToDecrypt = document.getElementById("textToDecrypt");

// Botões //

const encryptBtn = document.getElementById("encryptButton");

    function encryptButtonFunction () {
        const offsetStr = document.getElementById("offset");
        const offset = parseInt(offsetStr.value);
        const string = document.getElementById("textToEncrypt").value;
        textToDecrypt.value = cipher.encode(offset, string);
    }
    encryptBtn.addEventListener("click", encryptButtonFunction);

    

const translateBtn = document.getElementById("translateButton");

    function decryptButtonFunction () {
        const offsetStr = document.getElementById("offset");
        const offset = parseInt(offsetStr.value);
        const string = document.getElementById("textToEncrypt").value;
        textToDecrypt.value = cipher.decode(offset, string);
    }

    translateBtn.addEventListener("click", decryptButtonFunction);