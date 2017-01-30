
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor(){
    var color=getRandomColor();
    $("#text").css("color",color);
}
$("#color-button").on("click",changeColor);