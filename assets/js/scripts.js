// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

const apiKey = "65799ec147a14a6f40fbc1171ecd6f9c";

function atualizarTela(dados) {
    console.log(dados);
    const cidadeElement = document.querySelector(".cidade");
    cidadeElement.innerHTML = "Tempo em " + dados.name;

    const temperaturaElement = document.querySelector(".temp");
    temperaturaElement.innerHTML = Math.floor(dados.main.temp) + "°C";

    const descricaoElement = document.querySelector(".descricao");
    descricaoElement.innerHTML = dados.weather[0].description;

    const iconeElement = document.querySelector(".icone");
    iconeElement.src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`);
        const dados = await response.json();
        atualizarTela(dados);
    } catch (error) {
        console.error("Ocorreu um erro ao buscar os dados da cidade:", error);
    }
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}