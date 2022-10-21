const button = document.getElementById("btn");
const colorInput = document.getElementById("colorInput");
const schemesInput = document.getElementById("schemes");
const colorFenster = document.getElementsByClassName("colorFenster");
const colors = document.getElementsByClassName("color");
const hexH2 = document.getElementsByClassName("hexH2");
const rgbH2 = document.getElementsByClassName("rgbH2");


/*
let a = true;

const loop = () => 
{
    if(a){
    setTimeout(()=>{

        for(let i=0; i<colors.length; i++){
            const randomR = Math.floor(Math.random() * 256);
            const randomG = Math.floor(Math.random() * 256);
            const randomB = Math.floor(Math.random() * 256);


            colors[i].style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`;
        }
    
        window.requestAnimationFrame(loop);

    },2000)
    }
}
loop();
*/

button.addEventListener("click", ()=>{
    //a=false;

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${schemesInput.value}&count=5`)
        .then( (response) => response.json())
        .then( (data) => {

            for(let i = 0; i<colors.length; i++){
                colors[i].style.backgroundColor = data.colors[i].hex.value;
                colorFenster[i].style.backgroundColor = data.colors[i].hex.value;

                hexH2[i].textContent = "HEX: " + data.colors[i].hex.value;
                rgbH2[i].textContent = "RGB: " + data.colors[i].rgb.value.slice(3);
                //rgbH2[i].textContent = data.colors[i].rgb.value;
            }

            /* Animate the colorCards with GSAP */
            gsap.from(".colorCard", {
                opacity: 0,
                y: 500,
                duration: 3,
                ease: "back.out(1)"
            });

        });
})


//gsap.to(".colorGsap", {duration: 2, x:300, backgroundColor: "#560563", borderRadius: "20%", border: "5px solid white", ease: "back"});


