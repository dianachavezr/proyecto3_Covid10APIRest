//CODIGO PARA PONER LA FECHA ACTUAL TRACKER2


date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("date").innerHTML = "Updated Today:" + month + "/" + day + "/" + year;



// Add active class to the current button (highlight it)****************************
let icono = document.getElementById("nav");
let btns = icono.getElementsByClassName("navbar");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//FUNCIONALIDAD CAJA parteMediaIzq**************************************************

/*fetch("https://disease.sh/v3/covid-19/countries/")
.then(function(res){
 // console.log(res);
  return res.json();
})
.then(function(data){
//  console.log(data)
  initialize(data);
})
.catch(function(error){
 console.log("error"+ error)
})*/


//GLOBAL VARIABLE
let countries;//Contendra toda la data que se trae
const countriesList = document.getElementById("countries")


//EVENT LISTENER PARA IR CAMBIADO LA INFO CADA VEZ QUE SE LLAME UN NUEVO PAIS

/*countriesList.addEventListener("change", function(event){
  displayCountryInfo(event.target.value)
});*/

//OPCION CON FUNCION FLECHA
//countriesList.addEventListener("change", event =>displayCountryInfo(event.target.value));


//OPCION NOMBRANDO LA LISTENER FUNCTION
countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event){
  displayCountryInfo(event.target.value);
}

fetch("https://disease.sh/v3/covid-19/countries/")
.then(res => res.json())
.then (data => initialize(data))
//.catch(err => console.log("error"+ err));

function initialize(countriesData) {
  //console.log(countriesData)
  countries = countriesData;
  
 let options = "";

    for(let i=0; i < countries.length; i++){
    options += `<option value="${countries[i].countryInfo.iso3}">${countries[i].country}</option>`
  }    
  //document.getElementById("countries").innerHTML = options;
  //document.querySelector("#countries").innerHTML = options;

  countries.forEach(country => options += `<option value="${country.countryInfo.iso3}">${country.country}</option>`)
  countriesList.innerHTML = options;
  console.log(countriesList)

  displayCountryInfo("FRA")
}
 function displayCountryInfo(countryByIso3){

    const countryData = countries.find(country => country.countryInfo.iso3 === countryByIso3);
    document.getElementById("cases").innerHTML = countryData.cases
    document.getElementById("deaths").innerHTML = countryData.deaths
    document.getElementById("recovered").innerHTML = countryData.recovered
    document.getElementById("active").innerHTML = countryData.active
    document.getElementById("todayCases").innerHTML = countryData.todayCases
    document.getElementById("todayDeaths").innerHTML = countryData.todayDeaths
    console.log(countryData)
  }

  /*
  COMO CONCATENAR:......................

  console.log("capital of" + countries[0].country + " is " + countries[0].cases);
  console.log(`capital of ${countries[0].country} is ${countries[0].cases}`)*/

/* Le permite al console log traer la data dandole un tiempo de 500mlseg.
setTimeout(()=>{
  console.log(countries)
}, 500);*/


//TOTAL CASOS EN EL MUNDO:

fetch("https://disease.sh/v3/covid-19/all")
.then(response => response.json())
.then(data => mostrarDataAll(data))
.catch(error => console.log(error))

const mostrarDataAll = (data) => {
    console.log(data)

    //TEMPLATE STRING PARA TRAER LOS DATOS
    let body = ''
        body += `
               <div id="One">
                <h3>Total Case</h3>
                <button> +${data.todayCases}</button>
                <p>${data.cases}</p>
              </div>
              <div id="Two">
                <h3>Active Case</h3>
                <p>${data.active}</p>
              </div>
              <div id="Three">
                <h3>Recovered Case</h3>
                <button>+${data.todayRecovered}</button>
                <p>${data.recovered}</p>
              </div>
              <div id="Four">
                <h3>Deaths Case</h3>
                <button>+${data.todayDeaths}</button>
                <p>+${data.deaths}</p>
              </div>

                `
    document.getElementById('sidebar').innerHTML = body
}


//TOTAL CASOS EN EL MUNDO - SECTION main- parteInferior**********************

fetch("https://disease.sh/v3/covid-19/all")
.then(response => response.json())
.then(data => mostrarDataAll2(data))
.catch(error => console.log(error))

const mostrarDataAll2 = (data) => {
  console.log(data)

let body = ''
        body += `
               <div id="One1">
               <img src="./images/icons/covid-defult.svg" style="width: 50px;">
					     <h3>Total Confirmed</h3><br>
					      <p>${data.cases}</p>
			        	</div>

                <div id="Two1">
                <img src="./images/icons/covid-green.svg" style="width: 50px;">
                <h3>Total Recovered</h3>
                <p>${data.recovered}</p>
                </div>

                <div id="Three1">
                <img src="./images/icons/covid-red.svg" style="width: 50px;">
                <h3>Total Deaths</h3>
                <p>${data.deaths}</p>
                </div>

                <div id="Four1">
                <img src="./images/icons/covid-redark.svg" style="width: 50px;">
                <h3>New Deaths</h3>
                <p>${data.todayDeaths}</p>
                </div>

                `
    document.getElementById('parteInferior').innerHTML = body
}



//TOP 10 COUNTRY************************************************


const countries2 = document.querySelector('#Five');
/* const cases = document.querySelector(".cases"); */

fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
.then(response => response.json())

.then(data => {
  const limit = 10;
  let datas = data.slice(0, limit)
    datas.map(dat => {
    countries2.innerHTML +=

                      `<div>
                        <img src="${dat.countryInfo.flag}" >
                        <h5>${dat.country}</h5>
                        <p>${dat.cases}</p>
                      </div>                      `

  });
});








