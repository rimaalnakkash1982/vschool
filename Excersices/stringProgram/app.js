 var ask = require('readline-sync'); 
var pName=ask.question(' give me your name please.'); 
var userOption=ask.question('Please, select an option before play:');   
function playGame(){
  	 		var computerOption = Math.random();
			if (computerOption =0){
				computerOption = "stone";
			}else if(computerOption =1){
				computerOption = "paper";
			}else{
				computerOption = "scissor";
			}
			resultMessage = compare(userOption, computerOption);
			
			
  	    }
function compare(userSelection, computerSelection)
		{
			if(userSelection == undefined)
			{
				return "Please, select an option before play"
			}	

		    if (userSelection ==computerSelection)
		    {
		       return "It is a dawl!";
		    }
		    
		    if (userSelection == "stone")
		    {
		        if (computerSelection == "scissor")
		        {
		             return "You win.";
		        } else {
		            return "The computer win. Try again.";
		        }
		        
		    } else if (userSelection == "paper") {
		        
		        if (computerSelection == "stone")
		        {
		             return "You win." ;
		        } else if("scissor") {
		            return "The computer win. Try again." ;
		        }
		        
		    } else if (userSelection == "scissor") {
		      
		        if (computerSelection == "stone")
		        {
		            return "The computer win. Try again.";
		        }else{
		            return "You win.";
		        }
		    }
		}  