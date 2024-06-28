/* <script type="text/javascript"> */

    // var prm = Sys.WebForms.PageRequestManager.getInstance();
    // if (prm != null) {
    //     prm.add_endRequest(function (sender, e) {

        $('.txtPorcentajeFondo2Modal').bind('input', function (e) {
            CalcularMontosModal(e);
        });

        $('.txtPorcentajeFondo1Modal').bind('input', function (e) {
            CalcularMontosModal(e);
        });

        $('.porcentajeCuenta').bind('input', function (e) {
            calcularMonto(e);
        });

        $('.montoCuenta').bind('input', function (e) {
            calcularPorcentaje(e);
        });

        function CalcularMontosModal(e) {

            console.log(e);

            var fondosActuales = $(e.currentTarget).parents('.account_group').find('.seccionfondosmodal');
            var fondo1 = $(fondosActuales).find('.inputSelectFondo1').val();
            var fondo2 = $(fondosActuales).find('.inputSelectFondo2').val();

            var IdModal = $(e.target).attr('data-modal');
            var IdInputMonto = $(e.target).attr('data-saldodestino');
            var IdInputSaldo = $(e.target).attr('data-saldoorigen');
            var IdInputSaldoFondo = $(e.target).attr('data-DestinoSaldoFondo');
            var IdInputPorcentajeFondo = $(e.target).attr('data-PorcentajeFondo');
            //var idInputSaldoTotal = $(e.target).attr('data-traspasototal');
            //var IdInputPorcentaje = $(e.target).attr('data-idclase');
            var saldo = parseFloat($("." + IdModal + " ." + IdInputSaldo).val().replace("$", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
            var monto = parseFloat($("." + IdModal + " ." + IdInputMonto).val().replace("$", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
            var porcentajeEntrada = e.currentTarget.value;
            var calculo = 0;
            if ($.isNumeric(porcentajeEntrada)) {
                if (porcentajeEntrada > 100) {
                    $(e.currentTarget).val(parseInt(porcentajeEntrada.substring(0, porcentajeEntrada.length - 1)).toFixed(0));
                } else if (porcentajeEntrada >= 0) {
                    calculo = Math.round((saldo * porcentajeEntrada) / 100);
                    console.log("calcular MONTO -> saldo: " + saldo + " - porcentaje: " + porcentajeEntrada + " - calculo monto: " + calculo);
                    $("." + IdModal +" ." + IdInputMonto).val(calculo);
                    formatCurrency($("." + IdModal + " ." + IdInputMonto));
                    $(e.currentTarget).val(parseInt(porcentajeEntrada).toFixed(0));
                } else {
                    $(e.currentTarget).val('0');
                    $("." + IdModal + " ." + IdInputMonto).val('0');
                    formatCurrency($("." + IdModal + " ." + IdInputMonto));
                }
            } else {
                $("." + IdModal + " ." + IdInputMonto).val("$0");
                $(e.currentTarget).attr("placeholder", "0");
                //$("." + IdInputPorcentaje).attr("placeholder", "0");
            }

            //if (fondo1 != undefined || fondo2.trim() != undefined) {
                var calculoResto = saldo - calculo;
                $("." + IdModal + " ." +IdInputSaldoFondo).val(calculoResto);
                formatCurrency($("." + IdModal + " ." + IdInputSaldoFondo));

                var porcentajeResto = 100 - e.currentTarget.value;
                $("." + IdModal + " ." + IdInputPorcentajeFondo).val(parseInt(porcentajeResto).toFixed(0));

            //}


        }

        function SumaTotal(e) {

            var idInputSaldoTotal = $(e.target).attr('data-traspasototal');
            if (idInputSaldoTotal == undefined)
                idInputSaldoTotal = $(e).attr('data-traspasototal');

            var idDiv = $(e.target).attr('data-div');
            if (idDiv == undefined)
                idDiv = $(e).attr('data-div');

            var saldoTotal = 0;
            $("#" + idDiv + " .ChkValidar").each(function () {
                if ($(this).prop('checked') == true) {
                    var selector = $(this).attr('data-selector');
                    var repeater = $(this).attr('data-repeater');

                    var tipoTraspaso = $("#" + selector).val();

                    if (tipoTraspaso == 1) {
                        $("#" + repeater + " .MontoFondoOrigen").each(function () {
                            if ($(this).val().trim() != '') {
                                var aux = parseFloat($(this).val().replace("$", "").replace(".", "").replace(".", "".replace(".", "").replace(".", "")));
                                saldoTotal += aux;
                            }
                        })
                    }
                    else {
                        $("#" + repeater + " .txtSaldoFondoDestino").each(function () {
                            if ($(this).val().trim() != '') {
                                var aux = parseFloat($(this).val().replace("$", "").replace(".", "").replace(".", "".replace(".", "").replace(".", "")));
                                saldoTotal += aux;
                            }
                        })
                    }
                }
            })

            $("input[id*=" + idInputSaldoTotal + "]").val(saldoTotal);
            formatCurrency($("input[id*=" + idInputSaldoTotal + "]"));

        }

        function calcularPorcentaje(e) {
            
            console.log(e);

            var IdInputMonto = $(e.target).attr('data-idclase');
            var IdInputSaldo = $(e.target).attr('data-saldoorigen');
            var IdInputPorcentaje = $(e.target).attr('data-porcentaje');
            var idInputSaldoTotal = $(e.target).attr('data-traspasototal');
            var saldo = parseFloat($("." + IdInputSaldo).val());
            var monto = parseFloat($("." + IdInputMonto).val().replace("$", "").replace(".", "").replace(".", "").replace(".", "").replace(".", ""));
            var porcentaje = parseFloat($("." + IdInputPorcentaje).val());

            var calculo = 0;
            if (monto == "" || isNaN(monto)) {
                $("." + IdInputPorcentaje).val(0);
                $("." + IdInputMonto).attr("placeholder", "0");
            } else if (monto > saldo) {
                $("." + IdInputMonto).val(saldo);
                $("." + IdInputPorcentaje).val(100);
            } else if (monto == 0) {
                $("." + IdInputMonto).val("");
                $("." + IdInputMonto).attr("placeholder", "0");
                $("." + IdInputPorcentaje).val(0);
            } else {
                calculo = Math.round((monto * 100) / saldo);
                console.log("calcular PORCENTAJE -> saldo: " + saldo + " - monto: " + monto + " - calculo porcentaje: " + calculo);
                $("." + IdInputPorcentaje).val(calculo);
            }

            sumarSaldoFondo(e);
        }

        function calcularMonto(e) {

            console.log(e);

            var IdInputMonto = $(e.target).attr('data-saldodestino');
            var IdInputSaldo = $(e.target).attr('data-saldoorigen');
            var idInputSaldoTotal = $(e.target).attr('data-traspasototal');
            var IdInputPorcentaje = $(e.target).attr('data-idclase');
            var saldo = parseFloat($("." + IdInputSaldo).val());
            var monto = parseFloat($("." + IdInputMonto).val().replace("$", "").replace(".", ""));
            var porcentajeEntrada = e.currentTarget.value;
            var calculo = 0;
            if ($.isNumeric(porcentajeEntrada)) {
                if (porcentajeEntrada > 100) {
                    $("." + IdInputPorcentaje).val(parseInt(porcentajeEntrada.substring(0, porcentajeEntrada.length - 1)).toFixed(0));
                } else if (porcentajeEntrada >= 0) {
                    calculo = Math.round((saldo * porcentajeEntrada) / 100);
                    console.log("calcular MONTO -> saldo: " + saldo + " - porcentaje: " + porcentajeEntrada + " - calculo monto: " + calculo);
                    $("." + IdInputMonto).val(calculo);
                    formatCurrency($("." + IdInputMonto));
                    $("." + IdInputPorcentaje).val(parseInt(porcentajeEntrada).toFixed(0));
                } else {
                    $("." + IdInputPorcentaje).val('0');
                }
            } else {
                $("." + IdInputMonto).val("$0");
                $("." + IdInputPorcentaje).attr("placeholder", "0");
            }

            sumarSaldoFondo(e);
        }

        function sumarSaldoFondo(e) {

            var idInputSaldoTotal = $(e.target).attr('data-traspasototal');
            if (idInputSaldoTotal == undefined)
                idInputSaldoTotal = $(e).attr('data-traspasototal');

            var idDiv = $(e.target).attr('data-div');
            if (idDiv == undefined)
                idDiv = $(e).attr('data-div');
            
            var saldoTotal = 0;
            $("#" + idDiv + " .ChkValidar").each(function () {
                if ($(this).prop('checked') == true) {
                    var selector = $(this).attr('data-selector');
                    var repeater = $(this).attr('data-repeater');

                    var tipoTraspaso = $("#" + selector).val();

                    if (tipoTraspaso == 1) {
                        $("#" + repeater + " .MontoFondoOrigen").each(function () {
                            if ($(this).val().trim() != '') {
                                var aux = parseFloat($(this).val().replace("$", "").replace(".", "").replace(".", "".replace(".", "").replace(".", "")));
                                saldoTotal += aux;
                            }
                        })
                    }
                    else {
                        $("#" + repeater + " .txtSaldoFondoDestino").each(function () {
                            if ($(this).val().trim() != '') {
                                var aux = parseFloat($(this).val().replace("$", "").replace(".", "").replace(".", "".replace(".", "").replace(".", "")));
                                saldoTotal += aux;
                            }
                        })
                    }
                }
            })

            $("input[id*=" + idInputSaldoTotal + "]").val(saldoTotal);
            formatCurrency($("input[id*=" + idInputSaldoTotal + "]"));

        }
     
        function detectarCambios() {

            var originales = $('.fondosOriginales');

            for (i = 0; i < originales.length; i++) {

                var fondo1Origin = $(originales[i]).find('.fondo1').val();
                var fondo2Origin = $(originales[i]).find('.fondo2').val();
                var fondoROrigin = $(originales[i]).find('.recaudadorVal').val();


                var actuales = $(originales[i]).next('.fondosActuales');



                var fondo1Actual = actuales.find('.fondo1').val();
                var fondo2Actual = actuales.find('.fondo2').val();
                var fondoRActual = actuales.find('.recaudadorVal').val();


                if (fondo1Actual != fondo1Origin || fondo2Actual != fondo2Origin || fondoRActual != fondoROrigin) {

                    actuales.find('.booleanDistribucion').val('true');

                    if (
                    (fondo1Actual == 'A' || fondo1Actual == 'B' || fondo1Actual == 'C' || fondo1Actual == 'D' || fondo1Actual == 'E') &&
                    (fondo2Actual == 'A' || fondo2Actual == 'B' || fondo2Actual == 'C' || fondo2Actual == 'D' || fondo2Actual == 'E')
                    ) {

                        actuales.find('.tipoCambio').val('2');

                    } else {
                        actuales.find('.tipoCambio').val('1');

                    }
                } else {
                    actuales.find('.booleanDistribucion').val('false');

                }
            }

        };

        $('.porcentajeCuenta').bind('keypress', function (e) {
            var key = window.event ? window.event.keyCode : number.which;
            if ((key >= 48 && key <= 57))
                return true;
            else
                return false;
        }).keyup(function (e) {
            if (e.keyCode == 8 || e.keyCode == 46)
                $(this).trigger('input');
        });

        $('.porcentajeCuenta').bind("cut copy paste", function (e) {
            e.preventDefault();
        });

        $('.porcentajeCuenta').click(function () {
            $(this).select();
        });

        $('.montoCuenta').click(function () {
            $(this).select();
        });


        //--------CUSTOM SELECT

        var defaultOption = $('.custom_select_wrap .custom_select ul li.default').html();
        $(document).on("click", function (e) {
            var container = $(".custom_select_wrap .custom_select ul");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.hide();
            }
        });

        // $(document).ready(function () {
            $('.custom_select_wrap .custom_select .selected').html(defaultOption);
            $('.custom_select_wrap .custom_select .selected').click(function () {
                $(this).next('ul').show(200);
            });

            $('.custom_select_wrap .custom_select ul li').click(function () {
                var selectOption = $(this).html();
                $(this).parents('.custom_select').children('.selected').html(selectOption);
                var clase = $(this).attr("class");
                var selectInput = $(this).parents('.custom_select_wrap').find('.inputSelect');
                selectInput.val(clase);
                $(this).parents('.custom_select').children('ul').hide(200);
            });
        // });

        //--------FIN CUSTOM SELECT


        //--------TRASPASO

        // var elem = document.getElementsByClassName("monto");


        // formato de los números

        $("input[data-type='currency']").on({
            keyup: function () {
                formatCurrency($(this));
            },
            blur: function () {
                formatCurrency($(this), "blur");
            }
        });


        function formatNumber(n) {

            return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }


        function formatCurrency(input, blur) {

            var input_val = input.val();
            if (input_val === "" || input_val == undefined) { return; }
            var original_len = input_val.length;
            var caret_pos = input.prop("selectionStart");

            if (input_val.indexOf(",") >= 0) {
                var decimal_pos = input_val.indexOf(",");
                var left_side = input_val.substring(0, decimal_pos);
                var right_side = input_val.substring(decimal_pos);
                left_side = formatNumber(left_side);
                right_side = formatNumber(right_side);
                if (blur === "blur") {
                    right_side += "00";
                }
                right_side = right_side.substring(0, 2);
                input_val = "$" + left_side + "," + right_side;
            } else {
                input_val = formatNumber(input_val);
                input_val = "$" + input_val;
            }

            input.val(input_val);
            var updated_len = input_val.length;
            caret_pos = updated_len - original_len + caret_pos;
            input[0].setSelectionRange(caret_pos, caret_pos);
        }

        // fin formato de los números =========================================================================================================================

        //--------------------------FUNCIONES MODAL NUEVO ------------------------------------------------------------------------------->

        // Función que almacena los fondos que a ido seleccionando  =========================================================================================================================

        function listadoFondos(e) {
            // defino un array vacío, en el irán todos los fondos que ha seleccionado
            var fondosSeleccionados = [];
            var numerofondosSeleccionados = [];
            var fondosCapital = [];

            //defino los campos que leeremos para saber que fondos tiene acá
            var fondosActuales = e.parents('.account_group').find('.fondosActuales');
            var fondo1 = $(fondosActuales).find('.fondo1').val();
            var fondo2 = $(fondosActuales).find('.fondo2').val();

            //  alert(fondo1);
            //  alert(fondo2);

            // si tiene fondos acá los añadimos al array
            if (fondo1 == 'A' || fondo1 == 'B' || fondo1 == 'C' || fondo1 == 'D' || fondo1 == 'E') {
                fondosSeleccionados.push(fondo1);
                fondosCapital.push(fondo1);
            }
            if (fondo2 == 'A' || fondo2 == 'B' || fondo2 == 'C' || fondo2 == 'D' || fondo2 == 'E') {
                fondosSeleccionados.push(fondo2);
                fondosCapital.push(fondo2);
            }

            // defino el campo que vamos a leer para llenar el anterior arreglo
            var campo = e.parents('.account_group').find('.destino .inputSelect');


            // console.log(fondosSeleccionados);


            //Recorro todos los campos, pregunto su valor y si su valor es un fondo lo agrego al array
            for (i = 0; i < campo.length; i++) {

                console.log($(campo[i]).val());

                if ($(campo[i]).val() == 'A' || $(campo[i]).val() == 'B' || $(campo[i]).val() == 'C' || $(campo[i]).val() == 'D' || $(campo[i]).val() == 'E') {


                    fondosSeleccionados.push($(campo[i]).val());

                    // console.log(fondosSeleccionados);

                }

            }
            //Ahora recorro el arreglo con los fondos seleccionados y agrego valor por valor a un nuevo arreglo, pero esta vez reelplazaré los valores que estén repetidos

            for (i = 0; i < fondosSeleccionados.length; i++) {

                if (!(numerofondosSeleccionados.indexOf(fondosSeleccionados[i]) > -1) && (fondosSeleccionados[i] == 'A' || fondosSeleccionados[i] == 'B' || fondosSeleccionados[i] == 'C' || fondosSeleccionados[i] == 'D' || fondosSeleccionados[i] == 'E')) {
                    numerofondosSeleccionados.push(fondosSeleccionados[i]);
                }
            }


            console.log(fondosSeleccionados);
            console.log(numerofondosSeleccionados);


            // retorno un areeglo con los dos arreglo accedo a uno o a otro según lo requiera
            // return [fondosSeleccionados, numerofondosSeleccionados, fondosCapital];
            
            // Creo un objeto con los atributos que podre usar mas adelante en el script
            var Fondos = { Seleccionados: fondosSeleccionados, cantidad: numerofondosSeleccionados, enCapital: fondosCapital }
            return Fondos;

        };
        // Fin Función que almacena los fondos que a ido seleccionando  =======================================================================================================

        function FondosSeleccionadosModal(e) {
            var camposModal = e.parents('.account_group').find('.cpl_modal .col_fondo .inputSelect');
            var fondosDisponibles = [];

            for (i = 0; i < camposModal.length; i++) {

                if ($(camposModal[i]).val() == 'A' || $(camposModal[i]).val() == 'B' || $(camposModal[i]).val() == 'C' || $(camposModal[i]).val() == 'D' || $(camposModal[i]).val() == 'E') {
                    console.log(camposModal[i]);
                    // alert(camposModal.length);
                    // alert(i);
                    fondosDisponibles.push($(camposModal[i]).val());
                }

            }
            return fondosDisponibles;
        }

        //-------------------------- FIN FUNCIONES MODAL NUEVO ------------------------------------------------------------------------------->



        // Funcion que muestra  fondo recaudador ==============================0

        function showFondoRecaudador(e) {
            var element = e.find('.select_recaudador');
            return element;
        };
        // fin Funcion que muestra o oculta el fondo recaudador ========================================

        $('.custom_select_wrap .custom_select .selected').html(defaultOption);

        /*cambio*/  // si un campo tiene algún valor le paso a su correspondiente selector dicho valor (problema con el volver atrás)
        // agregar
        // inicio 1308
        var inputSelect = $('.custom_select_wrap .inputSelect');
        var conteo = 0;
        for (i = 0; i < inputSelect.length; i++) {
            if ($(inputSelect[i]).val()) {
                var selected = $(inputSelect[i]).parents('.custom_select_wrap').find('.selected');
                var value = $(inputSelect[i]).val();
                selected.html($(inputSelect[i]).parents('.custom_select_wrap').find('.custom_select ul li.' + value).html());
            }
        }
        // fin 1308

        $('.custom_select_wrap .custom_select .selected').click(function () {

            $(this).next('ul').show(200);
            $(this).next('ul').find('li').show();

        });

        //Click en los slectores del modal, estos deben tratarse de forma especial ya que debo ocultar el fondo elegido en el otro 
        //campo para evitar que seleccione dos fondos iguales
        $('.cpl_modal .col_fondo .custom_select_wrap .custom_select.modalInput .selected').click(function () {
            var fondosDisponibles = FondosSeleccionadosModal($(this));
            //esto es para volver a mostrar el fondo que actualmente tiene selccionado asi solo se oculta el fondo que está en el otro campo
            var valorActual = $(this).parents('.custom_select_wrap').find('.inputSelect').val()
            console.log('fm ' + fondosDisponibles);
            for (i = 0; i < fondosDisponibles.length; i++) {
                // var fondo = fondosDisponibles[i];
                if (fondosDisponibles[i] != valorActual) {
                    $(this).parents('.custom_select').find('li.' + fondosDisponibles[i]).hide();
                }
            }
        });


        // Click sobre las opciones del modal
        $('.cpl_modal .col_fondo .custom_select_wrap .custom_select.modalInput ul li').click(function () {
            if ($(this).hasClass('A') || $(this).hasClass('B') || $(this).hasClass('C') || $(this).hasClass('D') || $(this).hasClass('E')) {
                // alert('NO ERROR');
                $(this).parents('.cpl_modal').find('.error_no_fondos').hide();
                //agregado el 1308
                $(this).parents('.col_fondo').find('.error_seleccion_fondo1').removeClass('active_error');
                $(this).parents('.col_fondo').find('.error_seleccion_fondo1').hide();
                $(this).parents('.col_fondo').find('.error_seleccion_fondo2').removeClass('active_error');
                $(this).parents('.col_fondo').find('.error_seleccion_fondo2').hide();
                // fin 1308
            }
            recaudadorModal($(this), true);
        });


        //Funcion fondo recaudador en modal: Esta funcion muestra o oculta el fondo recaudador, tambien lo limpia cada vez que elegimos un fondo
        function recaudadorModal(e, limpiar) {

            var defaultOption = e.parents('.account_group').find('.cpl_modal .modal_recaudador .custom_select ul li.default').html();
            var select_recaudador = e.parents('.account_group').find('.cpl_modal .modal_recaudador');

            //  limpio el campo del fondo recaudador 
            var campoFondoRecaudador = e.parents('.account_group').find('.cpl_modal .modal_recaudador .inputSelect');
            if (limpiar == true) {
                campoFondoRecaudador.val('');
                select_recaudador.find('.selected').html(defaultOption);
            }
            fondosSeleccionados = FondosSeleccionadosModal(e);
            //   alert('fondos en el modal: '+fondosSeleccionados);
            console.log(fondosSeleccionados);
            if (fondosSeleccionados.length == 2) {
                select_recaudador.show(200);
            } else {
                select_recaudador.hide();
            }

            console.log('fondos seleccionados en el modal' + fondosSeleccionados);
        }
        //Fin funcion fondo recaudador en modal


        //Click sobre el selector del fondo recaudador en el modal
        $('.cpl_modal .custom_select_wrap.modal_recaudador .custom_select.modalInput .selected').click(function () {
            // alert('a');
            var fondosDisponibles = FondosSeleccionadosModal($(this));
            $(this).parents('.custom_select').find('li').hide();

            for (i = 0; i < fondosDisponibles.length; i++) {
                // var fondo = fondosDisponibles[i];
                $(this).parents('.custom_select').find('li.' + fondosDisponibles[i]).show();
            }
        });

        $('.cpl_modal .custom_select_wrap.modal_recaudador .custom_select.modalInput ul li').click(function () {
            $(this).parents('.cpl_modal').find('.error_no_fondo_recaudador').hide();
        });



        // FUNCION MODAL

        //Click en los slectores del modal

        // Bloqueo de fondos: Aca bloqueo los fondos en el selector segun los fondos que ha ido seleccionando o los que tiene acá
        // Esto no se aplica a los del modal
        // cambio 1308 agrega .destino
        $('.destino .custom_select_wrap .custom_select:not(.modalInput) .selected').click(function () {
            var fondosDisponibles = listadoFondos($(this)).cantidad;
            var fondosSeleccionados = listadoFondos($(this)).Seleccionados;

            //acá almaceno el valor actual del select que acabo de clickear
            var selectInput = $(this).parents('.custom_select_wrap').find('.inputSelect');
            // alert('fondo actual:'+$(selectInput).val());

            if (fondosDisponibles.length == 2) {
                var fondoActual = 0;

                for (i = 0; i < fondosSeleccionados.length; i++) {
                    // a este if no entra no se por que
                    if (fondosSeleccionados[i] == $(selectInput).val()) {
                        // alert('fondo seleccionado'+[i]+':'+fondosSeleccionados[i]+'vs'+$(selectInput).val());
                        fondoActual++;
                    }

                    //   si el fondo actual se repite al menos una vez
                    if (fondoActual > 1 || !($(selectInput).val() == 'A' || $(selectInput).val() == 'B' || $(selectInput).val() == 'C' || $(selectInput).val() == 'D' || $(selectInput).val() == 'E')) {
                        $(this).next('ul').find('li').hide();
                        $(this).next('ul').find('li.default').show();

                        //se agrega el 1308
                        for (e = 0; e < fondosDisponibles.length; e++) {
                            var mostrarFondo = fondosDisponibles[e];
                            $(this).next('ul').find('li.' + mostrarFondo).show();
                            console.log('muestrame solo los fondos:' + mostrarFondo);
                        }
                        //fin 1308
                    }

                }
                // alert('fondo actual se repite'+fondoActual);

            }
        });
        // Fin Bloqueo de fondos

        /*cambio 1308*/
        //Agregar Funcion que limita el fondo recaudador 
        //inicio
        $('.footer_grupo_cuentas .select_recaudador .custom_select_wrap .custom_select:not(.modalInput) .selected').click(function () {
            var fondosDisponibles = listadoFondos($(this)).cantidad;

            $(this).next('ul').find('li').hide();
            $(this).next('ul').find('li.default').show();

            for (e = 0; e < fondosDisponibles.length; e++) {
                var mostrarFondo = fondosDisponibles[e];


                $(this).next('ul').find('li.' + mostrarFondo).show();

                console.log('muestrame solo los fondos:' + mostrarFondo);

            }

        });
        // fin


        //modales//
        function modal(e) {
            var grupoAsociado = $(e).parents('.account_group');
            var fondosActuales = grupoAsociado.find('.fondosActuales');
            // var booleanDistribucion = grupoAsociado.find('.booleanDistribucion');
            var modalAsociado = grupoAsociado.find('.cpl_modal');
            var fondosCapital = listadoFondos($(e)).enCapital;
            var nuevosFondosSeleccionados = [];
            var fondoSlect1 = modalAsociado.find('.fondo1');//selector
            var fondoSlect2 = modalAsociado.find('.fondo2');//selector
            var montofondo1Modal = modalAsociado.find('.txtSaldoDestinoFondo1Modal');//selector
            var montofondo2Modal = modalAsociado.find('.txtSaldoDestinoFondo2Modal');//selector
            var perfondo1Modal = modalAsociado.find('.txtPorcentajeFondo1Modal');//selector
            var perfondo2Modal = modalAsociado.find('.txtPorcentajeFondo2Modal');//selector
            var fondoSlect2 = modalAsociado.find('.fondo2');//selector
            var fondo1Input = fondoSlect1.parents('.custom_select_wrap').find('.inputSelect');//Campo
            var fondo2Input = fondoSlect2.parents('.custom_select_wrap').find('.inputSelect');//Campo
            var modalCont = modalAsociado.find('.modal_cont');
            var campoFondo1 = fondosCapital[0];
            var campoFondo2 = fondosCapital[1];
            var perFondo1Actual = grupoAsociado.find('.fondosActuales .perSaldo1');
            var perFondo2Actual = grupoAsociado.find('.fondosActuales .perSaldo2');
            var montoFondo1Actual = grupoAsociado.find('.fondosActuales .Saldo1');
            var montoFondo2Actual = grupoAsociado.find('.fondosActuales .Saldo2');

            var colFondo = modalAsociado.find('.col_fondo');
            var recaudadorActual = fondosActuales.find('.recaudadorVal');

               //  Si la persona le puso quitar fondo y cerró el modal, debo volver a mostrar el campo que oculto si tiene dos fondos             
               for (i = 0; i < fondosCapital.length; i++) {
                $(colFondo[i]).addClass('active');
            }


            var fondosActivos = modalAsociado.find('.col_fondo.active');
            console.log(modalAsociado.length);
       
            console.log('cajas de fondo activas '+fondosActivos.length);
            /*cambio*/
            //inicio 1308
            if (fondosActivos.length == 2) {
                fondosActivos.find('.txtPorcentajeFondo1Modal').prop("disabled", false);
                fondosActivos.find('.txtPorcentajeFondo1Moda2').prop("disabled", false);
            }else{
                fondosActivos.find('.txtPorcentajeFondo1Modal').prop("disabled", true);
                fondosActivos.find('.txtPorcentajeFondo1Moda2').prop("disabled", true);
            }
            // fin

            // alert(fondosCapital.length);

        
            //Funcion cierra modal
        
            // Fin funcion cierra modal  

            //Guardar modal
            // Esta funcion guarda lo que actualmente esta en el modal y lo pasa a los campos ocultos
         
            //    Fin guardar modal 


          

            //AGREGAR O QUITAR FONDOS
            // alert(campoFondo1+', '+campoFondo2);

            if (campoFondo1 == 'A' || campoFondo1 == 'B' || campoFondo1 == 'C' || campoFondo1 == 'D' || campoFondo1 == 'E') {
                var defaultOption1 = $('.custom_select_wrap .custom_select ul li.' + campoFondo1).html();
            } else {
                var defaultOption1 = $('.custom_select_wrap .custom_select ul li.default').html();

            }
            if (campoFondo2 == 'A' || campoFondo2 == 'B' || campoFondo2 == 'C' || campoFondo2 == 'D' || campoFondo2 == 'E') {
                var defaultOption2 = $('.custom_select_wrap .custom_select ul li.' + campoFondo2).html();
            } else {
                var defaultOption2 = $('.custom_select_wrap .custom_select ul li.default').html();
            }
            if (recaudadorActual.val() == 'A' || recaudadorActual.val() == 'B' || recaudadorActual.val() == 'C' || recaudadorActual.val() == 'D' || recaudadorActual.val() == 'E') {
                var defaultOptionRecaudador = $('.custom_select_wrap .custom_select ul li.' + recaudadorActual.val()).html();
            } else {
                var defaultOptionRecaudador = $('.custom_select_wrap .custom_select ul li.default').html();
            }
            fondoSlect1.find('.selected').html(defaultOption1);
            fondoSlect2.find('.selected').html(defaultOption2);

            //   PASO LOS FONDOS ACTUALES AL MODAL________________________________________________________________________________________________________________________________________
            fondo1Input.val(campoFondo1);
            fondo2Input.val(campoFondo2);

            perfondo1Modal.val(perFondo1Actual.val());
            perfondo2Modal.val(perFondo2Actual.val());
            montofondo1Modal.val(montoFondo1Actual.val());
            montofondo2Modal.val(montoFondo2Actual.val());

            modalAsociado.find('.modal_recaudador .modalInput').val(recaudadorActual.val());

            modalAsociado.find('.modal_recaudador .selected').html(defaultOptionRecaudador);


            //quito el error cuando el el checkbox esté seleccionado
            var checkDeclaration = modalAsociado.find('.declaration');

            checkDeclaration.change(function () {
                if (checkDeclaration.prop('checked') == true) {
                    $(this).parents('.cpl_modal').find('.error_no_check').hide();
                    /*cambio 1308*/ /*agregar*/ $(this).parents('.cpl_modal').find('.error_no_check').removeClass('active_error');
                } else {
                    $(this).parents('.cpl_modal').find('.error_no_check').show();
                    /*cambio 1308 */
                    /*agregar*/ $(this).parents('.cpl_modal').find('.error_no_check').addClass('active_error');
                }

            });

            //ahora guardo lo que eligio en el modal

            modalAsociado.find('.guardar').click(function () {

                    guardarModal(fondosActuales);
               

            });

            $('#s4-workspace').css({ overflowY: 'hidden', width: '100%' });
            $('html').css({ overflow: 'hidden', width: '100%' });
            // document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });
            $(modalAsociado).find('.modal_box').addClass('active');
            $(modalAsociado).find('.modal_box').addClass('animated');
            $(modalAsociado).find('.top').addClass('animated');
            if ($(modalAsociado).hasClass('right_modal')) {
                $(modalAsociado).show();
                $(modalAsociado).find('.modal_box').addClass('fadeInRight');
                $(modalAsociado).find('.top').addClass('fadeInRight');
            }
            if ($(modalAsociado).hasClass('center_modal')) {
                $(modalAsociado).addClass('cpl_center_content');
                // $(modalAsociado).addClass('cpl_center-content');
                $(modalAsociado).find('.modal_box').addClass('animated zoomIn');
            }
            $(modalAsociado).find('.close_action').click(function () {
                cerrarModal1(modalAsociado);
            });

            /*cambio 1308*/
            /*agregar*/
            //  inicio
            perfondo1Modal.keyup(function () {
                if ($(this).val() > 0) {
                    $(this).parents('.col_fondo').find('.error_per_0').removeClass('active_error');
                    $(this).parents('.col_fondo').find('.error_per_0').hide();
                }
            });

            perfondo2Modal.keyup(function () {
                if ($(this).val() > 0) {
                    $(this).parents('.col_fondo').find('.error_per_0').removeClass('active_error');
                    $(this).parents('.col_fondo').find('.error_per_0').hide();
                }
            });
            // fin

        };
        //modales//

        $('.cambiarFondos').click(function () {
            modal(this);
            recaudadorModal($(this), false);
        });

        $('.eraseFondo').click(function () {

            /*cambio 1308*/
            /*agregar*/
            //inicio
            $(this).parents('.col_fondo').find('.error_seleccion_fondo1').removeClass('active_error');
            $(this).parents('.col_fondo').find('.error_seleccion_fondo1').hide();
            $(this).parents('.col_fondo').find('.error_seleccion_fondo2').removeClass('active_error');
            $(this).parents('.col_fondo').find('.error_seleccion_fondo2').hide();
            //fin

            var modalAsociado = $(this).parents('.cpl_modal');
            var fondosActivos = modalAsociado.find('.col_fondo.active');
            var saldoTotal = modalAsociado.find('.txtSaldoOrigenFondoModal').val();
            var colAsociado = $(this).parents('.col_fondo');
            colAsociado.removeClass('active');
            //ahora si la persona quita un fondo debo poner el valor del campo en default 

            var defaultOption = colAsociado.find('.custom_select ul li.default').html();
            var inputAsociado = colAsociado.find('.custom_select_wrap .inputSelect');
            colAsociado.find('.custom_select .selected').html(defaultOption);
            inputAsociado.val('');
            recaudadorModal($(this), true);
            // si quita un fondo el que queda debe quedar en 100% y desactivado el porcentaje y el monto 
            // alert('100%');
            modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal').val(100);
            modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal').val(100);
            modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal').prop("disabled", true);
            modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal').prop("disabled", true);
            modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo1Modal').val(saldoTotal);
            modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo2Modal').val(saldoTotal);
            colAsociado.find('.txtPorcentajeFondo1Modal').val('');
            colAsociado.find('.txtPorcentajeFondo2Modal').val('');
            colAsociado.find('.txtSaldoDestinoFondo1Modal').val('');
            colAsociado.find('.txtSaldoDestinoFondo2Modal').val('');
        });

        $('.btnAgregaFondo').click(function () {

            var modalAsociado = $(this).parents('.cpl_modal');
            var saldoTotal = modalAsociado.find('.txtSaldoOrigenFondoModal').val().split(['$']);
            var totalNumb = parseInt(saldoTotal[1].replace('.','').replace('.','').replace('.','').replace('.','').replace('.',''));
            console.log(saldoTotal);
            console.log(totalNumb);
            var colAsociado = $(this).parents('.col_fondo');
            colAsociado.addClass('active');

            var fondosActivos = modalAsociado.find('.col_fondo.active');

            modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal').prop("disabled", false);
            modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal').prop("disabled", false);

            if (fondosActivos.length == 2) {

                modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal').val(50);
                modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal').val(50);
               

                modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo1Modal').val(totalNumb / 2);
                var monto1 = modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo1Modal');
                if (monto1 != undefined)
                    formatCurrency($(monto1));

                modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo2Modal').val(totalNumb / 2);
                var monto2 = modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo2Modal');
                if (monto2 != undefined)
                    formatCurrency($(monto2));

            }
            else
            {
                modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal').val(100);
                modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal').val(100);
                modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo1Modal').val(totalNumb);
                var monto1 = modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo1Modal');
                if(monto1 != undefined)
                    formatCurrency($(monto1));

                modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo2Modal').val(totalNumb);
                var monto2 = modalAsociado.find('.col_fondo.active .txtSaldoDestinoFondo2Modal');
                if (monto2 != undefined)
                    formatCurrency($(monto2));

                modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal').prop("disabled", true);
                modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal').prop("disabled", true);
            }

            /*cambio*/ /*agregar*/
            //inicio 1308
            $(this).parents('.cpl_modal').find('.error_no_fondos').removeClass('active_error');
            $(this).parents('.cpl_modal').find('.error_no_fondos').hide();
            //fin

        });


        // FIN FUNCION MODAL


        $('.custom_select_wrap .custom_select ul li').click(function () {

            var campoFondoRecaudador = $(this).parents('.account_group').find('.select_recaudador');
            //var fondosDisponibles = fondosRestantes($(this))[1];
            var fondosDisponibles = listadoFondos($(this)).cantidad;
            //var fondosCapital = fondosRestantes($(this))[2];
            var fondosCapital = listadoFondos($(this)).enCapital;
            var selectOption = $(this).html();
            var clase = $(this).attr("class");

            if (clase == 'A' || clase == 'B' || clase == 'C' || clase == 'D' || clase == 'E') {
                $(this).parents('.custom_select').children('.selected').html(selectOption);
                var selectInput = $(this).parents('.custom_select_wrap').find('.inputSelect');
                selectInput.val(clase);
                var dvError = selectInput.attr('data-error1');
                var dvVal = selectInput.attr('data-val');
                $('.' + dvVal + ' #' + dvError).hide();
                $('.' + dvVal).removeClass('campoValidado');
            } else {
                $(this).parents('.custom_select').children('.selected').html(selectOption);
                var selectInput = $(this).parents('.custom_select_wrap').find('.inputSelect');
                selectInput.val('');
            }

            $(this).parents('.custom_select').children('ul').hide(200);

            // COMIENZA LA VALIDACIÓN Y EL ALMACENAMIENTO DE LOS FONDOS

            //fondosRestantes($(this));
            listadoFondos($(this));

            // TERMINA LA VALIDACIÓN Y EL ALMACENAMIENTO DE LOS FONDOS
            if (fondosCapital.length < 2) {

                if (fondosDisponibles.length == 2) {
                    campoFondoRecaudador.show(200);
                    //cambio 1308
                    campoFondoRecaudador.find('.booleanRecaudador').attr('value', 'true');
                } else {
                    campoFondoRecaudador.hide(200);
                    //cambio 1308
                    campoFondoRecaudador.find('.booleanRecaudador').attr('value', 'false');
                }
            }

        });

        /*cambio*/ // reinicio el fondo recaudador si eligio un fondo de destino que excluye al valor actual
        // agregar
        // inicio 1308
        $('.destino .custom_select_wrap .custom_select ul li').click(function () {
            var fondosDisponibles = listadoFondos($(this)).cantidad;
            var campoFondoRecaudador = $(this).parents('.account_group').find('.select_recaudador');
            var existe = false;
            for (i = 0; i < fondosDisponibles.length; i++) {

                if (campoFondoRecaudador.find('.inputSelect').val() == fondosDisponibles[i]) {
                    existe = true;
                }
            }
            if (existe == false) {
                campoFondoRecaudador.find('.inputSelect').val('');
                campoFondoRecaudador.find('.custom_select .selected').html(campoFondoRecaudador.find('.custom_select ul li.default').html());
            }

        });
        //fin

        $('.txtSaldoFondoDestino').keyup(function () {
            //console.log($(this).val());	

            var dvError2 = $(this).attr('data-error2');
            var dvError3 = $(this).attr('data-error3');
            var dvError4 = $(this).attr('data-error4');
            var dvVal = $(this).attr('data-val');

            $('.' + dvVal + ' #' + dvError2).hide();
            $('.' + dvVal + ' #' + dvError3).hide();
            $('.' + dvVal + ' #' + dvError4).hide();

        });

        // reinicio los campos de fondos cuando cargue la página
        //$('.inputSelect').val('');

        //  muestro el monto editable o no según el tipo e traspaso total o parcial
        $('.ddlSeleccionCuenta').change(function (e) {

            if ($(this).val() == 2 || $(this).val() == 3) {
                $(this).parents('.formulario_cuenta_traspaso').find('.partial_field').show();
                $(this).parents('.formulario_cuenta_traspaso').find('.destino .monto').hide();

                if ($(this).val() == 2) {
                    $(this).parents('.formulario_cuenta_traspaso').find('.partial_field .txtPorcentajeFondoDestino').attr("disabled", false);
                    $(this).parents('.formulario_cuenta_traspaso').find('.partial_field .txtSaldoFondoDestino').attr("disabled", true);
                }
                else {
                    $(this).parents('.formulario_cuenta_traspaso').find('.partial_field .txtPorcentajeFondoDestino').attr("disabled", true);
                    $(this).parents('.formulario_cuenta_traspaso').find('.partial_field .txtSaldoFondoDestino').attr("disabled", false);
                }
                sumarSaldoFondo(e);

            }
            if ($(this).val() == 1) {
                $(this).parents('.formulario_cuenta_traspaso').find('.partial_field').hide();
                $(this).parents('.formulario_cuenta_traspaso').find('.destino .monto').show();
                $(this).parents('.formulario_cuenta_traspaso').find('.partial_field .txtPorcentajeFondoDestino').attr("disabled", true);
                $(this).parents('.formulario_cuenta_traspaso').find('.partial_field .txtSaldoFondoDestino').attr("disabled", true);

                SumaTotal(e);
            }

        });

        // muestro el formulario de traspaso cuando seleccione una afp

        $(".select_account").each(function () {
            console.log('select_account: ' + $(this).prop("checked"));

            if ($(this).prop("checked")) {
                $(this).parents(".row_cuenta").find(".formulario_cuenta_traspaso").show(200);
                sumarSaldoFondo(this);
            }
        });


    



    var check = document.getElementsByClassName('select_account');

    if (check != undefined && check.length > 0) {

        alert(check.length);

        for (i = 0; i < check.length; i++) {
       
            if (check[i].checked) {
           alert('chekeado2');
               var parent = check[i].closest('.row_cuenta');
              var element = parent.getElementsByClassName('formulario_cuenta_traspaso');

              element[0].style.display = "block";
             
                    
                   
                   
                //sumarSaldoFondo(check[i]);
            } else {
                var parent = check[i].closest('.row_cuenta');
              var element = parent.getElementsByClassName('formulario_cuenta_traspaso');

              element[0].style.display = "none";
                //sumarSaldoFondo(check[i]);
            }
        }

    }

    


        $(".select_account").change(function () {

            var idInputSaldoTotal = $(this).attr('data-traspasototal');
            var idDiv = $(this).attr('data-div');

            if ($(this).prop("checked")) {
                $(this)
                    .parents(".row_cuenta")
                    .find(".formulario_cuenta_traspaso")
                    .show(200);
                sumarSaldoFondo(this);
            } else {
                $(this)
                    .parents(".row_cuenta")
                    .find(".formulario_cuenta_traspaso")
                    .hide(200);
                sumarSaldoFondo(this);
            }
        });



        //--------FIN TRASPASO
//     });
// };


// </script>

// <script>

function cerrarModal1(modalAsociado, colFondo) {
    // cuado cierro el modal debo ocultar todos los col_fondos
    $(colFondo).removeClass('active');

    $(modalAsociado).removeClass('cpl_center_content');
    $(modalAsociado).fadeOut(0);

    $(modalAsociado).find('.modal_box').delay(1000).removeClass('animated fadeInUp fadeInRight fadeInDown fadeOutRight ');
    $(modalAsociado).find('.top').delay(1000).removeClass('animated fadeInUp fadeInRight fadeInDown fadeOutRight ');
    if ($(modalAsociado).hasClass('center_modal')) {
        // $(modalAsociado).removeClass('cpl_center-content');

    }
    $('html').css('overflow', 'auto');
    $('#s4-workspace').css({ overflowY: 'scroll', width: '100%', position: 'relative' });
    $('html').css({ overflow: 'auto' });

};

function detectarCambios1(div) {

    //var originales = $('.fondosOriginales');
    var originales = $('div[id*='+div+']').find('.fondosOriginales');
    //ctl00_ctl52_g_a893baf5_32f4_45df_afba_0cabdcbd1ad2_dvCtaVoluntariaAPV

    for (i = 0; i < originales.length; i++) {

        var fondo1Origin = $(originales[i]).find('.fondo1').val();
        var fondo2Origin = $(originales[i]).find('.fondo2').val();
        var fondoROrigin = $(originales[i]).find('.recaudadorVal').val();
        var actuales = $(originales[i]).next('.fondosActuales');
        var fondo1Actual = actuales.find('.fondo1').val();
        var fondo2Actual = actuales.find('.fondo2').val();
        var fondoRActual = actuales.find('.recaudadorVal').val();

        if (fondo1Actual != fondo1Origin || fondo2Actual != fondo2Origin || fondoRActual != fondoROrigin) {

            actuales.find('.booleanDistribucion').val('true');

            if (
            (fondo1Actual == 'A' || fondo1Actual == 'B' || fondo1Actual == 'C' || fondo1Actual == 'D' || fondo1Actual == 'E') &&
            (fondo2Actual == 'A' || fondo2Actual == 'B' || fondo2Actual == 'C' || fondo2Actual == 'D' || fondo2Actual == 'E')
            ) {
                actuales.find('.tipoCambio').val('2');
            } else {
                actuales.find('.tipoCambio').val('1');
            }
        } else {
            actuales.find('.booleanDistribucion').val('false');
        }
    }

}


function guardarModalTransitorio(fondosActuales, grupoAsociado, modalAsociado, fondo1Input, fondo2Input, select_recaudador, montofondo1Modal, montofondo2Modal, perfondo1Modal, perfondo2Modal, colFondo) {

    var selectoresReiniciar = grupoAsociado.find('.custom_select_wrap .custom_select:not(.modalInput)');
    var camposReiniciar = grupoAsociado.find('.inputSelect:not(.modalInput)');

    for (i = 0; i < selectoresReiniciar.length; i++) {
        var defaultOption = $(selectoresReiniciar[i]).find('ul li.default').html();
        $(selectoresReiniciar[i]).find('.selected').html(defaultOption);
    }

    for (i = 0; i < camposReiniciar.length; i++) {
        $(camposReiniciar[i]).val('');
    }

    // alert("fondos seleccionados"+fondo1.val());

    //le saco el signo peso a los montos
    var monto1 = montofondo1Modal.val().split(['$']);
    var monto2 = montofondo2Modal.val().split(['$']);

    grupoAsociado.find('.inputSelect .selected').html(defaultOption);

    fondosActuales.find('.fondo1').val(fondo1Input.val());     
    fondosActuales.find('.fondo2').val(fondo2Input.val());
    fondosActuales.find('.Saldo1').val(monto1[1]);
    fondosActuales.find('.Saldo2').val(monto2[1]);
    fondosActuales.find('.perSaldo1').val(perfondo1Modal.val());
    fondosActuales.find('.perSaldo2').val(perfondo2Modal.val());

    var pintarNuevosFondos = '';

    //if ($(fondo1Input).val() == 'A' || $(fondo1Input).val() == 'B' || $(fondo1Input).val() == 'C' || $(fondo1Input).val() == 'D' || $(fondo1Input).val() == 'E')
    
    if ($(fondo1Input).val() != '')
    {

        var pintarNuevosFondos = pintarNuevosFondos + '<div class="cpl_fondo cpl_col cpl_col_sd_6">Fondo <div class="fondo_icon ' + fondo1Input.val() + '">' + fondo1Input.val() + '</div></div>';
    }

    //if ($(fondo2Input).val() == 'A' || $(fondo2Input).val() == 'B' || $(fondo2Input).val() == 'C' || $(fondo2Input).val() == 'D' || $(fondo2Input).val() == 'E')
    if ($(fondo2Input).val() != '')
    {
        var pintarNuevosFondos = pintarNuevosFondos + '<div class="cpl_fondo cpl_col cpl_col_sd_6">Fondo <div class="fondo_icon ' + fondo2Input.val() + '">' + fondo2Input.val() + '</div></div>';
    }

    grupoAsociado.find('.cuenta_actual .fondosActuales').html(pintarNuevosFondos);

    fondosActuales.find('.recaudadorVal').val(select_recaudador);

    //detectarCambios1();
    cerrarModal1(modalAsociado, colFondo);

    /*cambio*/
    // agregar
    // inicio 1308
    var campoFondoRecaudador = grupoAsociado.find('.select_recaudador');
    campoFondoRecaudador.hide(200);
    campoFondoRecaudador.find('.booleanRecaudador').attr('value', 'false');
    // fin

}

function guardarModal(e) {
    //alert("hola");

    var error = true;
    var grupoAsociado = $(e).parents('.account_group');
    var fondosActuales = grupoAsociado.find('.fondosActuales');
    // var booleanDistribucion = grupoAsociado.find('.booleanDistribucion');
    var modalAsociado = grupoAsociado.find('.cpl_modal');
    var fondosCapital = listadoFondos2($(e)).enCapital;
    var nuevosFondosSeleccionados = [];
    var fondoSlect1 = modalAsociado.find('.fondo1');//selector
    var fondoSlect2 = modalAsociado.find('.fondo2');//selector
    var montofondo1Modal = modalAsociado.find('.txtSaldoDestinoFondo1Modal');//selector
    var montofondo2Modal = modalAsociado.find('.txtSaldoDestinoFondo2Modal');//selector
    var perfondo1Modal = modalAsociado.find('.txtPorcentajeFondo1Modal');//selector
    var perfondo2Modal = modalAsociado.find('.txtPorcentajeFondo2Modal');//selector
    var fondoSlect2 = modalAsociado.find('.fondo2');//selector
    var fondo1Input = fondoSlect1.parents('.custom_select_wrap').find('.inputSelect');//Campo
    var fondo2Input = fondoSlect2.parents('.custom_select_wrap').find('.inputSelect');//Campo
    var modalCont = modalAsociado.find('.modal_cont');
    var campoFondo1 = fondosCapital[0];
    var campoFondo2 = fondosCapital[1];
    var perFondo1Actual = grupoAsociado.find('.fondosActuales .perSaldo1');
    var perFondo2Actual = grupoAsociado.find('.fondosActuales .perSaldo2');
    var montoFondo1Actual = grupoAsociado.find('.fondosActuales .Saldo1');
    var montoFondo2Actual = grupoAsociado.find('.fondosActuales .Saldo2');
    var colFondo = modalAsociado.find('.col_fondo');
    var recaudadorActual = fondosActuales.find('.recaudadorVal');
    var checkDeclaration = modalAsociado.find('.declaration');

    /*cambio*/
    /*agregar*/
    // incio 1308
    var fondosActivos = modalAsociado.find('.col_fondo.active');
    //fin

    //nuevo

    var select_recaudador = grupoAsociado.find('.cpl_modal .modal_recaudador .inputSelect').val();
    console.log(checkDeclaration);
    // alert('select_recaudador'+select_recaudador);
    var OKguardar = true;
    // alert('fondos en modal'+fondo1Input.val()+fondo2Input.val());
    // Tiene al menos un fondo?

    //if (($(fondo1Input).val() == 'Elegir fondo' || $(fondo1Input).val() == '') && ($(fondo2Input).val() == 'Elegir fondo' || $(fondo2Input).val() == ''))

    if (($(fondo1Input).val() != 'A' && $(fondo1Input).val() != 'B' && $(fondo1Input).val() != 'C' && $(fondo1Input).val() != 'D' && $(fondo1Input).val() != 'E')
    && ($(fondo2Input).val() != 'A' && $(fondo2Input).val() != 'B' && $(fondo2Input).val() != 'C' && $(fondo2Input).val() != 'D' && $(fondo2Input).val() != 'E'))       
    {
        // alert('error no fondos');
        ErrorModal1('.error_no_fondos', modalAsociado);
        OKguardar = false;
    }

    /*cambio*/
    /*agregar*/
    // incio 1308

    if ($(fondosActivos).find('.inputSelectFondo1').val() == '') {
        ErrorModal1('.error_seleccion_fondo1', modalAsociado);
        OKguardar = false;
    }

    if ($(fondosActivos).find('.inputSelectFondo2').val() == '') {
        ErrorModal1('.error_seleccion_fondo2', modalAsociado);
        OKguardar = false;
    }
    //fin

    // tiene fondo recaudador
    if (($(fondo1Input).val() == 'A' || $(fondo1Input).val() == 'B' || $(fondo1Input).val() == 'C' || $(fondo1Input).val() == 'D' || $(fondo1Input).val() == 'E') &&
            ($(fondo2Input).val() == 'A' || $(fondo2Input).val() == 'B' || $(fondo2Input).val() == 'C' || $(fondo2Input).val() == 'D' || $(fondo2Input).val() == 'E')) {
        if (select_recaudador != 'A' && select_recaudador != 'B' && select_recaudador != 'C' && select_recaudador != 'D' && select_recaudador != 'E') {
            // alert('error no fondo recaudador');
            ErrorModal1('.error_no_fondo_recaudador', modalAsociado);
            OKguardar = false;
        }

    }

    //if ($(fondo1Input).val() != 'Elegir fondo' && $(fondo2Input).val() != 'Elegir fondo' && select_recaudador == '') {
    //    ErrorModal1('.error_no_fondo_recaudador', modalAsociado);
    //    OKguardar = false;
    //}


    var porcentajeActivo1 = modalAsociado.find('.col_fondo.active .txtPorcentajeFondo1Modal');
    if (porcentajeActivo1.val() == 0 || porcentajeActivo1.val() == '') {

        var error = porcentajeActivo1.parents('.cpl_caja_fondo').find('.error_per_0');

        // alert(' PORCENTAJE EN 0');
        ErrorModal1(error, modalAsociado);
        OKguardar = false;

    }
    var porcentajeActivo2 = modalAsociado.find('.col_fondo.active .txtPorcentajeFondo2Modal');
    if (porcentajeActivo2.val() == 0 || porcentajeActivo2.val() == '') {

        var error = porcentajeActivo2.parents('.cpl_caja_fondo').find('.error_per_0');

        // alert(' PORCENTAJE EN 0');
        ErrorModal1(error, modalAsociado);
        OKguardar = false;
    }

    if (checkDeclaration.prop('checked') == false) {
        // alert('No ha checkeado');
        ErrorModal1('.error_no_check', modalAsociado);
        OKguardar = false;
    }

    if (OKguardar == true) {
        guardarModalTransitorio(fondosActuales, grupoAsociado, modalAsociado, fondo1Input, fondo2Input, select_recaudador, montofondo1Modal, montofondo2Modal, perfondo1Modal, perfondo2Modal, colFondo);
        var div = $(e).attr('data-div');
        detectarCambios1(div);

        var flagGuardarModal = $(e).attr('data-guardar');
        $('input[id*=' + flagGuardarModal + ']').val("1");
        return true;
    }
    else
    {
        /*cambio*/
        //agregar 
        // inicio 1308
        var errors = modalAsociado.find('.active_error');
        var modalCont = modalAsociado.find('.modal_cont');
        var scrollActual = modalCont.scrollTop();
        modalCont.animate({
            scrollTop: $(errors).offset().top
        }, 1000);
        //fin

        return false;
    }

    // fin nuevo


    
}

function ErrorModal1(error, modalAsociado) {

    //cambio 1308
    modalAsociado.find(error).addClass('active_error');
    modalAsociado.find(error).show();

    //var modalCont = $(modalAsociado).find('.modal_cont');
    //var scrollActual = modalCont.scrollTop();
    //modalCont.animate({
    //    scrollTop: $(error).offset().top + scrollActual
    //}, 1000);
    //modalAsociado.find(error).show();
}

function listadoFondos2(e) {
    // defino un array vacío, en el irán todos los fondos que ha seleccionado
    var fondosSeleccionados = [];
    var numerofondosSeleccionados = [];
    var fondosCapital = [];

    //defino los campos que leeremos para saber que fondos tiene acá
    var fondosActuales = e.parents('.account_group').find('.fondosActuales');
    var fondo1 = $(fondosActuales).find('.fondo1').val();
    var fondo2 = $(fondosActuales).find('.fondo2').val();

    //  alert(fondo1);
    //  alert(fondo2);

    // si tiene fondos acá los añadimos al array
    //if (fondo1 == 'A' || fondo1 == 'B' || fondo1 == 'C' || fondo1 == 'D' || fondo1 == 'E')
    if (fondo1 != '' && fondo1 != undefined) {
        fondosSeleccionados.push(fondo1);
        fondosCapital.push(fondo1);
    }

    //if (fondo2 == 'A' || fondo2 == 'B' || fondo2 == 'C' || fondo2 == 'D' || fondo2 == 'E')
    if (fondo2 != '' && fondo2 != undefined) {
        fondosSeleccionados.push(fondo2);
        fondosCapital.push(fondo2);
    }

    // defino el campo que vamos a leer para llenar el anterior arreglo
    var campo = e.parents('.account_group').find('.destino .inputSelect');

    // console.log(fondosSeleccionados);
    //Recorro todos los campos, pregunto su valor y si su valor es un fondo lo agrego al array
    for (i = 0; i < campo.length; i++) {

        console.log($(campo[i]).val());

        //if ($(campo[i]).val() == 'A' || $(campo[i]).val() == 'B' || $(campo[i]).val() == 'C' || $(campo[i]).val() == 'D' || $(campo[i]).val() == 'E')
        if($(campo[i]).val() != '')
        {
            fondosSeleccionados.push($(campo[i]).val());
            // console.log(fondosSeleccionados);
        }

    }
    //Ahora recorro el arreglo con los fondos seleccionados y agrego valor por valor a un nuevo arreglo, pero esta vez reelplazaré los valores que estén repetidos

    for (i = 0; i < fondosSeleccionados.length; i++) {

        if (!(numerofondosSeleccionados.indexOf(fondosSeleccionados[i]) > -1) && (fondosSeleccionados[i] == 'A' || fondosSeleccionados[i] == 'B' || fondosSeleccionados[i] == 'C' || fondosSeleccionados[i] == 'D' || fondosSeleccionados[i] == 'E')) {
            numerofondosSeleccionados.push(fondosSeleccionados[i]);
        }
    }


    console.log(fondosSeleccionados);
    console.log(numerofondosSeleccionados);


    // retorno un areeglo con los dos arreglo accedo a uno o a otro según lo requiera
    // return [fondosSeleccionados, numerofondosSeleccionados, fondosCapital];

    // Creo un objeto con los atributos que podre usar mas adelante en el script
    var Fondos = { Seleccionados: fondosSeleccionados, cantidad: numerofondosSeleccionados, enCapital: fondosCapital }
    return Fondos;
}

function validarFormulario1(sender, args) {

    var error = true;
    var bandera = true;
    var dvPosicion = '';

    error = validarFormularioCCO('DivRptCtaObligatoria');

    if (!error) {
        bandera = error;
    }
    error = validarFormularioCCO('DivRptCtaAfiliadoVoluntario');

    if (!error) {
        bandera = error;
    }

    error = validarFormularioCCO('DivRptCtaIndemnizacion');

    if (!error) {
        bandera = error;
    }

    error = ValidarFormularioRoot('DivCtaVoluntariaAPV');

    if (!error) {
        bandera = error;
    }
        
    error = validarFondoRecaudador('hdnBoolFondoRecaudador_APV', 'hdnSelectFondoRecaudador_APV', 'FondoRecaudadorVacio_APV');

    if (!error) {
        bandera = error;
    }

    error = ValidarFormularioRoot('DivRptCtaDepositoConvenido');

    if (!error) {
        bandera = error;
    }

    error = validarFondoRecaudador('hdnBoolFondoRecaudador_CCIDC', 'hdnSelectFondoRecaudador_CCIDC', 'FondoRecaudadorVacio_CCIDC');

    if (!error) {
        bandera = error;
    }

    error = ValidarFormularioRoot('DivrptCtaCotizacionVoluntariaColectiva');

    if (!error) {
        bandera = error;
    }
  
    error = validarFondoRecaudador('hdnBoolFondoRecaudador_APVC', 'hdnSelectFondoRecaudador_APVC', 'FondoRecaudadorVacio_APVC');

    if (!error) {
        bandera = error;
    }

    error = ValidarFormularioRoot('DivrptCtaAhorroVoluntarioCta2');

    if (!error) {
        bandera = error;
    }
         
    error = validarFondoRecaudador('hdnBoolFondoRecaudador_CAV', 'hdnSelectFondoRecaudador_CAV', 'FondoRecaudadorVacio_CAV');

    if (!error) {
        bandera = error;
    }

    ScrollToElement();

    return bandera;
}

function validarFormularioCCO(div) {
    var error = true;

    $('#' + div + ' .ChkValidar').each(function () {
        if ($(this).prop('checked') == true) {
            var repeater = $(this).attr('data-repeater');
            $('#' + repeater + ' .inputSelect').each(function () {
                var valor = $(this).val();
                var dvError1 = $(this).attr("data-error1");
                var dvError2 = $(this).attr("data-error2");
                var dvError3 = $(this).attr("data-error3");
                var dvError4 = $(this).attr("data-error4");
                var dvVal = $(this).attr("data-val");

                if (valor == "" || valor == "default") {
                    error = false;
                    $('.' + dvVal + ' #' + dvError1).show();
                    $('.' + dvVal).addClass('campoValidado');
                }
                else {
                    $('.' + dvVal + ' #' + dvError1).hide();
                    $('.' + dvVal).removeClass('campoValidado');
                }
            });
        }
    });

    return error;
}

function ValidarFormularioRoot(div) {

    var error = true;
    var dvPosicion = '';

    $('#' + div + ' .ChkValidar').each(function () {
        if ($(this).prop('checked') == true) {
            var repeater = $(this).attr('data-repeater');
                
            $('#' + repeater + ' .inputSelect').each(function () {
                var valor = $(this).val();
                var dvError1 = $(this).attr("data-error1");
                var dvError2 = $(this).attr("data-error2");
                var dvError3 = $(this).attr("data-error3");
                var dvError4 = $(this).attr("data-error4");
                var dvVal = $(this).attr("data-val");
                var dvMontoOrigen = $(this).attr("data-montoOrigen");
                var dvSaltoDestino = $(this).attr("data-saldodestino");
                var dvTipoTraspaso = $(this).attr("data-tipo");
                var tipoTraspaso = $('.' + dvTipoTraspaso).val();

                if (tipoTraspaso == 1) {
                    if (valor == "" || valor == "default") {
                        error = false;
                        $('.' + dvVal + ' #' + dvError1).show();
                        $('.' + dvVal).addClass('campoValidado');
                    }
                    else {
                        $('.' + dvVal + ' #' + dvError1).hide();
                        $('.' + dvVal).removeClass('campoValidado');
                    }
                        
                }
                else
                {
                    var saldodestino = $('.' + dvSaltoDestino).val().replace("$", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "");

                    if ((saldodestino == "" || saldodestino == 0) && (valor == "" || valor == "default")) {
                        $('.' + dvVal + ' #' + dvError1).hide();
                        $('.' + dvVal + ' #' + dvError2).hide();
                        $('.' + dvVal + ' #' + dvError3).hide();
                        $('.' + dvVal + ' #' + dvError4).hide();
                        $('.' + dvVal).removeClass('campoValidado');
                    }
                    else
                    {
                        if (valor == "" || valor == "default") {
                            error = false;
                            $('.' + dvVal + ' #' + dvError1).show();
                            $('.' + dvVal).addClass('campoValidado');
                        }
                        else
                        {
                            $('.' + dvVal + ' #' + dvError1).hide();

                            var saldodestino = $('.' + dvSaltoDestino).val().replace("$", "").replace(".", "").replace(".", "").replace(".", "").replace(".", "");
                           
                            if (saldodestino == '' || saldodestino == 0) {
                                error = false;
                                $('.' + dvVal + ' #' + dvError2).show();
                                $('.' + dvVal).addClass('campoValidado');
                            }
                            else
                            {
                                $('.' + dvVal + ' #' + dvError2).hide();
                                $('.' + dvVal).removeClass('campoValidado');
                                var montoOrigen = parseFloat($('.' + dvMontoOrigen).val());

                                if (parseFloat(montoOrigen) < 1000) {
                                    if (parseFloat(saldodestino) < parseFloat(montoOrigen)) {
                                        error = false;
                                        $('.' + dvVal + ' #' + dvError4).show();
                                        $('.' + dvVal).addClass('campoValidado');
                                    }
                                    else {
                                        $('.' + dvVal + ' #' + dvError4).hide();
                                        $('.' + dvVal).removeClass('campoValidado');
                                    }
                                }
                                else {
                                    if (parseFloat(saldodestino) < 1000) {
                                        error = false;
                                        $('.' + dvVal + ' #' + dvError3).show();
                                        $('.' + dvVal).addClass('campoValidado');
                                    }
                                    else {
                                        $('.' + dvVal + ' #' + dvError3).hide();
                                        $('.' + dvVal).removeClass('campoValidado');
                                    }
                                }
                            }                                
                        }
                    }
                }
            });
        }
    })
 
    return error;

}

function validarFondoRecaudador(hdnBoolFondoRecaudador,hdnSelectFondoRecaudador, divValidacion) {

    var error = true;

    var hdnInputBoolFondoRecaudador = $('.' + hdnBoolFondoRecaudador).val();
    var hdnInputSelectFondoRecaudador = $('.' + hdnSelectFondoRecaudador).val();

    if (hdnInputBoolFondoRecaudador != undefined && hdnInputSelectFondoRecaudador != undefined) {
        if (hdnInputBoolFondoRecaudador == 'false') {
            return true;
        }
        else {
            if (hdnInputSelectFondoRecaudador == '') {
                $('.' + divValidacion).show();
                $('.' + divValidacion).addClass('campoValidado');
                return false;
            }
            else {
                $('.' + divValidacion).hide();
                $('.' + divValidacion).removeClass('campoValidado');
                return true;
            }
        }
    }
    else
        return true;
}

function ScrollToElement() {

    var spanElement = $('#s4-workspace').find(".campoValidado :first")       

    if (spanElement != undefined && spanElement.length > 0) {
        var scrollActual = $('#s4-workspace').scrollTop();
       
        if (scrollActual != undefined) {
            var top = spanElement.offset().top + scrollActual - 300;
            var max = $('#divBotoneraPrincipal').offset().top;
            console.log('top: ' + top + ' max: ' + max);
            var width = $(window).width();
            if (width <= 760) {
                $('html, body').animate({ scrollTop: top }, 1000);
            }
            else {
                $('#s4-workspace').animate({ scrollTop: top }, 'slow');
            }
        }
    }
        
}

//function ScrollToElement(div) {

//    console.log('div: ' + div + ' offset: ' + $('#' + div).offset().top);
//    var top = Math.abs($('#' + div).offset().top);
//    $('#s4-workspace').animate({
//        scrollTop: top
//    }, 1000);
//   // return false;
//};

// </script>