
let myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(e){
    e.preventDefault()

    let country = document.getElementById('country').value
    let url = "https://disease.sh/v3/covid-19/countries/" + country;
    /* let url = "https://disease.sh/v3/covid-19/countries?sort=cases/" + country; */
    covidData(url)
  })

async function covidData(url) {
  let response = await fetch(url)
  let data = await response.json();

  console.log(data);
  let divDeaths = document.querySelector('#deaths');
  divDeaths.innerHTML = " deaths: " + "  " + data.deaths;

  let divRecovered = document.querySelector('#recovered');
  divRecovered.innerHTML = " recovere: " + "  " + data.recovered;

  let divCases = document.querySelector('#cases');
  divCases.innerHTML = " Cases: " + "  " + data.cases;

  let bandera = (bandera) => {
    document.getElementById('bandera').src=bandera;
  }
  bandera(data.countryInfo.flag);

}