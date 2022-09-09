// DECLARACION DE CONSTANTES

const pizzaForm = document.getElementById("pizzaForm");
const pizzaInput = document.getElementById("pizzaId");
const errorText = document.querySelector("small");
const pizzaName = document.getElementById("nombre");
const pizzaPrice = document.getElementById("precio");
const searchPizza = document.getElementById("buscarPizza");

const Pizzas = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: ["Albahaca", "Cherry", "Mozarella"],
        precio: "$570",

    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["Muzzarela", "Aceitunas", "Morron", "Huevo"],
        precio: "$900",
    },
    {
        id: 3,
        nombre: "Cantimpalo",
        ingredientes: ["Cantimpalo", "Salsa", "Muzarella"],
        precio: "$800",
    },
    {
        id: 4,
        nombre: "Cuatro Quesos",
        ingredientes: ["Muzzarela", "Roquefort", "Cheddar", "Queso"],
        precio: "$1000",
    },
    {
        id: 5,
        nombre: "Descontrolada",
        ingredientes: ["Morrones", "Cheddar", "Muzarela", "Bacon", "Huevo"],
        precio: "$1200",
    },
    {
        id: 6,
        nombre: "Americana",
        ingredientes: ["Queso", "Salsa", "Huevo", "Cheddar", "Bacon", "Doritos"],
        precio: "$1800",
    },
    {
        id: 7,
        nombre: "Veggie",
        ingredientes: ["Masa Madre", "Brocoli", "Humus"],
        precio: "$2000",
    },
];


// EVENTOS Y FUNCIONES

pizzaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    getPizza(pizzaInput.value);
});

const getPizza = (idInput) => {
    if (idInput > 0 && idInput <= Pizzas.length) {
        errorText.classList.remove("error");
        errorText.classList.add("succes");
        renderPizza(idInput);
    } else {
        errorText.classList.remove("succes");
        errorText.classList.add("error");
    }
};

const renderPizza = (idInput) => {
    const { nombre, precio } = Pizzas[idInput - 1];
    pizzaName.textContent = nombre;
    pizzaPrice.textContent = precio;
};