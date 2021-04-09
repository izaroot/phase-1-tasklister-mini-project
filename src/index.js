// document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let removeTask = document.createElement("button")
  removeTask.innerText = "X"





  let taskList = document.querySelector("#tasks")
  let taskForm = document.querySelector("#create-task-form")
  taskForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    let formBox = evt.target
    let inputBox = formBox.tomato
    let taskValue = inputBox.value
    
    let blankLi = document.createElement("li")
    blankLi.className = "task-item"
    blankLi.innerHTML = taskValue + removeTask
    
    taskList.append(blankLi)
    console.log("hi")
    
  
  })
// });


