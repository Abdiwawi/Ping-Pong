/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function() {
    $("#blanks form").submit(function(event) {
      event.preventDefault();
    var entry1input = $("input#entry1") .val();
    var list = $("div.output.ul");
    list.empty();
    for(var i = 1; i <= entry1input; i++){
      list.append(`<li>${pingPongtext(i)}</li>`);
    }
  });
});
function pingPongtext(number){
  (switch (true) {
    case (number % 15) === 0:
      return "PingPong!";
    case(number % 5) === 0:
      return"Pong!";
    case (number % 3) === 0:
      return"Ping!";
    default:
      return number;
    }
  }
})
