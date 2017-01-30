var name=["rima","sourett","moustafa","miro","ola","mimi"];
var attempTcall=function(name,call,dontCall,sendText){
    var count=0,
    for(var i=0; i< name.lenght;i++){
    if( name[i].toLowerCase==="a"){
        count++
        if(count>1){
             sendText(name);
        }
    }
        
        if (name[i].lenght%2===0){
            call();
        }else if (name[i].lenght% 2!==0){
        dontCall(name);
        }else{
        sendText(name);
        } 
} 
}
function dontCall(name){
    console.log("you didnt call"+name);
}
    function call(name){
    console.log("you did call"+name);
}
       function sendText(name){
    console.log("you send text"+name);
}
 attempTcall(name,call,dontCall,sendText);       