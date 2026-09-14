function tema() {
    let tema = document.body
    tema.classList.toggle("dark-mode")
}


/*Telefone*/
// const inputTelefone = document.getElementById('telefone');
// inputTelefone.addEventListener('input', (evento) => {
//     let valor = evento.target.value;
//     valor = valor.replace(/\D/g, "");
//     if (valor.length > 0) {
//         valor = "(" + valor;
//     }
//     if (valor.length > 3) {
//         valor = valor.slice(0, 3) + ") " + valor.slice(3);
//     }
//     if (valor.length > 10) {

//         valor = valor.slice(0, 10) + "-" + valor.slice(10, 14);
//     } else if (valor.length > 6) {
//         valor = valor.slice(0, 9) + "-" + valor.slice(9);
//     }
//     evento.target.value = valor;
// });/ 