function clasePrimera() {
    let saymaName = prompt(`Ingresá tu nombre`);
    let numUnon = parseInt(prompt(`Ingresá un 1er número`));
    let numDoso = parseInt(prompt(`Ingresá un 2do número`));
    let numTress = parseInt(prompt(`Ingresá un 3er número`));
    console.log(saymaName);
    if ((isNaN(numUnon)) || (isNaN(numDoso)) || (isNaN(numTress))) {
        alert(`Hola ${saymaName}.\nIngresaste algún número inválido.`);
    } else {
        let resultado = (numUnon + numDoso + numTress) / 3;
        alert(`Hola ${saymaName}.\nLos números ingresados son ${numUnon}, ${numDoso} y ${numTress}.`)
        alert(`El promedio de estos números es ${resultado}.`)
    }
}
function claseSegunda() {
    let saymaName = prompt(`Ingresá tu nombre`);
    let numUnon = parseInt(prompt(`Ingresá un 1er número`));
    let numDoso = parseInt(prompt(`Ingresá un 2do número`));
    let numTress = parseInt(prompt(`Ingresá un 3er número`));
    console.log(saymaName);
    if ((isNaN(numUnon)) || (isNaN(numDoso)) || (isNaN(numTress))) {
        alert(`Hola ${saymaName}.\nNo seas pillo, no pongas letras, solo números.`);
    } else {
        let mySelect = parseInt(prompt(`Si querés conocer el promedio de los 3 números, ingresá 3, si querés el de los 2 primeros, 1, y el de los 2 últimos, ingresá 2`));
        if (isNaN(mySelect)) {
            alert(`Hola ${saymaName}.\nIngresaste una opción inválida. Ingresá 1, 2 o 3 en NÚMEROS.`);
        } else if ((mySelect >= 1) && (mySelect <= 3)) {
            switch (mySelect) {
                case 3:
                    resultado = (numUnon + numDoso + numTress) / 3;
                    alert(`Hola ${saymaName}.\nLos números ingresados son ${numUnon}, ${numDoso} y ${numTress}.`);
                    alert(`Elegiste ver el promedio de los 3 números así que te digo, es ${resultado}.`);
                    break;
                case 1:
                    resultado = (numUnon + numDoso) / 2;
                    alert(`Hola ${saymaName}.\nLos números ingresados son ${numUnon}, ${numDoso} y ${numTress}.`);
                    alert(`Elegiste ver el promedio de los 2 primeros números así que te digo, es ${resultado}.`);
                    break;
                case 2:
                    resultado = (numDoso + numTress) / 2;
                    alert(`Hola ${saymaName}.\nLos números ingresados son ${numUnon}, ${numDoso} y ${numTress}.`);
                    alert(`Elegiste ver el promedio de los 2 últimos números así que te digo, es ${resultado}.`);
                    break;
            }
        } else {
            alert(`Hola ${saymaName}.\nIngresaste un número de opción inválido, las opciones son 1, 2 o 3.`)
        }
    }
}

function claseTercera() {
    let numeroingresado;
    let numerocorregido = 0;
    let myValid = true;
    let tresVeces = 0;
    while ((myValid) && (tresVeces < 3)) {  //condición: la var myValid debe ser true (default) y el contador tresVeces debe ser menor a 3
        numeroingresado = parseInt(prompt(`Ingresá 3 nros. cualquiera`));

        if (Number(numeroingresado)) { //si es nan, no entra y pasa al else
            MyValid = true;
            tresVeces = tresVeces + 1;
            alert(`Ya ingresaste en la instancia nro ${tresVeces}.`)
        }
        else { //pide un nuevo número, que convertimos en el número ingresado actualizando el valor de la variable
            MyValid = false;
            alert(`Ese no es un número.`)
            numerocorregido = parseInt(prompt(`Ingresá un nro.`));
            numeroingresado = numerocorregido; //acá actualiza el valor de la variable que va a salir del ciclo cuando se cumpla la siguiente condición
            if (Number(numerocorregido)) {
                //si el dato que pedí corregir es un número, da true al validador y suma 1 al contador
                MyValid = true;
                tresVeces = tresVeces + 1;
                alert(`Ya vamos por la instancia ${tresVeces}.`)
            } else {
                alert(`Pero si serás, por favor te pedí 3 nros, NÚMEROS. Intentá de nuevo`) //sino, dice basta y vuelve a pedir que lo corrijas
            }
        }
    }
}


//funciones relacionadas clase 04 - desafío complementario)
function restar(num1, num2) {
    if (num1 > num2) {
        resta = num1 - num2
    } else {
        resta = num2 - num1;
    }
    return resta;
}
function noiguales(num1, num2) {
    let resultadonuevo = true;
    if (num1 == num2) {
        resultadonuevo = false;
    }
    return resultadonuevo;
}
function claseCuartafuncionesrel() {
    let pirUlo = prompt(`Decime tu nombre`);
    do {
        alert(`Ingresá 2 números y vamos a restar el menor al mayor.`);
        let num1 = parseInt(prompt(`Ingresá un 1er número`));
        let num2 = parseInt(prompt(`Ingresá un 2do número`));
        if ((isNaN(num1)) || (isNaN(num2))) {
            alert(`Hola ${pirUlo}.\nPor favor recordá ingresar solo números.`);
        } else {
            if (noiguales(num1, num2)) {
                let resultadonuevo = restar(num1, num2);
                alert(`Hola ${pirUlo}.\nEl resultado de la resta del nro menor al mayor es ${resultadonuevo}.`);
            } else {
                alert(`Hola ${pirUlo}.\nLos nros ingresados son iguales, por favor realizá los pasos de nuevo.`);
            }
        }
    }
    while (respuesta = prompt(`Ingrese 'y' para continuar o cualquier otra tecla para cancelar`) == "y");
}
//fin funciones relacionadas

