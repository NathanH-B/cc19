$(document).ready(function(){
  $(".chickegg").hide();
  $(".chick").hide();
  $(".hen").hide();
  $(".moreeggs").hide();
  $(".eggdupe").hide();
  $(".udders").hide();
  $(".milk").hide();
  
  
  $("#corn").on("mouseover",function(){
     $("#corn").animate({"top":"-=230px"},"slow"); 
  });
  
  $("#banner").on("mouseover",function(){
     $('#banner').text("Our Farm");
     $('#banner').css({ 'color': 'red'});
  });
  $("#banner").on("mouseout",function(){
     $('#banner').text("My Farm");
     $('#banner').css({ 'color': 'black' });
  });
  
  
  $(".egg").click(function(){
    $(".egg").hide();
    $(".chickegg").show();
  });
  
  $(".chickegg").click(function(){
    $(".chickegg").hide();
    $(".chick").show();
  });
  
  $(".chick").click(function(){
    $(".chick").hide();
    $(".hen").show();
    $(".moreeggs").show();
  });
  
  $(".moreeggs").click(function(){
    $(".eggdupe").clone().appendTo(".chicken");
    $(".eggdupe").show();
  });
  
  $(".hen").click(function(){
    $(".hen").hide();
    $(".eggdupe").hide();
    $(".egg").show();
    $(".moreeggs").hide();
  });
  
  $(".seed").click(function(){
    $(".seed").hide();
    $(".udders").show();
  });
  
  $(".udders").click(function(){
    $(".udders").hide();
    $(".milk").show();
  });
  
    $(".milk").click(function(){
    $(".milk").hide();
    $(".seed").show();
  });
  
  
  
  
  
});