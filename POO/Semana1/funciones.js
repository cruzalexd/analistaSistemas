
function FingresarCiudad() {
  let bandera = false;
  let city=0;
  do {
    //bandera=false;
    city = prompt("Ingrese la ciudad: ")
    if(city.length==0){
      bandera = true;
      alert("El valor ingresado esta vacio, debe ingresar una cadena de texto no nula");
    }else if(city.trim()==''){//La funcion Trim quita los espacios iniciales de una palabra.
        bandera = true;
        alert("El valor ingresado solo tiene un espacio, debe ingresar una cadena de texto")
    }else if(!isNaN(city)){
        bandera = true;
        alert("El valor ingresado es un numero, debe ingresar una cadena de texto")
    }
    else{
      bandera=false;
    }    
  }while (bandera == true)
  return city;
}

function FingresarSexo() {
  let bandera = false;
  let sex=0;
  do {
    bandera=false;
    sex = prompt("Ingrese el sexo, datos admitidos 'H' o 'M': ").toUpperCase()
    if ((!isNaN(sex))||((sex !='H')&&(sex !='M'))) {
      bandera = true;
      alert(`El valor ingresado es ${sex}`)
      if(!isNaN(sex)){
        alert("El valor ingresado de sexo es un numero, debe ingresar 'H o M' ")    
      }else{
        alert("El valor ingresado no corresponde con los caracteres permitidos, debe ingresar 'H o M' ") 
      }
    }
  }while (bandera == true)
  return sex;
}

function FingresarEdad() {
  let bandera = false;
  let age=0;
  do {
    bandera=false;
    age = parseInt(prompt("Ingrese la edad, solo se admite datos numericos "))
    if ((isNaN(age))||(age<=0)||(age>100)) {
      bandera = true;
      //alert(`El valor ingresado es ${sex}`)
      alert(`El valor de la edad es ${age}`)
    } 
  }while (bandera == true)
  return age;
}

function FimprimirDatos(ciudad,sexo,edad){
  console.log(`La ciudad ingresada es ${ciudad}, el sexo es: ${sexo}, y la edad de la persona es ${edad}`)
}

function FcontadorEdad(edad, contadorEdad){
  contadorEdad=contadorEdad + edad;
  return contadorEdad;
}

function DecisionGenero(sexo){
  let flag=false;
  if (sexo=='H'){
    flag=true;
  }else {
    flag=false
  }
  return flag;
}/*Esta funcion se pudo haber oviado */

//Funciones para los datos de los hombres
function FcontadorEdadHombres(edad, acumuladorEdadHombres){
  acumuladorEdadHombres = acumuladorEdadHombres + edad;
  return acumuladorEdadHombres
}

function FcontadorHombresMayor21(edad, contadorHombresMayor21){
  let edadlimite=21;
  if(edad<edadlimite){
    contadorHombresMayor21+=1;
  }
  return contadorHombresMayor21;
}

function FcontadorHombres(contadorHombres){
  contadorHombres=contadorHombres + 1;
  return contadorHombres;
}

function FminimoEdadHombres(edad, minimoEdadHombres){
  if(edad<minimoEdadHombres){
    minimoEdadHombres=edad;
  }
  return minimoEdadHombres; 
}

//Funciones para las datos de las mujeres
function FcontadorEdadMujeres(edad, acumuladorEdadMujeres){
  acumuladorEdadMujeres = acumuladorEdadMujeres + edad;
  return acumuladorEdadMujeres
}

function FcontadorMujeresMenor21(edad, contadorMujeresMenor21){
  let edadlimite=21;
  if(edad<edadlimite){
    contadorMujeresMenor21+=1;
  }
  return contadorMujeresMenor21
}

function FcontadorMujeres(contadorMujeres){
  contadorMujeres=contadorMujeres + 1;
  return contadorMujeres;
}

function FmaximoEdadMujeres(edad, maximoEdadMujeres){
  if(edad>maximoEdadMujeres){
    maximoEdadMujeres=edad;
  }
  return maximoEdadMujeres; 
}

function FmostrarResultados(acumuladorEdad, acumuladorEdadMujeres, acumuladorEdadHombres, contadorMujeres, contadorHombres, maximoEdadMujeres, minimoEdadHombres, contadorMujeresMenor21, contadorHombresMayor21){
  let promedioGeneral=acumuladorEdad/(contadorHombres+contadorMujeres);
  let promedioEdadMujeres=acumuladorEdadMujeres/contadorMujeres;
  let promedioEdadHombres=acumuladorEdadHombres/contadorHombres;
  let porcentajeMujeresMenores=((contadorMujeresMenor21/contadorMujeres)*100).toFixed(2);
  let porcentajeHombresMayores=((contadorHombresMayor21/contadorHombres)*100).toFixed(2);
  console.log(`El contador de hombres mayores a 21 años es: ${contadorHombresMayor21}`)

  console.log(`El contador de Mujeres menores a 21 años es: ${contadorMujeresMenor21}`)

  alert(`El promedio de edad general es: ${promedioGeneral}, el promedio de edad de las mujeres es: ${promedioEdadMujeres}, el promedio de edad de los hombres es: ${promedioEdadHombres}, el porcentajeMujeresMenores es: ${porcentajeMujeresMenores}% , el porcentajeHombresMayores es: ${porcentajeHombresMayores}%, la mayor edad ingresada de las mujeres ${maximoEdadMujeres}, la minima edad ingresada de los hombres es ${minimoEdadHombres}`)

//console.log(`El promedio de edad general es: ${promedioGeneral}, el promedio de edad de las mujeres es: ${promedioEdadMujeres}, el promedio de edad de los hombres es: ${promedioEdadHombres}, el porcentajeMujeresMenores es: ${porcentajeMujeresMenores}, el porcentajeHombresMayores es: ${porcentajeHombresMayores}, la mayor edad ingresada de las mujeres ${maximoEdadMujeres}, la minima edad ingresada de los hombres es ${minimoEdadHombres}`)  

}