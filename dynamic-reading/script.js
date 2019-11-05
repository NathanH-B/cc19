$(document).ready(function(){

    var width = $(window).innerWidth();
    var height = $(window).innerHeight();
    
    $deploy = function(){
      for (var count = 0; count < 30; count++) {
        var x = Math.random() * width;
        var y = Math.random() * height;
        $("<div class=\"runner\"></div>").appendTo("body").css({
            left: x,
            top: y
        });
     }
    }
  
$(window).scroll(function() {
    var width = $(window).innerWidth();
    $(".runner").animate({
      'left': width
    },$deploy());
  });
});