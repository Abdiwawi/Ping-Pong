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
    var entryInput = $("input#entry1") .val();
    var list = $("div.output.ul");
