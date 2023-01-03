do {
    edad = prompt('Ingrese su edad');
    if (edad >= 18) {
        alert('Usted puede continuar');
    } else {
        alert('Prohibido el ingreso para menores de edad');
    }
}
while (edad < 18)

const tarjetaBarata = 200
const tarjetaNoTanBarata = 500
const tarjetaPipicucu = 900


let Nombre = prompt("Como es su nombre?");

do {
    gasto = prompt(Nombre + ", cuanto desea gastar para su tarjeta?");
    if (gasto >= tarjetaPipicucu) {
        alert("Le recomendamos el plan Pipícucú");
    }

    else if (gasto >= tarjetaNoTanBarata) {
        alert("Le recomendamos el plan no tan barato");
    }

    else if (gasto >= tarjetaBarata) {
        alert("Le recomendamos el plan barato");
    }

    else if (gasto < tarjetaBarata) {
        alert("No cubre el costo de nuestros planes");
    }

} while (gasto < 300)