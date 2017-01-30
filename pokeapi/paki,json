var xhr = new XMLHttpRequest();
console.log("My script has loaded");

xhr.onreadystatechange = function() {
  if(xhr.readyState  == 4 && xhr.status == 200) {
    var strData = xhr.responseText;
    var data = JSON.parse(strData);
    console.log(data["name"]);
    console.log(data["gender"]);
  } else if(xhr.readyState  == 4 && xhr.status != 200) {
    console.log(xhr.status);
  }
};

xhr.open("GET", "http://swapi.co/api/people/1/", true);
xhr.send();