function genPassword() {
    var letter = 8,
        pass = "abcdefghijklmn!@#$%^&*(){}:<>?opqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        valume = "";
    for (var i = 0, n = pass.length; i < length;i++) {
        valume += pass.charAt(Math.floor(Math.random() * n));
    }
    return(volume);
}
$("#pass").click( function(){
  alert(genPassword());
});
