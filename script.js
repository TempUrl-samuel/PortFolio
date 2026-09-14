function tema() {
    let tema = document.body
    tema.classList.toggle("dark-mode")
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

function gmailRepair() {
    var gmail = document.getElementById("endereco").value
    document.getElementById("endereco").value = gmail
    var googol = document.getElementById("endereco").value

    if (googol != "@") {
        if (googol != undefined) {
            document.getElementById("endereco").value = "@" + googol;
        }
    }
}

function cep() {
    var cepCorreto = document.getElementById("CEP").value
    if (cepCorreto[2] != ".") {
        if (cepCorreto[2] != undefined) {
            document.getElementById("cep").value = cepCorreto.slice(0, 2) + "." + cep_formatado[2];
        }
    }
    if (cepCorreto[6] != "-") {
        if (cepCorreto[6] != undefined) {
            document.getElementById("cep").value = cepCorreto.slice(0, 6) + "-" + cep_formatado[6]
        }
    }

}




function parabens() {
    alert("Parabens, tudo foi preencido perfeitamente")
}