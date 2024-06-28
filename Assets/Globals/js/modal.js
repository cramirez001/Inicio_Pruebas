 //modales//

 function BuenosModales(modalClass){

      $('#s4-workspace').css({overflowY: 'hidden', width: '100%'});
        $('html').css({overflow: 'hidden', width: '100%'});
      // document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
 
     
 $('.'+modalClass).find('.modal_box').addClass('active');
 $('.'+modalClass).find('.modal_box').addClass('animated');
 $('.'+modalClass).find('.top').addClass('animated');
if($('.'+modalClass).hasClass('right_modal')){
  $('.'+modalClass).show();
  $('.'+modalClass).find('.modal_box').addClass('fadeInRight');
  $('.'+modalClass).find('.top').addClass('fadeInRight');
}
if($('.'+modalClass).hasClass('center_modal')){
  $('.'+modalClass).addClass('center_cont');
  // $('.'+modalClass).addClass('cpl_center-content');
  $('.'+modalClass).find('.modal_box').addClass('animated zoomIn');
}
 $('.'+modalClass).find('.close_action').click(function(){
    cerrarModal(modalClass);
 });

//  $('.'+modalClass).click(function() {
//     cerrarModal(modalClass);
// });
// $('.'+modalClass+' .modal_box').click(function (e) {
//     e.stopPropagation();
// });

 function cerrarModal(modalClass){



    $('.'+modalClass).removeClass('center_cont');
    $('.'+modalClass).fadeOut(0);
  
    $('.'+modalClass).find('.modal_box').delay(1000).removeClass('animated fadeInUp fadeInRight fadeInDown fadeOutRight ');
    $('.'+modalClass).find('.top').delay(1000).removeClass('animated fadeInUp fadeInRight fadeInDown fadeOutRight ');
    if($('.'+modalClass).hasClass('center_modal')){
      // $('.'+modalClass).removeClass('cpl_center-content');
   
    }
    $('html').css('overflow', 'auto');
    $('#s4-workspace').css({overflowY: 'scroll', width: '100%', position: 'relative'});
      $('html').css({overflow: 'auto'});
    
 }


}




  //modales//