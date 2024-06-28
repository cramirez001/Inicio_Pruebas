// Acá almacenaremos los datos del la API:
// ==============================================
//                     API 
// ==============================================

var fechaInicio        = '11/01/2012 00:00:00';      // FecAfiliacionAdm
var fechaCierre        = '07/30/2021 00:00:00'       // FechaCierreSaldos
var añosAFP            = 15;                         // AntiguedadAdm
var mesesCotizados     = 312; //TotalMesesCotizados
var aporteInicial      = 30200941 ;  //En la api de llama aporte final aunque es contradictorio porque es el aporte antes de la comision
var comision           = -5090954;   // ComisionPorcentual

var datosBalanceApi = {
 balance_crecimiento        : 62339816,                   // RentabilidadPesos 
 balance_aporte             : 25109987,                   // Aportes 
 balance_retiros            : -4347827,                   // Retiros10
 balance_otros              : -134449,                    // otrosCargosAportes
 balance_saldoFinal         : 82967526,                   // SaldoFinal
}

// ==============================================
//                     API
// ==============================================









// Si la api no devuelve los datos con separador de miles hay que usar esta función:
function formatearNumero(num) {
    if (!isNaN(num)) {
        
        num = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
     
        return num;
    }
};   

// Asigno asignare los modales correspondientes automaticamente 
function asignarModal(id){

BuenosModales('detalle_'+id);


}



// variables para controlar elementos del DOM: 
var comisionHistoricaEl = $('.comision_historica');
var aporteInicialEl  =$('.aporte_inicial');
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
    comisionHistoricaEl.text(formatearNumero(comision));
    aporteInicialEl.text(formatearNumero(aporteInicial));

     num_crecimiento.animateNumbers(datosBalanceApi['balance_crecimiento'], true, 1300, "linear");
     num_aporte.animateNumbers(datosBalanceApi['balance_aporte'], true, 1300, "linear");

   
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
    
    if(rowID != 'balance_saldoFinal'){

    
    $('.detalle_'+rowID).find('.modal_amount').text(formatearNumero(datosBalanceApi[clave])); 

    row.on('click', function() {
        asignarModal($(this).attr('id'));
    });

    }

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

