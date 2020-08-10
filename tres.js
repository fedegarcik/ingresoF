/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexo;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let seguir = 's';
	let contadorSalta = 0;
	let contadorBariloche = 0;
	let contadorCataratas = 0;
	let banderaPasajero = 1;
	let maximoPasajeros;
	let acumuladorPasajeros = 0;
	let banderaInvierno = 0;
	let contadorInvierno = 0;
	let promedioInvierno;
	
	do
	{
		sexo = prompt("Ingrese su sexo, 'f' para femenino y 'm' para masculino").toLowerCase();
		while(sexo != 'm' && sexo != 'f')
		{
			sexo = prompt("ERROR ese no es un sexo valido, reingrese su sexo").toLowerCase()
		}

		lugar = prompt("Ingrese un lugar , puede ser bariloche, cataratas o salta").toLowerCase();
		while(lugar != "cataratas" && lugar != "bariloche" && lugar != "salta")
		{
			lugar = prompt("ERROR, reingrese un lugar valido").toLowerCase();
		}

		temporada = prompt("Ingrese una temporada").toLowerCase();
		while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera")
		{
			temporada = prompt("ERROR, reingrese una temporada valida").toLowerCase();
		}

		cantidadPersonas = parseInt(prompt("ingrese la cantidad de personas que viajan"));
		while(isNaN(cantidadPersonas))
		{
			cantidadPersonas = parseInt(prompt("ERROR, reingrese la cantidad de personas que viajan"));
		}

		switch(lugar)
		{
			case "bariloche":
				contadorBariloche++;
				break;
			case "cataratas":
				contadorCataratas++;
				break;
			case "salta":
				contadorSalta++;
				break;	

		}
		if(cantidadPersonas > maximoPasajeros || banderaPasajero)
		{
			maximoPasajeros = cantidadPersonas;
			sexoMaximo = sexo;
			banderaPasajero = 0;
		}

		if(temporada == "invierno")
		{
			acumuladorPasajeros += cantidadPersonas;
			contadorInvierno++;
			banderaInvierno = 1;
		}

		seguir = prompt("Ingrese 's' para seguir ingresando estadias");

	}while(seguir == 's');

	if(contadorBariloche>contadorSalta && contadorBariloche > contadorCataratas)
	{
		console.log("El lugar mas visitado fue Bariloche");
	}
	else if(contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta)
	{
		console.log("El lugar mas visitado fue Cataratas");
	}
	else
	{
		console.log("El lugar mas visitado fue Salta");
	}

	console.log("El sexo del titular con mas pasajeros es: " + sexoMaximo);
	
	promedioInvierno = acumuladorPasajeros/contadorInvierno;
	console.log("El promedio de gente que viaja en invierno es de: " + promedioInvierno);

}
