function get_pdf_independiente() {


    //datos del formulario//
    var currentdate = new Date();

    var documentDate =+currentdate.getDate() + "/"
    + (currentdate.getMonth()+1)  + "/" 
    + currentdate.getFullYear() 
    

var nombre = document.querySelector('.section_t_independiente #nombre_txt_ind').value;
var rut = document.querySelector('.section_t_independiente #rut_txt_ind').value;
var telefono = document.querySelector('.section_t_independiente #telefono_txt_ind').value;

var correo = document.querySelector('.section_t_independiente #correo_txt_ind').value;
var direccion = document.querySelector('.section_t_independiente #direccion_txt_ind').value;
var comuna = document.querySelector('.section_t_independiente #comuna_txt_ind').value;
var ciudad = document.querySelector('.section_t_independiente #ciudad_txt_ind').value;


var periodo = document.getElementsByName('periodo_rdo');

for (var i = 0, length = periodo.length; i < length; i++) {
  if (periodo[i].checked) {
    // do whatever you want with the checked radio
    var periodoVal = periodo[i].value;
    // only one radio can be logically checked, don't check the rest
    break;
  }
}



  var svg = document.getElementById('svg-container').innerHTML;
  var doc = new jsPDF('p', 'pt', 'a4');

  if (svg)
    svg = svg.replace(/\r?\n|\r/g, '').trim();

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');


  context.clearRect(0, 0, canvas.width, canvas.height);
  canvg(canvas, svg);


  var imgData = canvas.toDataURL('image/png');


  doc.addImage(imgData, 'PNG', 40, 10, 120, 59);






  var check_svg = document.getElementById('svg_check').innerHTML;


  if (check_svg)
    check_svg = check_svg.replace(/\r?\n|\r/g, '').trim();

  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');


  context.clearRect(0, 0, canvas.width, canvas.height);
  canvg(canvas, check_svg);


  var imgData2 = canvas.toDataURL('image/png');


  doc.addImage(imgData2, 'PNG', 70, 438, 40, 20);
  doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
  doc.text (110, 450, 'Autorizo a AFP Capital para que notifique al Servicio de Impuestos Internos el');
  doc.text (110, 465, 'aumento del descuento por cotización obligatoria al 11% a contar de las rentas  ');
  doc.text (110, 480, 'imponibles desde el 1 de julio de 2021, correspondientes al Año Tributario 2022. ');




  doc.setFontSize (12);
  doc.setFontType("light");
  doc.setFont("helvetica");
  doc.text (460, 40, 'Fecha: '+documentDate);



doc.setFontSize (17);
doc.setFontType("bold");
doc.text (40, 90, 'Formulario Aumento de la Cotización Obligatoria al 11% ');
doc.setFontSize (12);

doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 105, '(Trabajador independiente)');

//Datos del afiliado
doc.setTextColor (30, 30, 30);
doc.setFontSize (13);
doc.setFontType("bold");
doc.text (40, 140, 'Datos del afiliado:');

//Campos
//Nombre completo
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 170, 'Nombre Completo:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (140, 170, nombre);
doc.setDrawColor(200,200,200);
doc.line(140, 175, 555, 175); // horizontal line
//Nombre completo


// +30
//Rut
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 200, 'Rut/NIC:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (90, 200, rut);
doc.setDrawColor(200,200,200);
doc.line(90, 205, 290, 205); // horizontal line
//Rut



//Tel
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (302, 200, 'Teléfono:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (355, 200, telefono);
doc.setDrawColor(200,200,200);
doc.line(355, 205, 555, 205); // horizontal line
//Tel

// doc.line(290, 325, 302, 325); // horizontal line


//Correo
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 230/* +30 */, 'Correo:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (85, 230/* +30 */, correo); 
doc.setDrawColor(200,200,200);
doc.line(85, 235/* +30 */, 555, 235/* +30 */); // horizontal line
//Correo



//Dirección particular
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 260/* +30 */, 'Dirección particular:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (150, 260/* +30 */, direccion); 
doc.setDrawColor(200,200,200);
doc.line(150, 265/* +30 */, 555, 265/* +30 */); // horizontal line
//Dirección particular






//Comuna
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 290, 'Comuna:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (93, 290, comuna);
doc.setDrawColor(200,200,200);
doc.line(93, 295, 290, 295); // horizontal line
//Comuna



//Ciudad
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (302, 290, 'Ciudad:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (352, 290, ciudad);
doc.setDrawColor(200,200,200);
doc.line(352, 295, 555, 295); // horizontal line
//Ciudad






// periodo 


doc.setTextColor (30, 30, 30);
doc.setFontSize (13);
doc.setFontType("bold");
doc.text (40, 360, 'Periodo de tiempo de cotización adicional:');

doc.setLineWidth(1);
doc.setDrawColor(0);
doc.setFillColor(255,255,255);
doc.circle(45, 390, 7, 'FD');

doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (55	, 394/* +30 */, '12 meses');


doc.setLineWidth(1);
doc.setDrawColor(0);
doc.setFillColor(255,255,255);
doc.circle(145, 390, 7, 'FD');

doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (160, 394/* +30 */, 'Indefinido');


switch (periodoVal){
	case '12':
     
	doc.setLineWidth(1);
doc.setDrawColor(255,255,255);
doc.setFillColor(0,0,0);
doc.circle(45, 390, 5, 'FD');


	break;


	case 'ind':
     
	 doc.setLineWidth(1);
 doc.setDrawColor(255,255,255);
 doc.setFillColor(0,0,0);
 doc.circle(145, 390, 5, 'FD');
 
 
	 break;
    

}




// Margen horizontal 
// inicio             40
// fin                555

// Centro horizontal  297
//  col izq    inicio: 40  Fin: 290
//  col der    inicio: 302 Fin: 555





  
  



doc.save('FORMULARIO_11%_independiente('+nombre+').pdf');

}