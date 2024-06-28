function nextAndPrev(type, target) {
    // console.log(event.srcElement);
    //nos aseguramos que el siguiente paso se vea desde el principio:
    $('html, body, #s4-workspace').animate({ scrollTop: 0 }, 0);
    //oculto este paso
    
    $(event.srcElement).parents('.step').hide();
    $(event.srcElement).parents('.step').removeClass('animate__animated animate__fadeInRight animate__fadeInLeft');
    //consulto si el paso objetivo es anterior o siguiente:
    if (type == 'next') {
        console.log($('.' + target));
        $('.' + target).show().addClass('animate__animated animate__fadeInRight');
    } else if (type == 'prev') {
        $('.' + target).show().addClass('animate__animated animate__fadeInLeft');
    }




}