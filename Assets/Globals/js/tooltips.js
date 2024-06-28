function tooltipBox(e){

   
   var box = $(e).children('.box');
   if(!$(e).hasClass('active')){

      $(e).addClass('active'); 
   $(box).show(500);
   // $(box).addClass('animated slideInDown');
   
}
else{
   
   $(box).hide(200);
   // $(box).removeClass('animated slideInDown');
   $(e).removeClass('active');
}

$(document).on("click",function(a) {
                    
   var container = $(e);
                      
      if (!container.is(a.target) && container.has(a.target).length === 0) { 
         $(box).hide(200);
         // $(box).removeClass('animated slideInDown');
         $(e).removeClass('active');              
      }
});
   

   


       

}
