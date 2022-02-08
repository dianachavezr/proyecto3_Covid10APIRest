/*ACTIVE BUTTONS*********************************

let parteMedia1 = document.getElementById("parteMedia1");
let btns1 = parteMedia1.getElementsByClassName("btnsTracker5");

for (let i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function() {
  let current1 = document.getElementsByClassName("active");
  current1[0].className = current1[0].className.replace(" active", "");
  this.className += " active";
  });
}*/



//TRACKER5 **************************************************

/*INFO USA*/
const infoUsa = document.getElementById('parteMediaIzqTracker5')
const usaBtn = document.getElementById('usaBtn')

usaBtn.addEventListener('click', getUsaInfo)

function getUsaInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/usa")
  .then(res => res.json())
  .then (data => {
    infoUsa.innerHTML =  
    
                  `
                  <div>
                  <<h2>USA</h2>
                  </div>
                  <div id="chd1">
                  <h3>Total Cases</h3>
                  <hr>
                  <p>${data.cases}</p>
                  <img src="./images/icons/covid-defult.svg">
                  </div>
                  
                  <div id="chd2">
                  <h3>Total Deaths</h3>
                  <hr>
                  <p id="deaths">${data.deaths}</p>
                  <img src="./images/icons/covid-red.svg">
                </div>

                <div id="chd3">
                  <h3>Total Recovered</h3>
                  <hr>
                  <p id="recovered">${data.recovered}</p>
                  <img src="./images/icons/covid-green.svg">
                </div>

                <div id="chd4">
                  <h3>Total Active</h3>
                  <hr>
                  <p id="active">${data.active}</p>
                  <img src="./images/icons/covid-blue.svg">
                </div>

                <div id="chd5">
                  <h3>New Cases</h3>
                  <hr>
                  <p id="todayCases">${data.todayCases}</p>
                  <img src="./images/icons/covid-orange.svg">
                </div>

                <div id="chd6">
                  <h3>Today Deaths</h3>
                  <hr>
                  <p id="todayDeaths">${data.todayDeaths}</p>
                  <div>
                  <img src="./images/icons/covid-redark.svg">
                </div>        
                   `
  })
} 

/*SPAIN INFO***********************************/

const infoSpain = document.getElementById('parteMediaIzqTracker5')
const spainBtn = document.getElementById('spainBtn')

spainBtn.addEventListener('click', getSpainInfo)

function getSpainInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/spain")
  .then(res => res.json())
  .then (data => {
    infoSpain.innerHTML =  
    
                  `
                  <div>
                  <<h2>Spain</h2>
                  </div>
                          
                    <div id="chd1">
                    <h3>Total Cases</h3>
                    <hr>
                    <p>${data.cases}</p>
                    <img src="./images/icons/covid-defult.svg">
                    </div>
                    
                    <div id="chd2">
                    <h3>Total Deaths</h3>
                    <hr>
                    <p id="deaths">${data.deaths}</p>
                    <img src="./images/icons/covid-red.svg">
                  </div>

                  <div id="chd3">
                    <h3>Total Recovered</h3>
                    <hr>
                    <p id="recovered">${data.recovered}</p>
                    <img src="./images/icons/covid-green.svg">
                  </div>

                  <div id="chd4">
                    <h3>Total Active</h3>
                    <hr>
                    <p id="active">${data.active}</p>
                    <img src="./images/icons/covid-blue.svg">
                  </div>

                  <div id="chd5">
                    <h3>New Cases</h3>
                    <hr>
                    <p id="todayCases">${data.todayCases}</p>
                    <img src="./images/icons/covid-orange.svg">
                  </div>

                  <div id="chd6">
                    <h3>Today Deaths</h3>
                    <hr>
                    <p id="todayDeaths">${data.todayDeaths}</p>
                    <div>
                    <img src="./images/icons/covid-redark.svg">
                  </div>            			
                          `  
  })
} 

/*ITALY INFO***********************************/

const infoItaly = document.getElementById('parteMediaIzqTracker5')
const italyBtn = document.getElementById('italyBtn')

italyBtn.addEventListener('click', getItalyInfo)

function getItalyInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/italy")
  .then(res => res.json())
  .then (data => {
    infoItaly.innerHTML =  
    
                  `
                      <div>
                      <<h2>Italy</h2>
                      </div>

                      <div id="chd1">
                      <h3>Total Cases</h3>
                      <hr>
                      <p>${data.cases}</p>
                      <img src="./images/icons/covid-defult.svg">
                      </div>
                      
                      <div id="chd2">
                      <h3>Total Deaths</h3>
                      <hr>
                      <p id="deaths">${data.deaths}</p>
                      <img src="./images/icons/covid-red.svg">
                    </div>

                    <div id="chd3">
                      <h3>Total Recovered</h3>
                      <hr>
                      <p id="recovered">${data.recovered}</p>
                      <img src="./images/icons/covid-green.svg">
                    </div>

                    <div id="chd4">
                      <h3>Total Active</h3>
                      <hr>
                      <p id="active">${data.active}</p>
                      <img src="./images/icons/covid-blue.svg">
                    </div>

                    <div id="chd5">
                      <h3>New Cases</h3>
                      <hr>
                      <p id="todayCases">${data.todayCases}</p>
                      <img src="./images/icons/covid-orange.svg">
                    </div>

                    <div id="chd6">
                      <h3>Today Deaths</h3>
                      <hr>
                      <p id="todayDeaths">${data.todayDeaths}</p>
                      <div>
                      <img src="./images/icons/covid-redark.svg">
                    </div>            			
                            `  
  })
} 




/*INDIA INFO***********************************/

const infoIndia = document.getElementById('parteMediaIzqTracker5')
const indiaBtn = document.getElementById('indiaBtn')

indiaBtn.addEventListener('click', getIndiaInfo)

function getIndiaInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/india")
  .then(res => res.json())
  .then (data => {
    infoIndia.innerHTML =  
    
                  `
                      <div>
                      <<h2>India</h2>
                      </div>

                      <div id="chd1">
                      <h3>Total Cases</h3>
                      <hr>
                      <p>${data.cases}</p>
                      <img src="./images/icons/covid-defult.svg">
                      </div>
                      
                      <div id="chd2">
                      <h3>Total Deaths</h3>
                      <hr>
                      <p id="deaths">${data.deaths}</p>
                      <img src="./images/icons/covid-red.svg">
                    </div>

                    <div id="chd3">
                      <h3>Total Recovered</h3>
                      <hr>
                      <p id="recovered">${data.recovered}</p>
                      <img src="./images/icons/covid-green.svg">
                    </div>

                    <div id="chd4">
                      <h3>Total Active</h3>
                      <hr>
                      <p id="active">${data.active}</p>
                      <img src="./images/icons/covid-blue.svg">
                    </div>

                    <div id="chd5">
                      <h3>New Cases</h3>
                      <hr>
                      <p id="todayCases">${data.todayCases}</p>
                      <img src="./images/icons/covid-orange.svg">
                    </div>

                    <div id="chd6">
                      <h3>Today Deaths</h3>
                      <hr>
                      <p id="todayDeaths">${data.todayDeaths}</p>
                      <div>
                      <img src="./images/icons/covid-redark.svg">
                    </div>            			
                            `  
  })
} 


/*UK INFO*************************************/

const infoUk = document.getElementById('parteMediaIzqTracker5')
const ukBtn = document.getElementById('ukBtn')

ukBtn.addEventListener('click', getUkInfo)

function getUkInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/gb")
  .then(res => res.json())
  .then (data => {
    infoUk.innerHTML =  
    
                  `
                      <div>
                      <<h2>United Kingdom</h2>
                      </div>

                      <div id="chd1">
                      <h3>Total Cases</h3>
                      <hr>
                      <p>${data.cases}</p>
                      <img src="./images/icons/covid-defult.svg">
                      </div>
                      
                      <div id="chd2">
                      <h3>Total Deaths</h3>
                      <hr>
                      <p id="deaths">${data.deaths}</p>
                      <img src="./images/icons/covid-red.svg">
                    </div>

                    <div id="chd3">
                      <h3>Total Recovered</h3>
                      <hr>
                      <p id="recovered">${data.recovered}</p>
                      <img src="./images/icons/covid-green.svg">
                    </div>

                    <div id="chd4">
                      <h3>Total Active</h3>
                      <hr>
                      <p id="active">${data.active}</p>
                      <img src="./images/icons/covid-blue.svg">
                    </div>

                    <div id="chd5">
                      <h3>New Cases</h3>
                      <hr>
                      <p id="todayCases">${data.todayCases}</p>
                      <img src="./images/icons/covid-orange.svg">
                    </div>

                    <div id="chd6">
                      <h3>Today Deaths</h3>
                      <hr>
                      <p id="todayDeaths">${data.todayDeaths}</p>
                      <div>
                      <img src="./images/icons/covid-redark.svg">
                    </div>            			
                            `  
  })
} 


/*FRANCE INFO*************************************/

const infoFrance = document.getElementById('parteMediaIzqTracker5')
const franceBtn = document.getElementById('franceBtn')

franceBtn.addEventListener('click', getFranceInfo)

function getFranceInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/fra")
  .then(res => res.json())
  .then (data => {
    infoFrance.innerHTML =  
    
                  `
                      <div>
                      <<h2>France</h2>
                      </div>

                      <div id="chd1">
                      <h3>Total Cases</h3>
                      <hr>
                      <p>${data.cases}</p>
                      <img src="./images/icons/covid-defult.svg">
                      </div>
                      
                      <div id="chd2">
                      <h3>Total Deaths</h3>
                      <hr>
                      <p id="deaths">${data.deaths}</p>
                      <img src="./images/icons/covid-red.svg">
                    </div>

                    <div id="chd3">
                      <h3>Total Recovered</h3>
                      <hr>
                      <p id="recovered">${data.recovered}</p>
                      <img src="./images/icons/covid-green.svg">
                    </div>

                    <div id="chd4">
                      <h3>Total Active</h3>
                      <hr>
                      <p id="active">${data.active}</p>
                      <img src="./images/icons/covid-blue.svg">
                    </div>

                    <div id="chd5">
                      <h3>New Cases</h3>
                      <hr>
                      <p id="todayCases">${data.todayCases}</p>
                      <img src="./images/icons/covid-orange.svg">
                    </div>

                    <div id="chd6">
                      <h3>Today Deaths</h3>
                      <hr>
                      <p id="todayDeaths">${data.todayDeaths}</p>
                      <div>
                      <img src="./images/icons/covid-redark.svg">
                    </div>            			
                   `  
  })
} 



/*INFO GERMANY*************************************/

const infoGermany = document.getElementById('parteMediaIzqTracker5')
const germanyBtn = document.getElementById('germanyBtn')

germanyBtn.addEventListener('click', getGermanyInfo)

function getGermanyInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/germany")
  .then(res => res.json())
  .then (data => {
    infoGermany.innerHTML =  
    
                  `
                      <div>
                      <<h2>Germany</h2>
                      </div>

                      <div id="chd1">
                      <h3>Total Cases</h3>
                      <hr>
                      <p>${data.cases}</p>
                      <img src="./images/icons/covid-defult.svg">
                      </div>
                      
                      <div id="chd2">
                      <h3>Total Deaths</h3>
                      <hr>
                      <p id="deaths">${data.deaths}</p>
                      <img src="./images/icons/covid-red.svg">
                    </div>

                    <div id="chd3">
                      <h3>Total Recovered</h3>
                      <hr>
                      <p id="recovered">${data.recovered}</p>
                      <img src="./images/icons/covid-green.svg">
                    </div>

                    <div id="chd4">
                      <h3>Total Active</h3>
                      <hr>
                      <p id="active">${data.active}</p>
                      <img src="./images/icons/covid-blue.svg">
                    </div>

                    <div id="chd5">
                      <h3>New Cases</h3>
                      <hr>
                      <p id="todayCases">${data.todayCases}</p>
                      <img src="./images/icons/covid-orange.svg">
                    </div>

                    <div id="chd6">
                      <h3>Today Deaths</h3>
                      <hr>
                      <p id="todayDeaths">${data.todayDeaths}</p>
                      <div>
                      <img src="./images/icons/covid-redark.svg">
                    </div>            			
                   `  
  })
} 

/*INFO RUSSIA*************************************/

const infoRussia = document.getElementById('parteMediaIzqTracker5')
const russiaBtn = document.getElementById('russiaBtn')

russiaBtn.addEventListener('click', getRussiaInfo)

function getRussiaInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/russia")
  .then(res => res.json())
  .then (data => {
    infoRussia.innerHTML =  
    
                  `
                        <div>
                        <<h2>Russia</h2>
                        </div>

                        <div id="chd1">
                        <h3>Total Cases</h3>
                        <hr>
                        <p>${data.cases}</p>
                        <img src="./images/icons/covid-defult.svg">
                        </div>
                        
                        <div id="chd2">
                        <h3>Total Deaths</h3>
                        <hr>
                        <p id="deaths">${data.deaths}</p>
                        <img src="./images/icons/covid-red.svg">
                      </div>

                      <div id="chd3">
                        <h3>Total Recovered</h3>
                        <hr>
                        <p id="recovered">${data.recovered}</p>
                        <img src="./images/icons/covid-green.svg">
                      </div>

                      <div id="chd4">
                        <h3>Total Active</h3>
                        <hr>
                        <p id="active">${data.active}</p>
                        <img src="./images/icons/covid-blue.svg">
                      </div>

                      <div id="chd5">
                        <h3>New Cases</h3>
                        <hr>
                        <p id="todayCases">${data.todayCases}</p>
                        <img src="./images/icons/covid-orange.svg">
                      </div>

                      <div id="chd6">
                        <h3>Today Deaths</h3>
                        <hr>
                        <p id="todayDeaths">${data.todayDeaths}</p>
                        <div>
                        <img src="./images/icons/covid-redark.svg">
                      </div>            			
                   `  
  })
} 


/*TURKEY INFO*******************************************/


const infoTurkey = document.getElementById('parteMediaIzqTracker5')
const turkeyBtn = document.getElementById('turkeyBtn')

turkeyBtn.addEventListener('click', getTurkeyInfo)

function getTurkeyInfo(){
  fetch("https://disease.sh/v3/covid-19/countries/turkey")
  .then(res => res.json())
  .then (data => {
    infoTurkey.innerHTML =  
    
                  `

                        <div>
                        <<h2>Turkey</h2>
                        </div>

                      <div id="chd1">
                      <h3>Total Cases</h3>
                      <hr>
                      <p>${data.cases}</p>
                      <img src="./images/icons/covid-defult.svg">
                      </div>
                      
                      <div id="chd2">
                      <h3>Total Deaths</h3>
                      <hr>
                      <p id="deaths">${data.deaths}</p>
                      <img src="./images/icons/covid-red.svg">
                    </div>

                    <div id="chd3">
                      <h3>Total Recovered</h3>
                      <hr>
                      <p id="recovered">${data.recovered}</p>
                      <img src="./images/icons/covid-green.svg">
                    </div>

                    <div id="chd4">
                      <h3>Total Active</h3>
                      <hr>
                      <p id="active">${data.active}</p>
                      <img src="./images/icons/covid-blue.svg">
                    </div>

                    <div id="chd5">
                      <h3>New Cases</h3>
                      <hr>
                      <p id="todayCases">${data.todayCases}</p>
                      <img src="./images/icons/covid-orange.svg">
                    </div>

                    <div id="chd6">
                      <h3>Today Deaths</h3>
                      <hr>
                      <p id="todayDeaths">${data.todayDeaths}</p>
                      <div>
                      <img src="./images/icons/covid-redark.svg">
                    </div>            			
                   `  
  })
} 




