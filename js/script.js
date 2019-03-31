$(document).ready(function(){
    $('#slides').superslides({
        animation:"fade",
        play:3000,
        pagination:false
    });

    var typed = new Typed('.typed', {
        strings: ['Certified Driving Instructor.', 'Specialized in  training new and nervous people.'],
        typeSpeed:60,
        loop:true,
        startDelay:1000, //wait one second to start
        showCursor:false
      });
});
