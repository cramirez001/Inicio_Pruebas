
// tengo que crear una validacion mas, si tiene la clase cierre con flecha 

   



   
$('.cpl_accordion .accordion_item').click(function(){
   


  
var acordeon = $(this).parents('.cpl_accordion');







if(!acordeon.hasClass('open') ){


  // solo cerrar con flecha
   if(acordeon.hasClass('arrow_controler')){
      if(!$(this).hasClass('active') && !$(this).hasClass('close_arrow')){
         if(!acordeon.hasClass('multiple_open') ){

            $('.accordion_item').removeClass('active');
            $('.accordion_item').removeClass('close_arrow');
            $('.accordion_item .accordion_content').removeClass('animate__animated animate__fadeInDown');
         
         }
         $(this).children('.accordion_content').addClass('animate__animated animate__fadeInDown');
         $(this).addClass('active ');
         $(this).addClass('close_arrow');
         $('html, body').animate({
           scrollTop: $(this).offset().top
       }, 200); 
      }
      else if($(this).hasClass('close_arrow') && !$(this).hasClass('active')){
         $(this).removeClass('close_arrow');
      }
   }
 // cerrar con el contenedor
   else{

   if($(this).hasClass('active')){
     
      $(this).children('.accordion_content').removeClass('animate__animated animate__fadeInDown');
      $(this).removeClass('active');
         
   }else{

      if(!acordeon.hasClass('multiple_open') ){

         $('.accordion_item').removeClass('active');
         $('.accordion_item .accordion_content').removeClass('animate__animated animate__fadeInDown');
      
      }
      
       $(this).children('.accordion_content').addClass('animate__animated animate__fadeInDown');
       $(this).addClass('active');
       $('html, body').animate({
         scrollTop: $(this).offset().top
     }, 200);

       
   }


}

};



   

});




// cerrar con flecha 
$('.accordion_arrow_icon').click(function(){


  var parent = $(this).parents('.accordion_item');
  var child = parent.find('.accordion_content');

  if(parent.hasClass('close_arrow')){

  console.log(child);
  console.log(parent);
  parent.removeClass('active');
  child.removeClass('animate__animated animate__fadeInDown');
}

});


