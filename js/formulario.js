/*const formulario = document.getElementById('formulario');
const inputFormulario = document.getElementById('inputFormulario');

const getFormulario = data =>{
    formulario.addEventListener('keyup', e => {
        e.preventDefault()
        const letraPres = inputFormulario.value.toLowerCase()
        //console.log(letraPres) 
        const arrayFiltrado = data.filter(item => {
            const letraApi = item.country.toLowerCase()
            if(letraApi.indexOf(letraPres) !== -1){
                return item
            }
        })
        mostrarData(arrayFiltrado)
    })
}*/