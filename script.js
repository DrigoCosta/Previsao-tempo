let chave = "e5329090c42963b9208b221935279360"

function exibir(dados){
    console.log(dados)
    document.querySelector(".loc").innerHTML = dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°"
    document.querySelector(".description").innerHTML = dados.weather[0].description
    document.querySelector(".umid").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".sens").innerHTML =  "Sensação: " + Math.floor(dados.main.feels_like) + "°"
    document.querySelector(".max").innerHTML =  "Temp max: " + Math.floor(dados.main.temp_max) + "°"
    document.querySelector(".min").innerHTML =  "Temp min: " + Math.floor(dados.main.temp_min) + "°"

    
}

async function buscarCidade(cidade) {
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=" + chave +
    "&lang=pt_br" + "&units=metric")
    .then(resposta => resposta.json())

    exibir(dados)
}

function pesquisa() {
    let cidade = document.querySelector(".city").value
    buscarCidade(cidade)
}