
var number = function(num, numb) {
    if (num > numb) 
        console.log(numb);
   } else{
      console.log(num); 
    }
number(5,6);

var monkeyTrouble = function(smileB, smileA){
    if ((smileA == true && smileB == true)||(smileA == true && smileB == true))
       console.log ("smile");
    else if ((smileA == true && smileB == false)||(smileA == false && smileB == true))
      console.log("inTrouble");  
    }
monkeyTrouble(true, false);