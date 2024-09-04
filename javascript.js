const body = document.querySelector("body");
const etch = document.querySelector(".etch");
gridSize = 16;
for (let i = 0;i < (gridSize * gridSize) ;i++ ){
    const div = document.createElement("div")
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red"})
    etch.appendChild(div)
   
    };
    
 /*    const div = document.createElement("div")
    etch.appendChild(div) */