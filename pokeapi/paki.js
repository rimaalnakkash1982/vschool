document.getElementById("button").addEventListener("click",function(){
  var number=parseInt(document.getElementById("hours").value);
 var xhr = new XMLHttpRequest();
console.log("My script has loaded");

xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
    document.getElementById("get").innerHTML=data["objects"][0]["pokemon"][number]["name"];
  }
};

xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();    
});
