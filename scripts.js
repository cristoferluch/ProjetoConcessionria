
const carros = [
	{
		id: 0,
		carImg:"./img/fiat1.jpg",
		carName: "FIAT 147",
		carBrand: "FIAT",
		carDescription: "1.3 GL 8V GASOLINA 2P MANUAL",
		carPrice: "19.900",
		carKM: "4.000",
		carDate: "1979/1979",
		carCity: "São Bernardo do Campo - SP"
	},
	{
		id: 1,
		carImg:"./img/passat.jpg",
		carName: "VOLKSWAGEN PASSAT",
		carBrand: "VOLKSWAGEN",
		carDescription: "1.8 GTS POINTER 8V ÁLCOOL 2P MANUAL",
		carPrice: "55.000",
		carKM: "120.000",
		carDate: "1986/1987",
		carCity: "São Caetano do Sul - SP"
	},
	{
		id: 2,
		carImg:"./img/polo.jpg",
		carName: "VOLKSWAGEN POLO",
		carBrand: "VOLKSWAGEN",
		carDescription: "1.4 250 TSI GTS AUTOMÁTICO",
		carPrice: "134.90",
		carKM: "18.000",
		carDate: "2020/2021",
		carCity: "Vinhedo - SP"
	},
	{
		id: 3,
		carImg:"./img/troller.jpg",
		carName: "TROLLER T4",
		carBrand: "TROLLER",
		carDescription: "2.8 TETO RÍGIDO 12V TURBO INTERCOOLER DIESEL 2P MANUAL",
		carPrice: "92.990",
		carKM: "93.000",
		carDate: "2005/2005",
		carCity: "Caxias do Sul - RS"
	},
	{
		id: 4,
		carImg:"./img/bmwx1.jpg",
		carName: "BMW X1",
		carBrand: "BMW",
		carDescription: "2.0 16V TURBO ACTIVEFLEX SDRIVE20I 4P AUTOMÁTICO",
		carPrice: "167.900",
		carKM: "72.000",
		carDate: "2017/2018",
		carCity: "Goiânia - GO"
	},
	{
		id: 5,
		carImg:"./img/bmw330i.jpg",
		carName: "BMW 330i",
		carBrand: "BMW",
		carDescription: "2.0 16V TURBO GASOLINA M SPORT AUTOMÁTICO",
		carPrice: "284.890",
		carKM: "47.000",
		carDate: "2019/2019",
		carCity: "São Paulo - SP"
	},
	{
		id: 6,
		carImg:"./img/bmwz4.jpg",
		carName: "BMW Z4",
		carBrand: "BMW",
		carDescription: "2.0 16V TURBO GASOLINA SDRIVE20I AUTOMÁTICO",
		carPrice: "220.000",
		carKM: "46.000",
		carDate: "2013/2013",
		carCity: "Ribeirão Preto - SP"
	}
	
]

var carsByBrand = []
var carPesquisa = []
var carObject = []

inicializarLoja = () => {
	document.querySelector(".resultado").innerHTML = ""
	var car = document.querySelector('#content')
	car.innerHTML = ""

	carros.map((cars)=>{
		car.innerHTML += `

		<div class="car">
		<div class="imgCar">
					<img class="img" src="`+cars.carImg+`">			
				</div>
				<div class="carName"><h3>`+cars.carName+`</h3></div>
				
				<div class="carInformation">
					<p class="carInf">`+cars.carDescription+`</p>
					<h3 class="carPrice">R$ `+cars.carPrice+`</h3>
				</div>
	
				<div class="carKmw">
					<div class="date"><p>`+cars.carDate+`</p></div>
					<div class="km"><p>`+cars.carKM+` KM</p></div>
				</div>

				<div class="carRodape">
					<p class="cidade">`+cars.carCity+`</p>
				</div>
			</div>
	`	
		})
}

inicializarLoja()

function pesquisarCarro(){
	
	let resultado = document.querySelector(".resultado")
	let carName = document.querySelector("#campoPesquisa").value.toUpperCase()
	carros.sort(function(a, b){return a.id - b.id});
	
	document.querySelector("#filterBrand").selectedIndex = 0
	document.querySelector("#mySelect").selectedIndex = 0

	if(carName == ""){
		alert("Insira um valor valido!")
	} else {
		for(i in carros){
			if(carros[i].carName.indexOf(carName) >= 0){
				carPesquisa.push(carros[i])
			} 
		}
	}

		updateVitrine(carPesquisa)
		limparCampos()	
}

function filterByPrice(){

	if(carObject == ""){
		carObject = carros
	}

	let opc = document.getElementById("mySelect").value
	
	switch(opc){
		case "lastYear":
		carObject.sort(function(a, b){return b.carDate.substring(0,4) - a.carDate.substring(0,4)});
		break
		case "hightPrice":
		carObject.sort(function(a, b){return b.carPrice - a.carPrice});
		break
		case "lowPrice":
		carObject.sort(function(a, b){return a.carPrice - b.carPrice});
		break
		case "lowKM":
		carObject.sort(function(a, b){return a.carKM - b.carKM});
		break
	}

	updateVitrine(carObject)

}

function filterByBrand(){

	document.querySelector(".resultado").innerHTML = ""
	let opc = document.querySelector("#filterBrand").value
	

	for(i in carros){
		if(opc == carros[i].carBrand){
			carsByBrand.push(carros[i])
		}
	}
	
	updateVitrine(carsByBrand)
}

function updateVitrine(carFilter){

	if(carFilter.length <= 0){
		noResults()
	}

	carObject = carFilter	
	vitrine = document.querySelector("#content")
	vitrine.innerHTML = ""

	for(i in carObject){
		vitrine.innerHTML += `
		<div class="car">
		<div class="imgCar">
					<img class="img" src="`+carObject[i].carImg+`">			
				</div>
				<div class="carName"><h3>`+carObject[i].carName+`</h3></div>
				
				<div class="carInformation">
					<p class="carInf">`+carObject[i].carDescription+`</p>
					<h3 class="carPrice">R$ `+carObject[i].carPrice+`</h3>
				</div>
	
				<div class="carKmw">
					<div class="date"><p>`+carObject[i].carDate+`</p></div>
					<div class="km"><p>`+carObject[i].carKM+` KM</p></div>
				</div>

				<div class="carRodape">
					<p class="cidade">`+carObject[i].carCity+`</p>
				</div>
			</div>
	`
		}

		carsByBrand = []
}


function noResults(){
	
	let vitrine = document.querySelector("#content")
	vitrine.innerHTML = ""
	let resultado = document.querySelector(".resultado")

	resultado.innerHTML = `
		Não encontramos este termo, verifique a ortografia  
		<input type="button" name="" value="Resetar Pesquisa" id="btcReset" onclick="reset()">`
}


function reset(){
	updateVitrine(carros)
	document.querySelector(".resultado").innerHTML = ""
}

function limparCampos(){
	document.querySelector("#campoPesquisa").value = ""
	
}

