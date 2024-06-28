



var defaultOption = $('.custom_select_wrap .custom_select ul li.default').html();
// $(document).on("click",function(e) {
                    
//     var container = $(".custom_select_wrap .custom_select ul");
                       
//        if (!container.is(e.target) && container.has(e.target).length === 0) { 
//          container.hide();              
//        }
// });


    $('.custom_select_wrap .custom_select .selected').html(defaultOption);


  

    $('.custom_select_wrap .custom_select .selected').click(function(){

    $(this).next('ul').show(200);

    });

$('.custom_select_wrap .custom_select ul li').click(function(){

 var selectOption = $(this).html();

 $(this).parents('.custom_select').children('.selected').html(selectOption);

  var clase =  $(this).attr("class");

   var selectInput =  $(this).parents('.custom_select_wrap').find('.inputSelect');

   selectInput.val(clase);



   $(this).parents('.custom_select').children('ul').hide(200);


 




});

