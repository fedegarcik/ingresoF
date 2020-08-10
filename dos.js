/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/
function mostrar()
{
  let marca;
  let precio;
  let peso;
  let tipo;
  let acumuladorPeso = 0;
  let liquidoMasCaro;
  let solidoMasBarato;
  let banderaSolido = 0;
  let banderaLiquido = 0;
  seguir = 's'

  do
  {
    marca = prompt("ingrese la marca");
    while(!(isNaN(marca)))
    {
      marca = prompt("ERROR eso no es una marca valida, reingrese la marca");
    }
    
    precio = parseInt(prompt("Ingrese el precio"));
    while(isNaN(precio))
    {
      precio = parseInt(prompt("ERROR eso no es un precio valido, reingrese el precio"));
    }
    
    peso = parseInt(prompt("Ingrese el peso"));
    while(isNaN(peso))
    {
      peso = parseInt(prompt("ERROR eso no es un precio valido, reingrese el peso"));
    }

    tipo = prompt("Ingrese el tipo").toLowerCase();
    while(tipo != "solido" && tipo != "liquido")
    {
      tipo = prompt("ERROR ese no es un tipo valido , reingrese el tipo").toLowerCase();
    }

    acumuladorPeso += peso;
    if(tipo == "liquido")
    {
      if(precio > liquidoMasCaro || banderaLiquido == 0)
      {
        liquidoMasCaro = precio;
        banderaLiquido = 1;
      }
    }

    if(tipo == "solido")
    {
      if( precio < solidoMasBarato || banderaSolido == 0)
      {
        solidoMasBarato = precio;
        banderaSolido = 1;
      }
    }
    
    respuesta = prompt("Si desea seguir ingresando productos ingrese 's'");
    
  }while(respuesta =='s');

  console.log("El peso total de la compra es de: " + acumuladorPeso);
  if(banderaLiquido == 1){
    console.log("El liquido mas caro tiene un precio de: " + liquidoMasCaro)
  }
  else
  {
    console.log("no se ingreso ningun liquido");
  }
  if(banderaSolido == 1)
  {
    console.log("El solido mas barato tiene un precio de: " + solidoMasBarato);
  }
  else
  {
    console.log("no se ingreso ningun solido");
  }
}