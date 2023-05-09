const box = document.querySelector('.box');
const area = document.querySelector('.area');
const qutu = document.getElementById('qutu');
const daire = document.getElementById('daire');
const addim = document.getElementById('addim');
const input = document.getElementById('inp')
const step = 20;
function changeDivColor(){
    area.style.backgroundColor = inp.value;
}
function changeDivValue(){
    area.style.backgroundColor = qutu.value +"px";
}
function changeBoxValue(){
    box.style.backgroundColor = daire.value +"px";
}
document.body.addEventListener("keyup" ,e =>{
    if (e.key == "ArrowRight") {
        goRight();
    }
    else if(e.key == "ArrowLeft"){
        goLeft();
    }
    else if(e.key == "ArrowDown"){
        goDown();
    }
    else if(e.key == "ArrowUp"){
        goUp();
    }
})
function goRight() {
    let marLeft = box.style.marginLeft ? parseInt(box.style.marginLeft) : 0
    if (marLeft + step <= area.clientWidth - box.clientWidth ) {
        box.style.marginLeft = marLeft + step + "px";        
    }
    else{
        box.style.marginLeft = area.clientWidth - box.clientWidth +"px";
    }
}
function goLeft() {
    let marLef =box.style.marginRight ? parseInt(box.style.marginRight) : 0
    if (marLef + step <= area.clientWidth - box.clientWidth ) {
        box.style.marginRight = marLef + step + "px";        
    }
    else{
        box.style.marginRight = area.clientWidth - box.clientWidth +"px";
    }
}
function goDown() {
    let marUp =box.style.marginTop ? parseInt(box.style.marginTop) : 0
    if (marUp + step <= area.clientHeight -box.clientHeight) {
    box.style.marginTop = marUp + step + "px";
    }
    else{
     box.style.marginTop = area.clientHeight - box.clientHeight + "px";
    }
}
function goUp() {
    let marUp = box.style.marginTop ? parseInt( box.style.marginTop) : 0
    if (marUp - step >= 0) {
     box.style.marginTop = marUp - step + "px";
    }
    else{
     box.style.marginTop = 0;
    }
}
