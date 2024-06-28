// valido los datos mientras se completan

// function leerRequeridos (){
//     var requiredFields = document.querySelectorAll('.cpl_input_required');
//     return requiredFields;
// }

var requiredFields = document.querySelectorAll('.cpl_input_required');


requiredFields.forEach(function(field) {

// agrego los errores son mostrarlos al usuario 

var inputWrap = field.closest(".input_wrap");
var error = document.createElement('span');
error.classList.add('f_error');
error.style.display = 'none';
inputWrap.append(error);
error.innerHTML = 'Este campo es requerido';
var  errorActive =  inputWrap.querySelector('.f_error');


if(!field.classList.contains('ignore_validation')){
// por defecto validaré con onblur

   field.addEventListener('blur', function(){
      
    if (field.value == ''){
   
        errorActive.classList.add('active');
        errorActive.style.display = 'block';
       
         
       }else{
             
        errorActive.classList.remove('active');
        errorActive.style.display = 'none';
     
       }
   });

}

});



function cpl_validator(form, actionstr){


    





    var requiredFields = [];

var requiredFieldsAll = document.querySelector(form).querySelectorAll('.cpl_input_required');
requiredFieldsAll.forEach(function(field) {
    if(!field.classList.contains('ignore_validation')){
        requiredFields.push(field);
    }
});



    // // Necesito un tratamiento distinto para los radios y checks

    // var requiredFields_chk_rdo = document.querySelector(form).querySelectorAll('.cpl_input_check.cpl_input_required, .cpl_input_radio.cpl_input_required');

    // var requiredFields = [];
var okFields = [];




requiredFields.forEach(function(field) {

    if(!field.classList.contains('ignore_validation')){
    


    var inputWrap = field.closest(".input_wrap");

    var  errorActive =  inputWrap.querySelector('.f_error');
    // valido los checks (checked)
if(field.classList.contains('check')){
   if(field.checked == false) {

        errorActive.classList.add('active');
        errorActive.style.display = 'block';
        }
        else{
            errorActive.classList.remove('active');
            errorActive.style.display = 'none';
            okFields.push(field.id);
            // alert(field.value);
        }
}
// valido los radios (checked)
else if (field.classList.contains('radio')){
    var nameRdo = field.getAttribute("name");

    if(!document.querySelector(form).querySelector('input[name="'+nameRdo+'"]:checked')) {

        errorActive.classList.add('active');
        errorActive.style.display = 'block';
        }
        else{
            errorActive.classList.remove('active');
            errorActive.style.display = 'none';
            okFields.push(field.id);
            // alert(field.value);
        }

}
// valido los campos de texto y select (value)
else{
    
if (field.value == ''){
   
 errorActive.classList.add('active');
 errorActive.style.display = 'block';





  
}else{
    
   
 errorActive.classList.remove('active');
 errorActive.style.display = 'none';
 okFields.push(field.id);

//  alert(field.value);

 


}
}
    }
});



// alert('campos requeridos: ' + requiredFields.length  +' campos completos: ' + okFields.length);





// Consulto si la cantidad de campos completos es igual a la cantidad de campos requeridos y ejecuto la función o muevo el scroll al primer mensaje de error 

if(okFields.length == requiredFields.length){

window[actionstr]();

// alert(requiredFields.length + ' vs ' + okFields.length);

}else{

    // usar en local

    // $('html, body, #s4-workspace').animate({ 
    //     scrollTop: $('.f_error.active').offset().top - 500
    // }, 500);






    var spanElement = $(".f_error.active");   

    if (spanElement != undefined && spanElement.length > 0) {



    // esto es en ambiente sitio
    if($('#s4-workspace').length){

 
        var scrollActual = $('#s4-workspace').scrollTop();
        if (scrollActual != undefined) {
            var top = spanElement.offset().top + scrollActual - 370;
            var width = $(window).width();
            if (width <= 760) {
                $('html, body').animate({ scrollTop: top }, 500);
            }
            else {
                $('#s4-workspace').animate({ scrollTop: top }, 500);
            }
        }
        
    }





    // esto en ambiente local
    else{

        var scrollActual = $('html').scrollTop();
        if (scrollActual != undefined) {
            var top = spanElement.offset().top - 100 ;
            alert(scrollActual);
            var width = $(window).width();
            $('html, body').animate({ scrollTop: top }, 500);
        }

    }
       
      
    }




}







    

}


