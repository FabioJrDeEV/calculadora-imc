const nome = document.querySelector("#nome-text");
const altura = document.querySelector("#altura-number");
const peso = document.querySelector("#peso-number");
const botao = document.querySelector("#button");
const renderizador = document.querySelector("#renderiza-text");

    botao.addEventListener("click", (event) => {
        event.preventDefault();
        if(altura.value && peso.value <= 0) {
            return renderizador.innerHTML = "Altura e peso inválidos."
        }

        const imc = peso.value / (altura.value * altura.value);

        renderizador.innerHTML = `${nome.value} seu IMC é ${imc.toFixed(2)}`

        nome.innerHTML = ""
        peso.innerHTML = ""
        altura.innerHTML = ""
    })

