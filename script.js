let userInput = document.getElementById('userInput')
// let userInputTrim = userInput.trim()
let addTodo = document.getElementById('addTodo')
let todoTable = document.getElementById('todoTable')
let updateTodo = document.getElementById('updateTodo')
let todoArray=[]
addTodo.addEventListener('click', (index)=>{
    event.preventDefault()
    if(userInput.value != ""){
        todoArray.push(userInput.value)
        userInput.value=""
    }else{
        alert('input is empty')
    }
    displayTodo()
})
let tbody = document.createElement('tbody')
const displayTodo = ()=>{
    tbody.innerHTML = ""
        todoArray.map((item, index)=>{
            tbody.innerHTML += `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td class="fw-bold">${item}</td>
                    <td>In progress</td>
                    <td style="gap: 1em;" class="row">
                        <button onclick="deleteTodo(${index})" type="submit" data-mdb-button-init data-mdb-ripple-init class="col btn btn-danger">Delete</button>
                        <button onclick="editTodo(${index})" type="submit" data-mdb-button-init data-mdb-ripple-init class="col btn btn-secondary">Edit</button>
                        <button onclick="finishTodo(${index})" type="submit" data-mdb-button-init data-mdb-ripple-init class="col btn btn-success ms-1">Finished</button>
                    </td>
                </tr>
        `
        todoTable.appendChild(tbody)
    })
    console.log(todoArray);
}
const deleteTodo = (index) =>{
    let confirmDelete = confirm("Are you sure you want to delete this item from the list?")
    if(confirmDelete){
        todoArray.splice(index, 1)
    }
    displayTodo()
}
let promptEdit;
let editIndex;
const editTodo = (index)=> {
    addTodo.style.display = "none"
    updateTodo.style.display = "inline-block"
    document.getElementById('userInput').value = todoArray[index]
    editIndex = index;
}

updateTodo.addEventListener('click', ()=>{
    event.preventDefault()
    const updatedValue = userInput.value.trim()
    if (updatedValue) {
        todoArray[editIndex] = updatedValue
        userInput.value = ""
        addTodo.style.display = "inline-block"
        updateTodo.style.display = "none"
        displayTodo()
    } else {
        alert("Input cannot be empty.")
    }
})
const finishTodo = (index) =>{
    let td = tbody.children[index]
    let statusCell = td.children[2]
    statusCell.textContent = "Completed"
}
document.getElementById('deleteAll').addEventListener('click', (index)=>{
    event.preventDefault()
    if(todoArray.length<1){
        alert('no item in todo')
    }else{
        let confirmDel = confirm("Are you sure you want to delete all item in the list?")
        if(confirmDel){
            todoArray.splice(index, todoArray.length)
        }
        displayTodo()
    }
})