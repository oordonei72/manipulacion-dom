const fecha = document.querySelector('#fecha')
const Finicio=document.querySelector('#Hinicio')
const Hfinal=document.querySelector('#Hfinal')
const btnGrabar=document.querySelector('#btnGrabar')

btnGrabar.addEventListener('click',btnGrabardb)

function btnGrabardb(){
    alert(fecha.value+Finicio.value)
}