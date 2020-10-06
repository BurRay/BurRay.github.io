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
    this.StyleHeader();
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


function AnimateLogo(){
    var logo = document.getElementById("logo");
    var description = document.getElementById("description");
  
    logo.style.visibility = "visible";     
}

window.onload = function(){
  
}


//Lord, forgive me for this abomination. I'll fix it after finishing the JS course
function StyleHeader(){
    var headertop = document.getElementById("header").offsetTop - 70;
    var resume = document.getElementById("resume").offsetTop - 70;
    var projects = document.getElementById("projects").offsetTop - 70;;
    var contact = document.getElementById("contact");

    var qq = contact.offsetTop - (  projects - 300 );
    
    if (window.pageYOffset >= headertop) {
        document.getElementById("a").classList.add("current-section");
        document.getElementById("r").classList.remove("current-section");
        document.getElementById("r").classList.remove("current-section");
        document.getElementById("c").classList.remove("current-section");
    }

    if (window.pageYOffset >= resume) {    
       document.getElementById("r").classList.add("current-section"); 
       document.getElementById("a").classList.remove("current-section"); 
       document.getElementById("p").classList.remove("current-section");
       document.getElementById("c").classList.remove("current-section");
    }     
    if(window.pageYOffset >= projects){
        document.getElementById("p").classList.add("current-section");
        document.getElementById("a").classList.remove("current-section");  
        document.getElementById("r").classList.remove("current-section");
        document.getElementById("c").classList.remove("current-section");
    }
    if(window.pageYOffset >= contact.offsetTop - (  projects - 300 )){       
        document.getElementById("c").classList.add("current-section");
        document.getElementById("a").classList.remove("current-section");  
        document.getElementById("r").classList.remove("current-section");
        document.getElementById("p").classList.remove("current-section");
        // alert(window.pageYOffset  + " " + projects +  " " + contact.offsetTop + " " + qq  ) ;
    }   
}








//setTimeout(AnimateLogo, 2000);