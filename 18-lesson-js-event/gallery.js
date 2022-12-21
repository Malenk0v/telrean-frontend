const images = [
    `./img/Rouen_Cathedral_1.jpg`,
    `./img/Rouen_Cathedral_2.jpg`,
    `./img/Rouen_Cathedral_3.jpg`,
    `./img/Rouen_Cathedral_4.jpg`,
    `./img/Rouen_Cathedral_5.jpg`,
    `./img/Rouen_Cathedral_6.jpg`,
];
const prev = document.getElementById(`buttonPrev`);
const next = document.getElementById(`buttonNext`);
const picture = document.getElementById(`picture`);
prev.onclick = prevHadler;
next.onclick = nextHadler;

let index = 0;
function  nextHadler(){
    index++;
    if(index >= images.length){
        index = 0;
    }
    picture.src = images[index];
}
function  prevHadler(){
    index--;
    if(index < 0){
        index = images.length - 1;
    }
    picture.src = images[index];
}
