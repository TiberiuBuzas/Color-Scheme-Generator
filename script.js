const button = document.getElementById("btn");
const colorInput = document.getElementById("colorInput");
const colorFenster = document.getElementsByClassName("colorFenster");

button.addEventListener("click", ()=>{
    document.getElementsByClassName("colorPallet")[0].style.backgroundColor = colorInput.value;
    
    for(let fenster of colorFenster){
        fenster.style.backgroundColor = colorInput.value;
    }
})
