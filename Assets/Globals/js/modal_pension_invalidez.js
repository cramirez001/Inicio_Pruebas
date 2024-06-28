$("document").ready(function () {


         
    $('.modal_tramite_pension .resultado .pasos_siguientes').click(function(){
        $(this).parents('.resultado').find('.vertical_stepline').show(200);
        $(this).hide();
        $(this).next('.ocultar_pasos_siguientes').show();

    });

    $('.modal_tramite_pension .resultado .ocultar_pasos_siguientes').click(function(){
        $(this).parents('.resultado').find('.vertical_stepline').hide(200);
        $(this).hide();
        $(this).prev('.pasos_siguientes').show();

    });


});