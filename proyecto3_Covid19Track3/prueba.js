const getData = async()=>{
    const resp = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all')
    const data = await resp.json()
    

    for(let i = 0; i){
       data[i].array.forEach(element => {
           select.innerHTML += `<option>`
    
});

    }
}

getData()

let select = document.getElementById('select')