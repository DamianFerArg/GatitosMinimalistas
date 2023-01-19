do {
    alert("Bienvenido a los modelos de tarjeta")
    edad = prompt('Ingrese su edad');
    if (edad >= 18) {
        alert('Usted puede continuar');
    } else {
        alert('Prohibido el ingreso para menores de edad');
    }
}
while (edad < 18)

prompt("Como es su nombre?");

const tarjetas = [
    { nombre: "TarjetaNegra", precio: 200},
    { nombre: "TarjetaBlanca", precio: 200},
    { nombre: "TarjetaAzul", precio: 900},
    { nombre: "TarjetaNaranja", precio: 350},
    { nombre: "TarjetaMarron", precio: 2000},
    { nombre: "TarjetaRoja", precio: 450},
    { nombre: "TarjetaVioleta", precio: 1000},
]

let gasto = prompt ("Cuanto desea gastar?")

const filtrarPorPrecio = tarjetas.filter((elem) => elem.precio <= gasto )

console.log(filtrarPorPrecio)

