let userInput = document.getElementById('userInput')
// let userInputTrim = userInput.trim()
let addTodo = document.getElementById('addTodo')
let todoTable = document.getElementById('todoTable')
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
        todoArray.map((each, index)=>{
            tbody.innerHTML += `
                <tr>
                    <th scope="row">${index+1}</th>
                    <td class="fw-bold">${each}</td>
                    <td>In progress</td>
                    <td style="gap: 1em;" class="row">
                        <button onclick="deleteTodo(${index})" type="submit" data-mdb-button-init data-mdb-ripple-init class="col btn btn-danger">Delete</button>
                        <button onclick="editTodo(${index})" type="submit" data-mdb-button-init data-mdb-ripple-init class="col btn btn-secondary">Edit</button>
                        <button onclick="finishTodo()" type="submit" data-mdb-button-init data-mdb-ripple-init class="col btn btn-success ms-1">Finished</button>
                    </td>
                </tr>
        `
        todoTable.appendChild(tbody)
        })
}
const deleteTodo = (index) =>{
    todoArray.splice(index, 1)
    displayTodo()
}
const editTodo = (index)=> {
    let promptEdit = prompt("Edit your Todo item")
    todoArray.splice(index, 1, promptEdit)
    displayTodo()
}
const finishTodo = (index) =>{
    let td = tbody.getElementsByTagName('td')
    td[1].innerHTML = `<td>Completed</td>`
}
document.getElementById('deleteAll').addEventListener('click', (index)=>{
    event.preventDefault()
    if(todoArray.length<1){
        alert('no item in todo')
    }else{
        todoArray.splice(index, todoArray.length)
        displayTodo()
    }
})