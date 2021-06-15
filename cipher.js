const cipher = {

  encode: function(offset, string) {
    let encryptMessage = "";

    if(offset == "" || offset == null || string == "" || string == null) {
      throw TypeError("We need some information", cipher.js, 3);
    }

    for (let i = 0; i < string.length; i++) {
      let codeASC = string.charCodeAt(i);
    
      if(codeASC >= 65 && codeASC <= 90) {
        let crypt = ((codeASC - 65 + offset) % 26 + 65);
        encryptMessage += String.fromCharCode(crypt);
      } else if (codeASC >= 97 && codeASC <= 122) {
        let crypt = ((codeASC - 97 + offset) % 26 + 97)
        encryptMessage += String.fromCharCode(crypt);
      }
    } return encryptMessage;
  },

  decode: function(offset, string) {
    let decryptMessage = "";

    if(offset == "" || offset == null || string == "" || string == null) {
      throw TypeError("We need some information", cipher.js, 30);
    }

    for (let i = 0; i < string.length; i++) {
      let codeASC = string.charCodeAt(i);
    
      if(codeASC >= 65 && codeASC <= 90) {
        let decrypt = ((codeASC - 90 - offset) % 26 + 90);
        decryptMessage += String.fromCharCode(decrypt);
      } else if (codeASC >= 97 && codeASC <= 122) {
        let decrypt = ((codeASC - 122 - offset) % 26 + 122);
        decryptMessage += String.fromCharCode(decrypt);
        }
    } return decryptMessage;
  }
}
export default cipher;