
    // scroll reveal containers
    ScrollReveal().reveal('.letra', { easing: 'ease-in' });
    ScrollReveal().reveal('#info1', { easing: 'ease-in' });
    ScrollReveal().reveal('#info2', { easing: 'ease-in' });
    ScrollReveal().reveal('.products-container', { easing: 'ease-in' });
    ScrollReveal().reveal('#end-container', { easing: 'ease-in' });
    
 
    // button animation
    $("#changeTo2").click(function () {
        $("#product1").fadeOut(1000)
        $("#product2").fadeIn(1000)
        
    });

    $("#changeTo1").click(function () {
        $("#product1").fadeIn(1000)
        $("#product2").fadeOut(1000)
        
    });

    // back to top button
    $('document').ready(function($){
        let top =$('.back-to-top');
        top.click(function(e){
            e.preventDefault();
            $('html,body').animate({scrollTop:0},500);

        });
    })
       