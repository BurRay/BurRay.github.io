 $(window).bind('scroll', function () {
                if ($(window).scrollTop() >= $('#resume').offset().top + $('#resume').outerHeight() - window.innerHeight) {
                    $("#contact").addClass("show-footer");
                }                
                else {
                    // $("#contact").removeClass("show-footer");
                }
            });

function show_contact(){
    $("#cont").addClass("show-footer");
    $("#projects").ScrollTo();
}


$("#cont").click(alert("hey"));

///////////////////////
