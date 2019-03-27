function qPal(input) {
    var obrab = input.toLowerCase();
    var punct = ".,?/! ()";
    if (obrab.length < 2)
      {
       return true;
      } 
    else 
      {
       if (punct.indexOf(obrab[0])>0) 
         {
          return qPal(obrab.substr(1,obrab.length - 1));
         } 
        else if(punct.indexOf(obrab[obrab.length - 1])>0) 
              {
               return qPal(obrab.substr(0,obrab.length - 1));
               } 
              else if(obrab[0]==obrab[obrab.length - 1])
                     { 
                      return qPal(obrab.substr(1,obrab.length - 2));
                      } 
                    else 
                     {
                      return false;
                     }     
       }   
}
console.log("Лазер срезал!", qPal("Лазер срезал!"));
console.log("fffggg", qPal("fffggg"));
