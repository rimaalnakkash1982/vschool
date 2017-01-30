$("#button").click(function() {
  $.ajax({
    url: "http://api.vschool.io:6543/pokemon.json",
    success: function(result) {
        console.log("enter");
        console.log(result);
      $("#get").html(result["objects"][0]["pokemon"][$("#hours").val()]["name"]);
    }
  });
});