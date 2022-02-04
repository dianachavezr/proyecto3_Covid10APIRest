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
                        <img src="${dat.countryInfo.flag}" + style="width: 50px; margin-left:-8%">
                        <h5>${dat.country}</h5>
                        <p>${dat.cases}</p>
                      </div>
                      `

  });
});
