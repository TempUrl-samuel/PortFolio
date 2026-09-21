

document.documentElement.classList.add("js")

document.querySelectorAll(".skill-item").forEach(function (item) {
    function alternar() {
        let aberto = item.classList.toggle("aberto")
        item.setAttribute("aria-expanded", aberto)
    }

    item.addEventListener("click", alternar)
    item.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            alternar()
        }
    })
})

const glow = document.getElementById("cursor-glow")
let glowX = innerWidth / 2
let glowY = innerHeight / 2
let alvoX = glowX
let alvoY = glowY

document.addEventListener("mousemove", function (e) {
    alvoX = e.clientX
    alvoY = e.clientY
    glow.classList.add("visivel")
})

document.addEventListener("mouseleave", function () {
    glow.classList.remove("visivel")
})

function animarGlow() {
    glowX += (alvoX - glowX) * 0.15
    glowY += (alvoY - glowY) * 0.15
    glow.style.transform =
        "translate(" + (glowX - 50) + "px, " + (glowY - 50) + "px)"
    requestAnimationFrame(animarGlow)
}
animarGlow()

function tema() {
    let tema = document.body
    tema.classList.toggle("dark-mode")

    let btn = document.getElementById("botao-tema")
    btn.classList.remove("girar")
    void btn.offsetWidth
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

/*GSAP SCROLLTRIGGER*/
gsap.registerPlugin(ScrollTrigger);

(() => {
    gsap.utils.toArray(".scripting-text").forEach((element) => {
      const texto = document.getElementsByClassName("scripting-text");
      const orgText = element.textContent;
      const replacedText = orgText.replace(/[^]/g, "*");
      element.textContent = replacedText;
    gsap.to(texto,{
      text: orgText,
      scrollTrigger :{
        trigger: "#Socials",
        start: "center center",
        end: "bottom top",
        scrub:0.8,

      }
    })
      // ScrollTrigger.create({
      //   trigger: element,
      //   start: "center center+=100",
      //   end: "center center-=100",
      //   onUpdate: (self) => {
      //     const pos = parseInt(orgTextLen * self.progress);
      //     const str = orgText.substring(pos, 0) + replacedText.substring(pos);
      //     element.textContent = str;
      //   },
      //   markers: true
      // });
         
  });
});

// gsap.registerPlugin(ScrollTrigger);

// (() => {
//   gsap.utils.toArray(".scripting-text").forEach((element) => {
//     const orgText = element.textContent;
//     const orgTextLen = orgText.length;
//     const replacedText = orgText.replace(/[^ ]/g, "*");
    
//     element.textContent = replacedText;

//     ScrollTrigger.create({
//       trigger: element,
//       start: "center center+=100",
//       end: "center center-=100",
//       onUpdate: (self) => {
//         const pos = parseInt(orgTextLen * self.progress);
//         const str = orgText.substring(pos, 0) + replacedText.substring(pos);
//         element.textContent = str;
//       },
//       markers: true // Altere para false em produção
//     });
//   });
// })();