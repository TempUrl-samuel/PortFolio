function tema() {
    let tema = document.body
    tema.classList.toggle("dark-mode")
    let bgBtn = document.body.getElementsById("botao-tema")
    bgBtn.style.backgroundColor = 'rgba(26, 117, 159, 1)'
}