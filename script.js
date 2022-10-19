const button = document.getElementById("btn");
const colorInput = document.getElementById("colorInput");
const schemesInput = document.getElementById("schemes");
const colorFenster = document.getElementsByClassName("colorFenster");
const colors = document.getElementsByClassName("color");
const hexH2 = document.getElementsByClassName("hexH2");
const rgbH2 = document.getElementsByClassName("rgbH2");




button.addEventListener("click", ()=>{

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${schemesInput.value}&count=5`)
        .then( (response) => response.json())
        .then( (data) => {

            for(let i = 0; i<colors.length; i++){
                colors[i].style.backgroundColor = data.colors[i].hex.value;
                colorFenster[i].style.backgroundColor = data.colors[i].hex.value;

                hexH2[i].textContent = "HEX: " + data.colors[i].hex.value;
                //rgbH2[i].textContent = "RGB: " + data.colors[i].rgb.value.slice(3);
                rgbH2[i].textContent = data.colors[i].rgb.value;

            }

        }); 
})




