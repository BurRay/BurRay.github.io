function SwitchImage() {
    // this code is executed each time the user scrolls
    var scrollPosition = window.pageYOffset;
    var mylogo = document.getElementById("mylogo");
    var myavatar = document.getElementById("avatar");


    // scrollPosition is 0 at the top of the page
    // it contains how many pixels have been scrolled down
    if (scrollPosition > 1) {
        myavatar.style.display = "none";
        mylogo.style.display ="inline-block";
    } 
    else {
        myavatar.style.display = "inline-block";
        mylogo.style.display ="none";
    }

    //mylogo = "../media/images/bluelogo.png";
    // mylogo = "///C:/Users/rayto/Programming%20Projects/MyWebsite/media/images/sopm";
    //alert(mylogo);
}

// Get the navbar
var navibar = document.getElementById("navibar");

// Get the offset position of the navbar
var stickynavbar = navibar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function Sticknavbar() 
{
  if (window.pageYOffset > 70) 
  { navibar.classList.add("stickynavbar");} 
  else
   { navibar.classList.remove("stickynavbar");}
}

window.onscroll = function () {
    this.SwitchImage();
    //this.Sticknavbar();
}

//object.addEventListener ("scroll", onScrollHandler);
////////////////////


