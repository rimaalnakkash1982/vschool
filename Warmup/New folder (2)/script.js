function genPassword() {
    var letter = 8;
      var  pass = "abcdefghijklmn!@#$%^&*(){}:<>?opqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var valume = "";
    for (var i = 0, n = pass.length; i < length;i++) {
        valume += pass.charAt(Math.floor(Math.random() * n));
    }
    return(valume);
}
$("#pass").click(function(){
  alert(genPassword());
})
