/*Se recogen los siguientes datos para una encuesta: ciudad, sexo (H o M) y edad. Se desea saber:

a) Promedio de edad general
b) Promedio de la edad de las mujeres.
c) Promedio de la edad de los hombres.
d) Porcentaje de mujeres menores a 21 años.
e) Porcentaje de hombres mayores a 21 años.
f) La mayor edad ingresada de las mujeres.
g) La menor edad ingresada de los hombres

*/

let ciudad =0;
let sexo=0;
let edad=0;
let acumuladorEdad=0;
let acumuladorEdadMujeres = 0;
let acumuladorEdadHombres = 0;
let contadorMujeres = 0;
let contadorHombres = 0;
let maximoEdadMujeres = 0;
let minimoEdadHombres = 200;
let contadorMujeresMenor21=0;
let contadorHombresMayor21=0;

do {
  ciudad=FingresarCiudad();
  sexo=FingresarSexo();
  edad=FingresarEdad();
  FimprimirDatos(ciudad, sexo, edad);
  acumuladorEdad=FcontadorEdad(edad, acumuladorEdad);
  if(DecisionGenero(sexo)){
    acumuladorEdadHombres=FcontadorEdadHombres(edad, acumuladorEdadHombres)
    contadorHombres=FcontadorHombres(contadorHombres);
    minimoEdadHombres=FminimoEdadHombres(edad, minimoEdadHombres)
    contadorHombresMayor21=FcontadorHombresMayor21(edad, contadorHombresMayor21)
  }else{
    acumuladorEdadMujeres=FcontadorEdadMujeres(edad, acumuladorEdadMujeres)
    contadorMujeres=FcontadorMujeres(contadorMujeres);
    maximoEdadMujeres=FmaximoEdadMujeres(edad, maximoEdadMujeres)
    contadorMujeresMenor21=FcontadorMujeresMenor21(edad, contadorMujeresMenor21)
  }
  
} while (confirm("Deseas ingresar otra persona?"))
alert("Los resultados obtenidos son:")
FmostrarResultados(acumuladorEdad, acumuladorEdadMujeres, acumuladorEdadHombres, contadorMujeres, contadorHombres, maximoEdadMujeres, minimoEdadHombres, contadorMujeresMenor21, contadorHombresMayor21)
