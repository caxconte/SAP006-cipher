const cipher = {
  encode: function(offset, string){
    let textEncrypt = "";
// Criar função com a fórmula do Daniel
    function cifra(first, loop, encrypt){
      let newEncrypt  = ((encrypt - first + offset) % loop) + first;
      let newChar = String.fromCharCode(newEncrypt);
      textEncrypt = textEncrypt.concat(newChar);
    }
    // FOR pro "giro" pra obter valor unicode de cada i da string textEncrypt
    for (let i = 0; i < string.length; i++) {
      let encrypt = string.charCodeAt(i);
      // função if pra descobrir se o valor da string tá
      // entre 65 e 90 (A a Z) e aplicar a fórmula do Daniel
      if (encrypt >= 65 && encrypt <= 90) {
        encrypt = ((encrypt - 65 + offset) % 26) + 65;
      } textEncrypt += String.fromCharCode(encrypt);
    } return textEncrypt;
  },

  decode: function(offset, string){
    let textDecrypt = "";
    // Criar função com a fórmula do Daniel INVERSA
    function decifra(first, loop, decrypt){
      let newDecrypt  = ((decrypt + first - offset) % loop) + first;
      let newChar = String.fromCharCode(newDecrypt);
      textDecrypt = textDecrypt.concat(newChar);
    }
    for (let i = 0; i < string.length; i++) {
      let decrypt = string.charCodeAt(i);
      if (decrypt >= 65 && decrypt <= 90) {
        decrypt = ((decrypt + first - offset) % loop) + first;
      } textDecrypt += String.fromCharCode(decrypt);
    } return textDecrypt;
  }
}
  export default cipher;