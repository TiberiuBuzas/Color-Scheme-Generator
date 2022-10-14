const button = document.getElementById("btn");
const colorInput = document.getElementById("colorInput");
const colorFenster = document.getElementsByClassName("colorFenster");

button.addEventListener("click", ()=>{
    document.getElementsByClassName("colorPallet")[0].style.backgroundColor = colorInput.value;
    
    for(let fenster of colorFenster){
        fenster.style.backgroundColor = colorInput.value;
    }
})


fetch("https://www.thecolorapi.com", {
    method: "PUT",
    body: JSON.stringify({
        color: colorInput.value
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then( (response) => response.json())
    .then( (data) => console.log(data));