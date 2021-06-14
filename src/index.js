import cipher from './cipher.js';

let textToEncrypt = document.getElementById("textToEncrypt");
let textToDecrypt = document.getElementById("textToDecrypt");

// console.log(offset);
// console.log(str);

// Botões //

const encryptBtn = document.getElementById("encryptButton");
const translateBtn = document.getElementById("translateButton");

encryptBtn.onclick = function (event) {
    let str = textToEncrypt.value;
    let offsetStr = document.getElementById("offset").value;
    let offset = parseInt(offsetStr);

    if (offset > 0) {
        let decryptText = cipher.encode(offset, str);
        textToDecrypt.value = decryptText;
    // } else if (offset < 0) {
    //     let decryptText = cipher.decode((-offset), text);
    //     textToDecrypt.value = decryptText;
    }
}

translateBtn.onclick = function (event) {
    let str = textToDecrypt.value;
    let offsetStr = document.getElementById("offset").value;
    let offset = parseInt(offsetStr);

    if (offset > 0) {
        let decryptText = cipher.decode(offset,str);
        textToDecrypt.value = decryptText;
    // } else if (offset < 0) {
    //     let decryptText = cipher.decode((-offset), text);
    //     textToDecrypt.value = decryptText;
    }
}

// cipher.encode();
// cipher.decode();

console.log(cipher);