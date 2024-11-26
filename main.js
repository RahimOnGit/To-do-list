class Task {
    constructor(text) {
        this.text = text;
        this.element = this.createTask();
    
    this.element.classList.add("theTask")
    
    }



 createTask()
{

    let li = document.createElement("li");
    let p = document.createElement("p");
    
   
    p.textContent = this.text;

li.innerHTML = '<input type="checkbox" id="check">' +p.outerHTML+ '<button class="delete"> </button>';
    
const deleteBtn = li.querySelector("button");
deleteBtn.addEventListener("click",()=>{
    li.remove();
    taskList.splice(taskList.indexOf(li))
});

let paragraph = li.querySelector("p");
const checkbox = li.querySelector("#check");
checkbox.addEventListener("change",()=>{
    this.taskDone(checkbox,paragraph);
})


return li;

}



 taskDone(checkbox,p) {


    if(checkbox.checked)
        {
        p.classList.add("checked");
   
}
else
{
    p.classList.remove("checked");
   
}

}

}

// function taskChecked(checkbtn)
// {
// if(checkbtn.checked())
// }




let taskList = [];
function addTask()
{
    const taskText = document.getElementById("task-input").value;
if(taskText)
{
    const task = new Task(taskText);
    taskList.push(task);
   document.querySelector("ol").appendChild(task.element);
   document.querySelector("#task-input").value= "";

}

}








// function addTask2()
// {
//     const taskText = document.getElementById("task-input").value;
// if(taskText)
// {
//     const task = new Task(taskText);
//     taskList.push(task);


// document.body.addEventListener("click",(event)=>
// {

// if(event.target.textContent ==="Morning")
// {
//     document.querySelector(".list-section .morning").appendChild(task.element);
//     document.querySelector("#task-input").value= "";
 
// }
//  else if(event.target.textContent=="Afternoon")
//     {
//         document.querySelector(".list-section .afternoon").appendChild(task.element);
//         document.querySelector("#task-input").value= "";
     
//     }   
//     else if(event.target.textContent ==="Night")
//     {
//         document.querySelector(".list-section .night").appendChild(task.element);
//         document.querySelector("#task-input").value= "";
//     }
    
// })

   
// }
// }

// document.body.addEventListener("click",(event)=>
// {
// if(event.target.textContent =="Morning")
// {
// console.log("you clicked morning")
// } 

// else if(event.target.textContent =="Afternoon")
// {
// console.log("you clicked afternoon")
// }
// else if(event.target.textContent =="Night")
// {
// console.log("you clicked Night")
// }




// });


