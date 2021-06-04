const cipher = {  
  encode: function (offset, str) {
    let textMessage = "";
    // for pro "giro" pra obter valor unicode de cada i da string textMessage
      for (let i = 0; i < str.length; i++) {
        let newMessage = str.charCodeAt(i) + offset;
        while (newMessage = str.charCodeAt(i) >= 65 && crypt <= 90 ) {
          newMessage = str.charCodeAt(i) - 65 + offset % 26  + 65
      } newMessage(String.fromCharCode(newMessage)) 
    } return newMessage;
  }

  decode: function (offset, str){ 
    let textDecrypt = "";
      
      for (let i = 0; i < str.length; i++) {
        let decrypt = str.fromCharCode(i) - offset;
        while (decrypt = 90) {
          decrypt = str.fromCharCode(textDecrypt)
      }
    } return textDecrypt;
  }
}