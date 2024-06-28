//CREO LOS CONTENEDORES PARA LOS ERRORES 

$(document).ready(function () {

// #error_periodo_consulta
$('#VCFiltro .tablaDescargas > tbody > tr:nth-child(2n) > td:nth-child(2n) > table > tbody > tr > td:first-child').append('<span id="error_periodo_consulta" class="f_error" style="display:none">Selecciona un periodo</span>');

});
// var radioConsulta = $('#rbtnTipoConsulta');
// var radioPeriodo =  $('#rbtnPeriodo');

$('input[name="tipo_consulta_rdo_msk"]').on('change', function () {
    if ($(this).val() == 'rdo_tipo_consulta_periodo') {

        $('#rbtnTipoConsulta').click();

    }
    else if ($(this).val() == 'rdo_tipo_consulta_rango') {

        $('#rbtnPeriodo').click();


    }

    var validation = desbloquearBotones ();
    if(validation[0].val2 == true){
        $('#error_tipo_consulta').hide(100);
    }else{
        $('#error_tipo_consulta').show(100);
    }

});


function desbloquearBotones () {
    
    // var denied = true;

    //creo la lista con validaciones para desbloquear el boton

    //1- Tiene que tener un fondo seleccionado
    //2- Tiene que tener un tipo de solicitud seleccionado
    //3- Tiene que tener un periodo seleccionado si eligió periodo como tipo de solicitud

    //1:
    var validaciones = [{val1: false, val2: false, val3: false}];
    if($('#value_seleccion_fondo_consulta').val() == "A" || $('#value_seleccion_fondo_consulta').val() == "B" || $('#value_seleccion_fondo_consulta').val() == "C" || $('#value_seleccion_fondo_consulta').val() == "D" || $('#value_seleccion_fondo_consulta').val() == "E"){
        // $('#error_seleccion_fondo_consulta').hide(100); 

        validaciones[0].val1 = true;
    
        selectedFondo = 1;
               
    }
    else{
        // $('#error_seleccion_fondo_consulta').show(100); 
     
        selectedFondo = 0;

        validaciones[0].val1 = false;
    }

    //2:
    if ($('#rbtnTipoConsulta').is(':checked') || $('#rbtnPeriodo').is(':checked')) {
        // $('#error_tipo_consulta').hide(100);
        tipoConsulta = 1;
        validaciones[0].val2 = true;
    }else{
        // $('#error_tipo_consulta').show(100);
        tipoConsulta = 0;
        validaciones[0].val2 = false;
    }

    //3:
    if ($('#rbtnTipoConsulta').is(':checked')) {
        // selecciona un periodo
        if (!$('#ddlTipoConsulta option[value="0"]').is(':selected')) {
            // $('#error_periodo_consulta').hide(100);
            periodo = 1;
            validaciones[0].val3 = true;
        }
        else{
            // $('#error_periodo_consulta').show(100);
            periodo = 0;
            validaciones[0].val3 = false;
        }
    }else{
        periodo = 1;  
        validaciones[0].val3 = true;
    }



    if(selectedFondo+tipoConsulta+periodo == 3){
     
        $('#VCResultado > table').addClass('active');
    }else{
     
        $('#VCResultado > table').removeClass('active');
    }

    return validaciones;

    



};


//  Validaciones
$('#VCResultado > table:first-child').click(function () {


    var validation = desbloquearBotones ();
    if(validation[0].val1 == true){
        $('#error_seleccion_fondo_consulta').hide(100);
    }else{
        $('#error_seleccion_fondo_consulta').show(100);
    }

    if(validation[0].val2 == true){
        $('#error_tipo_consulta').hide(100);
    }else{
        $('#error_tipo_consulta').show(100);
    }


    if(validation[0].val3 == true){
        $('#error_preriodo_consulta').hide(100);
    }else{
        $('#error_preriodo_consulta').show(100);
    }

  





     //Selecciona el tipo de consulta
     if (!$('#rbtnTipoConsulta').is(':checked') && !$('#rbtnPeriodo').is(':checked')) {
        $('#error_tipo_consulta').show(100);
    }


    //validaciones según el tipo de consulta


      if ($('#rbtnTipoConsulta').is(':checked')) {
    // selecciona un periodo
    if ($('#ddlTipoConsulta option[value="0"]').is(':selected')) {
        $('#error_periodo_consulta').show(100);
    }



}


});
// Validaciones





document.getElementById('lbVCBuscar').setAttribute("disabled", "true");
document.getElementById('lbVCBuscar').setAttribute("disabled", "true");

$('#lbVCBuscar').click(function () {
    window.btnClick = function () { return false; };
    alert('prevenimos el modal y la busqueda');
});

var menuLateral = $('.menu_lateral');









$('.menu_lateral li').click(function () {
    alert('a');
    $('.menu_lateral li').removeClass('active');
    $(this).addClass('active');

});




$(document).ready(function () {



    $('#rbtnTipoConsulta').prop('checked', false);

//Ocultar mensajes de validaciones 

$('#ddlTipoConsulta').change(function(){
    
    if($(this).val() != '0'){
    $('#error_periodo_consulta').hide(100);
    
    }else{
    $('#error_periodo_consulta').show(100);
    }

    var validation = desbloquearBotones ();
    if(validation[0].val3 == true){
        $('#error_periodo_consulta').hide(100);
    }else{
        $('#error_periodo_consulta').show(100);
    }
});

// $('#rbtnTipoConsulta').change(function(){
   
//     if ($('#rbtnTipoConsulta').is(':checked') || $('#rbtnPeriodo').is(':checked')) {
//         $('#error_tipo_consulta').hide(100);
//     }


// });

// $('#rbtnPeriodo').change(function(){
   



// });



    $('input[type=radio][name=paramVC]').change(function () {





        $('input[type=radio][name=paramVC]').parent('td').next('td').hide();
        $(this).parent('td').next('td').show();


     






    });

 


    // le quito el valor al campo fondo original 
    var defaultOption_consulta = $('#ddlFondo_custom_select ul li.default').html();

    $('#ddlFondo').val(defaultOption_consulta);
});




$('#ddlFondo_custom_select ul li').click(function () {
    
    var clase = $(this).attr("class");
    $('#ddlFondo').val(clase);


    var validation = desbloquearBotones ();
    if(validation[0].val1 == true){
        $('#error_seleccion_fondo_consulta').hide(100);
    }else{
        $('#error_seleccion_fondo_consulta').show(100);
    }









  

    

});


/// mostrar resultados 


var btnConsultar = $('#lbVCBuscar');
var ddlTipoConsulta = $('#ddlTipoConsulta');
var wrapper = $('tblVC_wrapper');


btnConsultar.click(function () {


    
























    alert('#s4-workspace');
       
         
   
    var scrollActual = $('#s4-workspace').scrollTop();

            var top = $('#VCResultado').offset().top + scrollActual - 300;
            // var max = $('#divBotoneraPrincipal').offset().top;
            alert('scroll actual ' + scrollActual);
            alert('top: ' + top);
            var width = $(window).width();
            if (width <= 760) {
                $('html, body').animate({ scrollTop: top }, 1000);
            }
            else {
                $('#s4-workspace').animate({ scrollTop: top }, 'slow');
            }
       
    
    $('#tblVC_wrapper').removeClass('animate__animated animate__fadeInUp');
   
    if ($('#rbtnTipoConsulta').prop('checked')) {
        if ($('#ddlTipoConsulta option:selected').val() != 0) {
            $('#tblVC_wrapper').show();
            $('#tblVC_wrapper').addClass('animate__animated animate__fadeInUp');
            // wrapper.addEventListener('animationend', () => {
            //     $('#tblVC_wrapper').removeClass('animate__animated animate__fadeInUp');
            // });
        }

    }
    else {
        $('#tblVC_wrapper').show();
        $('#tblVC_wrapper').addClass('animate__animated animate__fadeInUp');
        // wraper.addEventListener('animationend', () => {
        //     $('#tblVC_wrapper').removeClass('animate__animated animate__fadeInUp');
        // });
    }
    ;

});