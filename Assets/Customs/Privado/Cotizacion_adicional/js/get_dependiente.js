function get_pdf_dependiente() {


  //fecha actual



    //datos del formulario//
    var currentdate = new Date();

var documentDate =+currentdate.getDate() + "/"
+ (currentdate.getMonth()+1)  + "/" 
+ currentdate.getFullYear() 







var nombre = document.querySelector('.section_t_dependiente #nombre_txt').value;
var rut = document.querySelector('.section_t_dependiente #rut_txt').value;
var telefono = document.querySelector('.section_t_dependiente #telefono_txt').value;

var correo = document.querySelector('.section_t_dependiente #correo_txt').value;
var direccion = document.querySelector('.section_t_dependiente #direccion_txt').value;
var comuna = document.querySelector('.section_t_dependiente #comuna_txt').value;
var ciudad = document.querySelector('.section_t_dependiente #ciudad_txt').value;

//empleador
var razon = document.querySelector('.section_t_dependiente #razon_txt').value;
var rut_empresa = document.querySelector('.section_t_dependiente #rut_empresa_txt').value;
var telefono_empresa = document.querySelector('.section_t_dependiente #telefono_empresa_txt').value;
var correo_empresa = document.querySelector('.section_t_dependiente #correo_empresa_txt').value;


//empleador2
var razon_2 = document.querySelector('.section_t_dependiente #razon_txt_2').value;
var rut_empresa_2 = document.querySelector('.section_t_dependiente #rut_empresa_txt_2').value;
var telefono_empresa_2 = document.querySelector('.section_t_dependiente #telefono_empresa_txt_2').value;
var correo_empresa_2 = document.querySelector('.section_t_dependiente #correo_empresa_txt_2').value;

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


  doc.addImage(imgData2, 'PNG', 70, 718, 40, 20);
  doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
  doc.text (110, 730, 'Autorizo a la Administradora para que notifique a mi empleador para que aumente');
  doc.text (110, 745, 'el descuento por cotización obligatoria al 11% a contar de las remuneraciones ');
  doc.text (110, 760, 'imponibles devengadas a contar del mes siguiente de la fecha de suscripción de ');
  doc.text (110, 775, 'este formulario.');







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
doc.text (40, 105, '(Trabajador dependiente)');

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


//+ 40
//Datos del Empleador
doc.setTextColor (30, 30, 30);
doc.setFontSize (13);
doc.setFontType("bold");
doc.text (40, 335, 'Datos del empleador:');
// + 20



//Razón social
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 365, 'Nombre legal:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (115, 365, razon);
doc.setDrawColor(200,200,200);
doc.line(115, 370, 555, 370); // horizontal line
//Razón social



// +30
//Rut
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 400, 'Rut empresa:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (115, 400, rut_empresa);
doc.setDrawColor(200,200,200);
doc.line(115, 405, 290, 405); // horizontal line
//Rut



//Tel
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (302, 400, 'Teléfono Empresa:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (405, 400, telefono_empresa);
doc.setDrawColor(200,200,200);
doc.line(405, 405, 555, 405); // horizontal line
//Tel



//Correo
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 430/* +30 */, 'Correo:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (85, 430/* +30 */, correo_empresa); 
doc.setDrawColor(200,200,200);
doc.line(85, 435/* +30 */, 555, 435/* +30 */); // horizontal line
//Correo





//+ 40
//Datos del Empleador 2
doc.setTextColor (30, 30, 30);
doc.setFontSize (13);
doc.setFontType("bold");
doc.text (40, 475, 'Datos del empleador 2:');
// + 25



//Razón social
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 500, 'Nombre legal:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (115, 500, razon_2);
doc.setDrawColor(200,200,200);
doc.line(115, 505, 555, 505); // horizontal line
//Razón social



// +30
//Rut
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 530, 'Rut empresa:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (115, 530, rut_empresa_2);
doc.setDrawColor(200,200,200);
doc.line(115, 535, 290, 535); // horizontal line
//Rut



//Tel
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (302, 530, 'Teléfono Empresa:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (405, 530, telefono_empresa_2);
doc.setDrawColor(200,200,200);
doc.line(405, 535, 555, 535); // horizontal line
//Tel



//Correo
doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (40, 560/* +30 */, 'Correo:');
// doc.setFontType("bold");
doc.setTextColor (0, 51, 160);
doc.setFontSize (11);
doc.text (85, 560/* +30 */, correo_empresa_2); 
doc.setDrawColor(200,200,200);
doc.line(85, 565/* +30 */, 555, 565/* +30 */); // horizontal line
//Correo




// periodo 


doc.setTextColor (30, 30, 30);
doc.setFontSize (13);
doc.setFontType("bold");
doc.text (40, 610, 'Periodo de tiempo de cotización adicional:');

doc.setLineWidth(1);
doc.setDrawColor(0);
doc.setFillColor(255,255,255);
doc.circle(45,640, 7, 'FD');

doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (55	, 644/* +30 */, '12 meses');


doc.setLineWidth(1);
doc.setDrawColor(0);
doc.setFillColor(255,255,255);
doc.circle(145, 640, 7, 'FD');

doc.setTextColor (30, 30, 30);
doc.setFontSize (11);
doc.setFontType("light");
doc.setFont("helvetica");
doc.text (160, 644/* +30 */, 'Indefinido');


switch (periodoVal){
	case '12':
     
	doc.setLineWidth(1);
doc.setDrawColor(255,255,255);
doc.setFillColor(0,0,0);
doc.circle(45, 640, 5, 'FD');


	break;


	case 'ind':
     
	 doc.setLineWidth(1);
 doc.setDrawColor(255,255,255);
 doc.setFillColor(0,0,0);
 doc.circle(145, 640, 5, 'FD');
 
 
	 break;
    

}



// Margen horizontal 
// inicio             40
// fin                555

// Centro horizontal  297
//  col izq    inicio: 40  Fin: 290
//  col der    inicio: 302 Fin: 555





  
  // Validaciones 

  // creo una clase que identifique que el campo es requerido
  // creo un array con todos los campos con esa clase 
  // luego lo recorro en una función que valide que cada uno esté completo
  // Valido si tiene una clase de validacion adicional como formato
  // en caso de error busco el f_error y lo lleno con el mensaje correspondiente

  


  doc.save('FORMULARIO_11%_dependiente('+nombre+').pdf');

}