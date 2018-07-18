$(document).ready(function(){
    $("body").fadeIn(5000);
   console.log("Hello World!");
    
    $("nav").fadeTo(1000,1.0).dequeue().animate({
        top:"50px"},{
        duration: 1000,
        easing: "linear"});
    $(".jumbotron .container h1").delay(1000).fadeToggle("fast");
    $(".jumbotron .container p").delay(2000).toggle("fast");
    $(".jumbotron .container a").delay(3000).slideToggle("fast");
    
});

// Define Variables
var acaprofbutton = "<button id='acaprofbutton' type='button' class='btn btn-outline-light'>Learn More</button>";
var edubutton = "<button id='edubutton' type='button' class='btn btn-outline-light'>Learn More</button>";
var contactbutton = "<button id='contactbutton' type='button' class='btn btn-outline-light'>Contact Me</button>";

// Define Functions
function addacaprofbutton(){
    $("#acaprofnav").html(acaprofbutton);
    $("#acaprofnav").slideDown("slow");
}

function addedubutton(){
    $("#edunav").html(edubutton);
    $("#edunav").slideDown("slow");
}

function addcontactbutton(){
    $("#contactnav").html(contactbutton);
    $("#contactnav").slideDown("slow");
}

function removeacaprofbutton(){
    $("#acaprofnav").slideUp("slow");
    $("#acaprofnav").empty();
}

function removeedubutton(){
    $("#edunav").slideUp("slow");
    $("#edunav").empty();
}

function removecontactbutton(){
    $("#contactnav").slideUp("slow");
     $("#contactnav").empty();
}
// Define Event Handlers
$(document).ready(function(){
    console.log("jquery.js ready...");
    
    $("#acaprofcard").mouseenter(function(){
       addacaprofbutton();
    });
    
    $("#educard").mouseenter(function(){
       addedubutton();
    });
    
    $("#contactcard").mouseenter(function(){
       addcontactbutton();
    });
    
    $("#acaprofcard").mouseleave(function(){
       removeacaprofbutton();
    });
    
    $("#educard").mouseleave(function(){
       removeedubutton();
    });
    
    $("#contactcard").mouseleave(function(){
       removecontactbutton();
    });
});