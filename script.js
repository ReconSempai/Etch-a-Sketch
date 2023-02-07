function createTable(size){
    const table = document.querySelector('.table');
    table.style.gridTemplateColumns = `repeat(${size},1fr)`;
    table.style.gridTemplateRows = `repeat(${size},1fr)`;

    let numDivs = size * size;

    for (let i=0; i<numDivs;i++){
        let div = document.createElement('div');
        table.insertAdjacentElement("beforeend",div);
    }
}
createTable(16)