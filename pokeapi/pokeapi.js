var request = require("request");

request('http://api.vschool.io:6543/pokemon.json', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data= JSON.parse(body);
      console.log(data["name"]);
      console.log(data["attack"]);
      console.log(data["national_id"]);
      
  }else{
      console.log(error);
      console.log(response.statusCode);
  }
})