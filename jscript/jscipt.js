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


//object.addEventListener ("scroll", onScrollHandler);

window.onscroll = function () {
    //this.SwitchToAvatar();
}


window.onclick=function()  
{
    //this.SwitchToLogo();
    this.SwitchToAvatar();   
};


function SwitchToAvatar() {
    // this code is executed each time the user scrolls
    var scrollPosition = window.pageYOffset;
    var mylogo = document.getElementById("mylogo");
    var myavatar = document.getElementById("avatar");

    if (myavatar.style.display == "inline-block") {
        myavatar.style.display = "none";
        mylogo.style.display = "inline-block";
       // alert("avatar");
    } else {
        myavatar.style.display = "inline-block";
        mylogo.style.display = "none";
       // alert("logo");
    }



    // scrollPosition is 0 at the top of the page
    // it contains how many pixels have been scrolled down
   /* if (scrollPosition > 0) {
        myavatar.style.display = "inline-block";
        mylogo.style.display = "none";
    } else {
        myavatar.style.display = "none";
        mylogo.style.display = "inline-block";
    }*/
}


function SwitchToLogo()
{
    var myavatar = document.getElementById("avatar");
    myavatar.style.display = "none";
    mylogo.style.display ="inline-block";
}

