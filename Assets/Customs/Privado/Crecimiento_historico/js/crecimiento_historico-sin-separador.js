
// Si la api no devuelve los datos con separador de miles hay que usar esta función:
function formatearNumero(num) {
    if (!isNaN(num)) {
        return num;
    }
};   

// Asigno asignare los modales correspondientes automaticamente 
function asignarModal(id){

BuenosModales('detalle_'+id);


}




// Acá almacenaremos los datos del la API:

var fechaInicio           = '11/01/2012 00:00:00';      // FecAfiliacionAdm
var fechaCierre        = '07/30/2021 00:00:00'       // FechaCierreSaldos
var añosAFP            = 15;                         // AntiguedadAdm
var mesesCotizados     = 312; //TotalMesesCotizados


var datosBalanceApi = {
 
 balance_crecimiento        : 26688486,                   // RentabilidadPesos 
 balance_aporte             : 23266773,                   // Aportes 
 balance_retiros            : -4395254,                   // Retiros10
 balance_comision           : -3498614,                   // ComisionFija
 balance_saldoFinal         : 42343130,                   // SaldoFinal
 balance_otros              : -281739,                    // otrosCargosAportes


}




// variables para controlar elementos del DOM: 
var fechaInicioEl = $('.initial_date');
var fechaCierreEl = $('.close_date');
var num_crecimiento = $('#num_crecimiento');
var num_aporte = $('#num_aporte')
var bar_crecimiento = document.querySelector('#bar_crecimiento');
var bar_aporte = document.querySelector('#bar_aporte');



// Con los ingredientes listos comencemos a cocinar

$(document).ready(function () {


    fechaInicioEl.text(fechaInicio);
    fechaCierreEl.text(fechaCierre);

     num_crecimiento.animateNumbers(datosBalanceApi['balance_crecimiento'], false, 1300, "linear");
     num_aporte.animateNumbers(datosBalanceApi['balance_aporte'], false, 1300, "linear");

   
    for(var clave in datosBalanceApi) {

        var row = $('#'+clave);

        var rowAmount = row.find('.amount span');

        rowAmount.text(formatearNumero(datosBalanceApi[clave]));



    // comprobaré si los datos son positivos o negativos para agregar los iconos:
    if(datosBalanceApi[clave] < 0){
       row.find('.cpl_icon.arrowPack').addClass('icon-arrow_negative t-lightRed');
    }
    // si el valor es 0 no mostraré la fila del dato:
    else if(datosBalanceApi[clave] == 0){

       row.addClass('hide');

    }
    else{
       row.find('.cpl_icon.arrowPack').addClass('icon-arrow_positive t-lightAqua');
    }

    // asigno su modal correspondiente 

    rowID = row.attr('id');
    
    $('.detalle_'+rowID).find('.modal_amount').text(formatearNumero(datosBalanceApi[clave])); 

    row.on('click', function() {
        asignarModal($(this).attr('id'));


   


       
});

}


// Pintaré los gráficos

if (datosBalanceApi['balance_crecimiento'] >= datosBalanceApi['balance_aporte']) {

        var crecimiento_por = 100;
        var aporte_por = datosBalanceApi['balance_aporte'] * 100 / datosBalanceApi['balance_crecimiento'];
        bar_aporte.style.width = aporte_por + '%';
        bar_crecimiento.style.width = crecimiento_por + '%';

    } else {
        var aporte_por = 100;
        var crecimiento_por = datosBalanceApi['balance_crecimiento'] * 100 / datosBalanceApi['balance_aporte'];
        bar_aporte.style.width = aporte_por + '%';
        bar_crecimiento.style.width = crecimiento_por + '%';
    }


});

