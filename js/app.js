$( document ).ready(function() {

    function changeSize(){
        var heightDocument = $(window).height();
        var newHeight = heightDocument + 'px';
        $('#slide01').css("height", newHeight);
        $('#slide02').css("height", newHeight);
    }
        
    changeSize();


    $(window).resize(function() {
        console.log("hola");
        changeSize();
    });


    function changeMenu(e) {
        $('.nav a').removeClass ("active");
        $(e).addClass("active");
    }


    $( ".button a" ).on( "click", function() {
        $( "#slide01" ).animate({
            bottom: "200%"
          }, 400, function() {
        });
        $( "#slide01" ).animate({
            opacity: "0"
          }, 300, function() {
        });
        $( "#slide01" ).animate({
            height: "0"
          }, 800, function() {
        });
    });

    $( ".nav a" ).on( "click", function() {
        changeMenu(this);
    });

/*
    $( "#show-01" ).on( "click", function() {
        $( "#slide02" ).animate({
            bottom: "0"
          }, 400, function() {
        });
        $( "#slide03" ).animate({
            bottom: "-100%"
          }, 400, function() {
        });
        $( "#slide04" ).animate({
            bottom: "-200%"
          }, 400, function() {
        });
        changeMenu(this);
    });


    $( "#show-02" ).on( "click", function() {
        $( "#slide02" ).animate({
            bottom: "200%"
          }, 400, function() {
        });
        $( "#slide03" ).animate({
            bottom: "0"
          }, 400, function() {
        });
        $( "#slide04" ).animate({
            bottom: "-100%"
          }, 400, function() {
        });
        changeMenu(this);

    });

    $( "#show-03" ).on( "click", function() {
        $( "#slide02" ).animate({
            bottom: "300%"
          }, 400, function() {
        });
        $( "#slide03" ).animate({
            bottom: "200%"
          }, 400, function() {
        });
        $( "#slide04" ).animate({
            bottom: "0"
          }, 400, function() {
        });
        changeMenu(this);
    });
*/

});