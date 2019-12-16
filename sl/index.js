$(document).ready(function(){
      alert("Warning! This website is cursed. Close your browser now to prevent cursed content from loading.");

      $.getJSON("./items.json", function(items) {
          var html = '';
          $.each(items, function(i, item){
              html += '<div class="grid-box">';
              html += '<a href="./item.html?id='+i+'"><img class="image" src="'+item.IMG+'"/></a>';
              html += '<div class="box-info">';
              html += '<div class="name">'+item.Name+'</div>';
              html += '<div class="description">'+item.Description+'</div>';
              html += '<div class="price">'+item.Price+'</div>';
              html += '<img class="rating" src="img/stars/'+item.Rating+'_stars.png">';
              html += '</div></div>';

          });

      $('#grid').html(html);
      });

});