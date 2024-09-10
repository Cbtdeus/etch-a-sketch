const body = document.querySelector("body");
const button = document.querySelector("button")
const etch = document.querySelector(".etch")
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function createCanvas(gridSize = 32){
    removeAllChildNodes(etch)
     for (let i = 0;i < (gridSize * gridSize) ;i++ ){
    const div = document.createElement("div")
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red"})
    div.setAttribute("class", "sketch")
    etch.appendChild(div)
    div.style.flexBasis = (100 / gridSize) + "%" ;
    }};
createCanvas()

button.addEventListener("click", () =>{
    gridSize = prompt("Grid size:")
    if (gridSize > 100){
        alert("Invalid grid size")
        createCanvas()
        return
    }
    createCanvas(gridSize)
})
    

 /*    const div = document.createElement("div")
    etch.appendChild(div) */