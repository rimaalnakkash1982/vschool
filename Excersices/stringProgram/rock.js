 var ask = require('readline-sync'); 
var pName=ask.question(' give me your name please.'); 
var userOption=ask.question('Please, select an option before play:');
var computerSelection=["rock","paper","scissor"];
var pcCount=0;
var player=0;
while (pcCount<3 && player<3){
function getRandom(min,max){
  return  Math.floor(Math.random()*(max-min+1))+min;
}
var computerSelected = computerSelection[getRandom(0,2)];
compare(userOption, computerSelected);
function compare(userOption, computerSelected)
		{
            
			
            if(!userOption)
			{
				console.log( "Please, select an option before play");
			}	

		    if (userOption === computerSelected)
		    {
               console.log("computer has select: " + computerSelected);
		       console.log( "It is a dawl!");
                pcCount++;
                player++
                
		    }
		  
		    else if (userOption == "rock")
		    {
		        if (computerSelected == "scissor")
		        {
                    console.log("computer has select: " + computerSelected);
		             console.log( "You win.");
                    player++;
		        } else {
                    console.log("computer has select: " + computerSelected);
		            console.log( "The computer win. Try again.");
                    pcCount++;
		        }
		        
		    } else if (userOption == "paper") {
		        
		        if (computerSelected == "rock")
		        {
                    console.log("computer has select: " + computerSelected);
		             console.log( "You win.") ;
                    player++;
		        } else if("scissor") {
                    console.log("computer has select: " + computerSelected);
		            console.log( "The computer win. Try again.") ;
                    pcCount++;
		        }
		        
		    } else if (userOption == "scissor") {
		      
		        if (computerSelected == "rock")
		        {
                    console.log("computer has select: " + computerSelected);
		            console.log( "The computer win. Try again.");
                    pcCount++;
		        }else{
                    console.log("computer has select: " + computerSelected);
		            console.log( "You win.");
                    player++;
		        }
		    }
		}
    }
if (pcCount==3){
    console.log("pc win");
}else if (player==3){
    console.log("congartulation you Win")
}