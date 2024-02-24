function getRandomColor(){
    let hexColor = `#${Math.random().toString(16).slice(2,8).padEnd(6,0)}`;
    return hexColor;
}
function changeBackgroundColor(){
    document.body.style.backgroundColor=getRandomColor();;
}
document.getElementById("changeColor").onclick=changeBackgroundColor;
