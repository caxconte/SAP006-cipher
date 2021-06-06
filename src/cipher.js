const cipher = {
  encode: function (offset, str) {
    let textEncrypt = "";
    // for pro "giro" pra obter valor unicode de cada i da string textEncrypt
    for (let i = 0; i < str.length; i++) {
      let encrypt = str.charCodeAt[i];
      // função if pra descobrir se o valor da string tá
      // entre 65 e 90 (A a Z) e aplicar a fórmula do Daniel
      if (encrypt >= 65 && crypt <= 90 ) {
      encrypt = ((str.charCodeAt[i] - 65 + offset) % 26) + 65
      } textEncrypt += String.fromCharCode(encrypt) 
    } return textEncrypt;
  }

  decode: function (offset, str){
    let textDecrypt = "";
    for (let i = 0; i < str.length; i++) {
      let decrypt = str.fromCharCode[i] - offset;
      if (decrypt >= 65 && decrypt <= 90) {
        // Ver como inverte a fórmula do Daniel
        decrypt = ((str.charCodeAt(i) - 65 + offset) % 26) + 65
      } textDecrypt += String.fromCharCode(decrypt)
    } return textDecrypt;
  }
}

// FORMULA DO DANIEL
// ((codASC - cod1aletra + offset) % 26) + cod1aletra