let increment = document.getElementById('text_zoom_increment');
let decrement = document.getElementById('text_zoom_decrement');
let fontsize = 16;
increment.onclick = () => {
    fontsize++;
 

 let cplBody = document.querySelectorAll('.cpl_body');

cplBody.forEach((body) => {

 
   body.style.fontSize = `${fontsize}px`

});






};



decrement.onclick = () => {
    fontsize--;
 

 let cplBody = document.querySelectorAll('.cpl_body');

cplBody.forEach((body) => {

 
   body.style.fontSize = `${fontsize}px`

});






};
