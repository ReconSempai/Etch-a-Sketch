let color = 'black'
createTable(16);
let selectBtn = document.querySelector("#popout");
    selectBtn.addEventListener("click",function(){
        let size = getSize();
        createTable(size)
    })



function createTable(size){
    const table = document.querySelector('.table');
    table.style.gridTemplateColumns = `repeat(${size},1fr)`;
    table.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size;

    for (let i=0; i<numDivs;i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover',colorDiv)
        table.insertAdjacentElement("beforeend",div);
    }
}
function getSize(){
    let input = prompt('What size do you want the table to be?');
    let message = document.querySelector('#message');
    if (input == "" ){
        message.innerHTML = "Please provide a number";

    }
    else if (input<0 || input>100) {
        message.innerHTML = "Please provide a number between 1 and 100!";

    }
    else{
        message.innerHTML = "Now you are ready to start drawing!!";
        return input;
    }
}

function colorDiv(){
    if(color == 'rainbow'){
        this.style.backgroundColor = getRandomRgb();
    }
    else{
        this.style.backgroundColor = 'black'
    }

}

function setColor(colorChoice){
    color = colorChoice;
}
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
function resetTable(){
    const divs = document.querySelectorAll('div');
     divs.forEach((div) => div.style.backgroundColor = 'white')
}