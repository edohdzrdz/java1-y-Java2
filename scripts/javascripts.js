	/*
	suma dos valores fijos
	*/
	function sumar()
	{
		var variable1 = 2;
		var variable2 = 2;
		var resultado = variable1 +variable2 ;
		alert("Resultado de suma " + resultado);
	}


	/*
	suma dos valores tomados directamente de los textbox 
	*/

	function sumar2() {
		
            var n1 = document.getElementById('txtN1').value;
            var n2 = document.getElementById('txtN2').value;
	            var suma = parseInt(n1) + parseInt(n2);
	            alert("La suma es: "+suma)
    }
    
    
   	/*
	suma dos valores como parametros
	*/

	function sumar3(primerNumero, segundoNumero) {
		
			var suma = parseInt(primerNumero) + parseInt(primerNumero);
	            alert("La suma es: "+suma)
    }

    
    function diasDeLaSemana()
    {
		var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
		for(var i=0; i<7; i++) {
		  alert(dias[i]);
		}

    }