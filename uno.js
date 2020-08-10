/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let contadorMujeres = 0;
	let edadPromedio;
	let HombrePesado;
	let acumuladorEdad = 0;
	let pesoMaximo;
	let banderaPeso = 0;
	let banderaMujeres = 0;

	for(i = 0;i < 1; i++)
	{
		nombre = prompt("Ingrese su nombre");
		while(!(isNaN(nombre)))
		{
			nombre = prompt("ERORR no es un nombre, reingrese su nombre");
		}
		peso = parseInt(prompt("Ingrese su peso"));
		while((isNaN(peso)))
		{
			peso = parseInt(prompt("ERROR eso no es un peso, reingrese su peso"));
		}
		sexo = prompt("ingrese su sexo, 'm' para masculino y 'f' para femenino").toLowerCase();
		while(sexo != 'f' && sexo != 'm')
		{ 
            sexo = prompt("ERROR eso no es un sexo, reingrese su sexo, 'm' para masculino y 'f' para femenino").toLowerCase();
		}
		edad = parseInt(prompt("Ingrese su edad"));
		while((isNaN(edad)))
		{
			edad = parseInt(prompt("ERROR eso no es una edad, reingrese su edad"));
		}
		if(sexo == 'f')
		{
			contadorMujeres ++
			banderaMujeres = 1
		}
		console.log(contadorMujeres);
		acumuladorEdad += edad;
		if(sexo == 'm' )
		{
			if(peso > pesoMaximo || banderaPeso == 0)
			{
				pesoMaximo = peso
				banderaPeso = 1;
			}
		}
	}

	edadPromedio = acumuladorEdad/5;
	if(banderaMujeres == 1)
	{
	    console.log("la cantidad de mujeres es de: " + contadorMujeres);
	}
	else
	{
	    console.log("No se atendieron mujeres");
	}
	console.log("La edad promedio es: " + edadPromedio);
	if(banderaPeso == 1)
	{
		console.log("El hombre mas  pesado pesa: " + pesoMaximo);
	}
	else
	{
		console.log("No se atendieron hombres")
	}


}
