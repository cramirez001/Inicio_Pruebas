// secciones

var sectionInfo = document.getElementsByClassName('section_info')[0];
var sectionWorkerType = document.getElementsByClassName('section_worker_type')[0];
var sectionTDependiente =  document.getElementsByClassName('section_t_dependiente')[0];
var sectionTIndependiente =  document.getElementsByClassName('section_t_independiente')[0];
var sectionLoader =  document.getElementsByClassName('section_loader')[0];
var sectionDocumentReady = document.getElementsByClassName('section_document_ready')[0];
var sectionPreForm = document.getElementsByClassName('section_pre_form')[0];
var selected_option = document.getElementsByName('worker_type');

$(document).ready(function(){

$('.empleador_2 .cpl_input').val('');

$('#agregar_empleador').click(function(){

    $('.empleador_2').removeClass('animate__animated animate__fadeOutRight');
//             $('.empleador_2').addEventListener('animationend', () => {
//                 $('.empleador_2').removeClass('animate__animated animate__fadeInUp');
// });

    $('.empleador_2 .cpl_input_required').removeClass('ignore_validation');
    $('.empleador_2').show();
    
    $('.empleador_2').addClass('animate__animated animate__fadeInUp');


    $(this).hide();
    
});

$('#quitar_empleador').click(function(){

    $('.empleador_2').removeClass('animate__animated animate__fadeInUp');
    $('.empleador_2 .cpl_input').val('');
    $('.empleador_2 .cpl_input_required').addClass('ignore_validation');
    $('.empleador_2').hide();
    
    $('.empleador_2').addClass('animate__animated animate__fadeOutRight');


 
    $('#agregar_empleador').show();
});


});


function descargarOtraVez(){


    for (var i = 0, length = selected_option.length; i < length; i++) {
        if (selected_option[i].checked) {
        // do whatever you want with the checked radio
        var selected_optionVal = selected_option[i].value;
        // only one radio can be logically checked, don't check the rest
        break;
        }
        }
        
         
         switch(selected_optionVal){
        
            case 'dependiente':
                generate_doc_dependiente();
            break;
        
            case 'independiente':
                generate_doc_independiente();
            break;
        }

}



function get_form(){
    


 for (var i = 0, length = selected_option.length; i < length; i++) {
if (selected_option[i].checked) {
// do whatever you want with the checked radio
var selected_optionVal = selected_option[i].value;
// only one radio can be logically checked, don't check the rest
break;
}
}

 
 switch(selected_optionVal){

    case 'dependiente':
    nextAndPrev('next', 'section_t_dependiente');
    break;

    case 'independiente':
    nextAndPrev('next', 'section_t_independiente');
    break;
}


};


function generate_doc_dependiente(){

sectionTDependiente.style.display = 'none';
// sectionLoader.style.display ='block';
nextAndPrev('next', 'section_loader');

sectionLoader.classList.add('animate__animated', 'animate__fadeInUp');



setTimeout(
function(){

var selected_option = document.getElementsByName('worker_type');




get_pdf_dependiente();





},
4500);


setTimeout(
function(){

sectionLoader.style.display ='none';

sectionDocumentReady.style.display ='block';
sectionDocumentReady.classList.add('animate__animated', 'animate__fadeInLeft');





},
6500);


};



function generate_doc_independiente(){

sectionTIndependiente.style.display = 'none';
// sectionLoader.style.display ='block';
nextAndPrev('next', 'section_loader');

sectionLoader.classList.add('animate__animated', 'animate__fadeInUp');



setTimeout(
function(){

var selected_option = document.getElementsByName('worker_type');




get_pdf_independiente();





},
4500);


setTimeout(
function(){

sectionLoader.style.display ='none';

sectionDocumentReady.style.display ='block';
sectionDocumentReady.classList.add('animate__animated', 'animate__fadeInLeft');





},
6500);


}