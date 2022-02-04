// Add active class to the current button (highlight it)
let icono = document.getElementById("nav");
let btns = icono.getElementsByClassName("navbar");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


let url= "https://disease.sh/v3/covid-19/all"
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
