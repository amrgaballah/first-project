$(document).ready(function() {
    $(".skitter-large").skitter({interval:1000 , auto_play:false});
    $(".owl-carousel").owlCarousel({center: true,items:4,loop:true,margin:-30, responsive:{600:{items:4}}});
  });


  var  maknHome = $("#About").offset().top ;
  var navHight = $("nav").outerHeight(true);
  $(window).scroll(function(){
  
      if ($(window).scrollTop() > (maknHome - navHight) ) {
          $("nav").addClass("backg");
          $("#option").fadeIn(1000);
          $(".footer-btn").fadeIn(1000);
      } else {
          $("nav").removeClass("backg");
          $("#option").fadeOut(1000);
          $(".footer-btn").fadeOut(1000);
      }
  });
  
  $(".nav-link").click(function(){
    var x =$(this).attr("href");
    var mkanElSection = $(x).offset().top;
    $("html , body ").animate({scrollTop:mkanElSection},1000)
})

$(document).ready(function(){
    $("#loadingPage").fadeOut(3000 , function(){
        $("body").css("overflow","auto")
    })
});

$(".footer-btn").click(function(){
    ("html , body ").animate({scrollTop:0},1000)
})


let colorItem = $(".list-group-item");
colorItem.eq(0).css("backgroundColor","white");
colorItem.eq(1).css("backgroundColor","black");

colorItem.click(function(){

    let color = $(this).css("backgroundColor"); 
    $(".change").css("color", color);
    // $(document.body).css("backgroundColor", color);
});


