/*Sidenav script starts here*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
/*End of Sidenav script here*/
/*Start of a new function*/
$(document).ready(function() {
    $("#blanks form").submit(function(event) { /*referencing of the html form*/
      event.preventDefault();
    var entry1Input = $("input#entry1").val();
    var list = $("div.output ul");/*a dot almost messed my code up*/
    list.empty();
    for (var i = 1; i <= entry1Input; i++) {
     list.append(`<li>${pingPongtext(i)}</li>`);
   }
  });
});
function pingPongtext(number){ /*Declared a function */
    switch (true) {
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
