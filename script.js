function tema() {
    let tema = document.body
    tema.classList.toggle("dark-mode")

    let btn = document.getElementById("botao-tema")
    btn.classList.remove("girar")
    void btn.offsetWidth // força o navegador a reiniciar a animação
    btn.classList.add("girar")
}

function phonehelper() {
    var tel = document.getElementById("telefone").value
    tel = tel.slice(0, 14)
    document.getElementById("telefone").value = tel
    tel = document.getElementById("telefone").value.slice(0, 10)

    var phonemated = document.getElementById("telefone").value

    if (phonemated[0] != "(") {
        if (phonemated[0] != undefined) {
            document.getElementById("telefone").value = "(" + phonemated[0];
        }
    }

    if (phonemated[3] != ")") {
        if (phonemated[3] != undefined) {
            document.getElementById("telefone").value = phonemated.slice(0, 3) + ")" + phonemated[3]
        }
    }

    if (phonemated[9] != "-") {
        if (phonemated[9] != undefined) {
            document.getElementById("telefone").value = phonemated.slice(0, 9) + "-" + phonemated[9]
        }
    }
}

function cep() {
    var cepCorreto = document.getElementById("CEP").value
    document.getElementById("CEP").value = cepCorreto
    if (cepCorreto[2] != ".") {
        if (cepCorreto[2] != undefined) {
            document.getElementById("CEP").value = cepCorreto.slice(0, 2) + "." + cepCorreto[2]
        }
    }
    if (cepCorreto[6] != "-") {
        if (cepCorreto[6] != undefined) {
            document.getElementById("CEP").value = cepCorreto.slice(0, 6) + "-" + cepCorreto[6]
        }
    }

}

function cepeefe() {
    var CPF = document.getElementById("cpf").value
    document.getElementById("cpf").value = CPF

    if (CPF[3] != ".") {
        if (CPF[3] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 3) + "." + CPF[3]
        }
    }
    if (CPF[7] != ".") {
        if (CPF[7] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 7) + "." + CPF[7]
        }
    }
    if (CPF[11] != "-") {
        if (CPF[11] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 11) + "-" + CPF[11]
        }
    }
}

function ceenipejota() {
    var cnpj = document.getElementById("cnpj").value
    document.getElementById("cnpj").value = cnpj

    if (CPF[2] != ".") {
        if (CPF[2] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 2) + "." + CPF[2]
        }
    }
    if (CPF[6] != ".") {
        if (CPF[6] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 6) + "." + CPF[6]
        }
    }
    if (CPF[10] != "-") {
        if (CPF[10] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 10) + "-" + CPF[10]
        }
    }
    
    if (CPF[10] != "-") {
        if (CPF[10] != undefined) {
            document.getElementById("cpf").value = CPF.slice(0, 10) + "-" + CPF[10]
        }
    }
}

function parabens() {
    alert("Parabens, tudo foi preencido perfeitamente")
}