$(document).ready(function(){

var vars = [], hash;
    var q = document.URL.split('?')[1];
    if(q !== undefined){
        q = q.split('&');
        for(var i = 0; i < q.length; i++){
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
}
  
  
var id = vars['id'];
var html = '';
  $.getJSON("./items.json", function(items) {
    html += '<div class="content-left"><img class="image-big" src="'+items[id].IMG+'"></div>';
    html += '<div class="content-right">';
    html += '<div class="content-name">'+items[id].Name+'</div>';
    html += '<div class="content-description">'+items[id].longDescription+'</div>';        
    html += '<div class="content-rating"><img class="rating" src="img/stars/'+items[id].Rating+'_stars.png"></div>';
    html += '<div class="instructions">'+items[id].Instructions+'</div>';
    html += '</div>';         
    $('#content').html(html);
   }); 

});