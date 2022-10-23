const button = document.getElementById("btn");
const colorInput = document.getElementById("colorInput");
const schemesInput = document.getElementById("schemes");
const colorFenster = document.getElementsByClassName("colorFenster");
const colors = document.getElementsByClassName("color");
const colorCards = document.getElementsByClassName("colorCard");
const hexH2 = document.getElementsByClassName("hexH2");
const rgbH2 = document.getElementsByClassName("rgbH2");



for(let coloCard of colorCards){
    coloCard.addEventListener("click", (e)=>{
        // copy to Clipboard the textContent of the clicked element
        let text = e.target.textContent;
        console.log(text);
        navigator.clipboard.writeText(text); 
    })
}

button.addEventListener("click", ()=>{
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${schemesInput.value}&count=5`)
        .then( (response) => response.json())
        .then( (data) => {

            for(let i = 0; i<colors.length; i++){

                colors[i].style.backgroundColor = data.colors[i].hex.value;
                colorFenster[i].style.backgroundColor = data.colors[i].hex.value;

                hexH2[i].textContent = data.colors[i].hex.value;
                rgbH2[i].textContent = data.colors[i].rgb.value;

            }
            

            /* Animate the colorCards with GSAP */
            let durationTime = 2;
            
            for(let i=0; i < colorCards.length; i++){
                durationTime += 0.1;

                if(window.innerWidth > 1300){
                    gsap.from(colorCards[i], {
                        opacity: 0,
                        y: 500,
                        duration: durationTime,
                        ease: "back.out(1)"
                    });
                }
            } 

            
                

            if(window.innerWidth < 1300){
                
                // Animate text to right
                gsap.from(".animationToRight", {
                    opacity: 0,
                    x: -150,
                    duration: 1.5,
                    ease: "power"
                })

                // animate text to left
                gsap.from(".animationToLeft", {
                    opacity: 0,
                    x: 150,
                    duration: 1.5,
                    ease: "power"
                })


            }
            
        });
        
})

