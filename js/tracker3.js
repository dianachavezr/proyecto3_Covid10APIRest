

let url= "https://disease.sh/v3/covid-19/countries/"
fetch(url)
.then(response => response.json())
.then(data => mostrarData(data))
.catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    //TEMPLATE STRING PARA TRAER LOS DATOS
    let body = ''


    for(let i = 0; i<data.length; i++){
        body += `<tr>
                <td><img src = ${data[i].countryInfo.flag} + style = 'height:15px;width:30px'></td>
                <td>${data[i].country}</td>
                <td>${data[i].cases}</td>
                <td>${data[i].todayCases}</td>
                <td>${data[i].deaths}</td>
                <td>${data[i].todayDeaths}</td>
                <td>${data[i].recovered}</td>
                <td>${data[i].active}</td>
                <td>${data[i].critical}</td>
                <td>${data[i].tests}</td>     
                </tr>`

    }   
    
    document.getElementById('data').innerHTML = body
}

/* inputsearch = document.getElementById(search3);
function buscador(){
  filter = inputsearch.value.toUpperCase();
  li = box_search.getElementByTagName(li);

  for(let i = 0; i<li.length; i++){
    body += `<tr>
            <td>${li[i].country}</td>
            <td>${li[i].cases}</td>
            <td>${li[i].todayCases}</td>
            <td>${li[i].deaths}</td>
            <td>${li[i].todayDeaths}</td>
            <td>${li[i].recovered}</td>
            <td>${li[i].active}</td>
            <td>${li[i].critical}</td>
            <td>${data[i].tests}</td>     
            </tr>`

}   


} */



/*  window.addEventListener('DOMContentLoaded', () => {
  const mostrarData = async() => {
    let data = await url("https://disease.sh/v3/covid-19/countries/")
    const limit = showselected();
    console.log(limit)
    let datas = data.slice(0, limit)
    mostrarData.innerHTML = ""
      
  });
  search()
}  */


