const columnas1 = document.querySelector('#columnas1')
fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
.then(response => response.json())

.then(data => {
const limit = 10;
let datas = data.slice(0, limit)
datas.map(dat => {
columnas1.innerHTML +=

 `<div>
    <img src="${dat.countryInfo.flag}" + style="width: 26px; height: 26px">
    <h6>${dat.country}</h6>  
    <p>${dat.cases}</p>
  </div>
`

});
});

const columnas2 = document.querySelector('#columnas2')
fetch('https://disease.sh/v3/covid-19/countries?sort=todayCases')
.then(response => response.json())

.then(data => {
const limit = 10;
let datas = data.slice(0, limit)
datas.map(dat => {
columnas2.innerHTML +=

 `<div>
    <img src="${dat.countryInfo.flag}" + style="width: 26px; height: 26px">
    <h6>${dat.country}</h6>  
    <p>${dat.cases}</p>
  </div>
`

});
}); 

const columnas3 = document.querySelector('#columnas3')
fetch('https://disease.sh/v3/covid-19/countries?sort=deaths')
.then(response => response.json())

.then(data => {
const limit = 10;
let datas = data.slice(0, limit)
datas.map(dat => {
columnas3.innerHTML +=

 `<div>
    <img src="${dat.countryInfo.flag}" + style="width: 26px; height: 26px">
    <h6>${dat.country}</h6>  
    <p>${dat.cases}</p>
  </div>
`

});
}); 

const columnas4 = document.querySelector('#columnas4')
fetch('https://disease.sh/v3/covid-19/countries?sort=todayDeaths')
.then(response => response.json())

.then(data => {
const limit = 10;
let datas = data.slice(0, limit)
datas.map(dat => {
columnas4.innerHTML +=

 `<div>
    <img src="${dat.countryInfo.flag}" + style="width: 26px; height: 26px">
    <h6>${dat.country}</h6>  
    <p>${dat.cases}</p>
  </div>
`

});
}); 

const columnas5 = document.querySelector('#columnas5')
fetch('https://disease.sh/v3/covid-19/countries?sort=active')
.then(response => response.json())

.then(data => {
const limit = 10;
let datas = data.slice(0, limit)
datas.map(dat => {
columnas5.innerHTML +=

 `<div>
    <img src="${dat.countryInfo.flag}" + style="width: 26px; height: 26px">
    <h6>${dat.country}</h6>  
    <p>${dat.cases}</p>
  </div>
`

});
}); 

const columnas6 = document.querySelector('#columnas6')
fetch('https://disease.sh/v3/covid-19/countries?sort=recovered')
.then(response => response.json())

.then(data => {
const limit = 10;
let datas = data.slice(0, limit)
datas.map(dat => {
columnas6.innerHTML +=

 `<div>
    <img src="${dat.countryInfo.flag}" + style="width: 26px; height: 26px">
    <h6>${dat.country}</h6>  
    <p>${dat.cases}</p>
  </div>
`

});
}); 
