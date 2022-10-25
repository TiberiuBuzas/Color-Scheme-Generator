const button = document.getElementById("btn");
const colorInput = document.getElementById("colorInput");
const schemesInput = document.getElementById("schemes");
const colorWindow = document.getElementsByClassName("colorWindow");
const colors = document.getElementsByClassName("color");
const colorCards = document.getElementsByClassName("colorCard");
const hexH2 = document.getElementsByClassName("hexH2");
const rgbH2 = document.getElementsByClassName("rgbH2");

// Set the first colors of each column
colors[0].style.backgroundColor = `${hexH2[0].innerHTML}`;
colorWindow[0].style.backgroundColor = `${hexH2[0].innerHTML}`;

colors[1].style.backgroundColor = `${hexH2[1].innerHTML}`;
colorWindow[1].style.backgroundColor = `${hexH2[1].innerHTML}`;

colors[2].style.backgroundColor = `${hexH2[2].innerHTML}`;
colorWindow[2].style.backgroundColor = `${hexH2[2].innerHTML}`;

colors[3].style.backgroundColor = `${hexH2[3].innerHTML}`;
colorWindow[3].style.backgroundColor = `${hexH2[3].innerHTML}`;

colors[4].style.backgroundColor = `${hexH2[4].innerHTML}`;
colorWindow[4].style.backgroundColor = `${hexH2[4].innerHTML}`; 



for(let coloCard of colorCards){
    coloCard.addEventListener("click", (e)=>{
        // copy to Clipboard the textContent of the clicked element
        let text = e.target.textContent;
        navigator.clipboard.writeText(text); 
    })
}

let clickDisabled = false;

button.addEventListener("click", ()=>{
    
    if(clickDisabled){
        return;
    }

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInput.value.slice(1)}&mode=${schemesInput.value}&count=5`)
        .then( (response) => response.json())
        .then( (data) => {

            for(let i = 0; i<colors.length; i++){

                colors[i].style.backgroundColor = data.colors[i].hex.value;
                colorWindow[i].style.backgroundColor = data.colors[i].hex.value;

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
                    duration: 1.25,
                    ease: "power"
                })

                // animate text to left
                gsap.from(".animationToLeft", {
                    opacity: 0,
                    x: 150,
                    duration: 1.25,
                    ease: "power"
                })


            }
            
        }); 

    clickDisabled = true;

    setTimeout(()=>{
        clickDisabled = false;
    }, 2505)
})

