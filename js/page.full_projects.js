$('.view1').click(function(){
  if ( $('.view1').hasClass('active') ) {

  } else {
    $(".view1").addClass("active");
    $(".viewType1").show();
    $(".view2").removeClass("active");
    $(".viewTypeBlock2").hide();
  }
});
$('.view2').click(function(){
  if ( $('.view2').hasClass('active') ) {

  } else {
    $(".view2").addClass("active");
    $(".viewTypeBlock2").show();
    $(".view1").removeClass("active");
    $(".viewType1").hide();
  }
});