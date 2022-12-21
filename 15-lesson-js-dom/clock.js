
setInterval(printTime, 1000)

function printTime(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const h1 = document.createElement(`h1`);
    const time = document.createTextNode(`${h} : ${m} : ${s}`);
    h1.appendChild(time);
    //TODO
    if(root.firstElementChild){
        root.perlaceChild(h1, root.firstElementChild)
    }else{
        root.appendChild(h1);
    }
   
}