

const countries = document.querySelector("#main-country");
/* const cases = document.querySelector(".cases"); */

fetch('https://disease.sh/v3/covid-19/countries?sort=cases')
.then(response => response.json())

.then(data => {
  const limit = 10;
  let datas = data.slice(0, limit)
    datas.map(dat => {
    countries.innerHTML +=
    `
    <div class="country">
      <div class="d-flex bd-highlight containerBandera">
          <div class="p-2 bd-highlight">
            <img class="imgBandera" src="${dat.countryInfo.flag}" alt="">
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">${dat.country}</div>
          <div class="p-2 bd-highlight">${dat.cases}</div>
      </div>
    </div>`
  });
});

const total = document.querySelector(".total_case")
  const getData = async()=>{
  const resp = await fetch('https://disease.sh/v3/covid-19/all?sort=cases')
  const data = await resp.json()
  console.log(data)
  total.innerHTML = `<p>${data.cases}</p>`
}

getData()

