const item = document.getElementById(`item`);
const addItem = document.getElementById(`addItem`)
const toodoList = document.getElementById(`todoList`)

addItem.onclick = e =>{

    const text = item.value.trim();
    if(text){
    item.value = '';
    const li = document.createElement(`li`);
    const buttonDelete = document.createElement(`button`)
    buttonDelete.append(document.createTextNode(`x`))
    buttonDelete.classList.add(`del`)
    buttonDelete.onclick = e =>{
        //li.remove();
        e.target.parentElement.remove();
    }
    li.append(document.createTextNode(text), buttonDelete);
    toodoList.append(li);}
}
