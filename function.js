var state = 0;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function toggleNav() {
  if (state == 0) {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    state = 1;
  } else {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
    state = 0;
  }
}
