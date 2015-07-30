$('button.login').click(function(){
   $(".modal-backdrop").show();
   $(".loginBlock").show();
});
$('.loginClose').click(function(){
   $(".modal-backdrop").hide();
   $(".loginBlock").hide();
});