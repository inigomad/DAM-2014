this.addEventListener('message', function(e) {
    var data = e.data.num;

    function Primos(data){
    var primo = data;
    var totalPrimos=0;
    var stringPrimos="";
    var number1 = 1; // Se piden ambos límites
    var number2 = data;
 
    for(var i=Math.min(number1,number2);i<=(Math.max(number1,number2));i++){
        primo=1;
 
        if(i===0 || i==1) // Comprueba si es 0 o 1 para evitar errores al generalizar con los otros números
        {
            stringPrimos=stringPrimos+i.toString();
            totalPrimos++;
        }else{  
 
 
        for(var j=2;j<i;j++){ // Se comprueba que el residuo sea diferente de 0 para decidir si es o no primo
            if(i%j===0 ){
                primo=0;
                break;
            }
        }
            if(primo==1)
            {
                stringPrimos=stringPrimos+', '+i.toString();
                totalPrimos++;
            }
        }
 
    }

    return stringPrimos;
}
    this.postMessage(Primos(data));
}, false);