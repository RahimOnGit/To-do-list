

//check
//the editing functionalty

function newTaskElements(taskValue)
{

    let li = document.createElement("li");

    let p = document.createElement("input");
   let checkbox = document.createAttribute("input");
   let deleteBtn = document.createElement("button");




   p.setAttribute("value",taskValue);
   p.style.border = "none";
   p.disabled = true;
   p.style.backgroundColor = "white";

  
   p.setAttribute("class","task-element");







}


class Task {
    constructor(text) {
        this.text = text;
        this.element = this.createTask();
        this.element.classList.add("theTask");

    
    }



 createTask()
{

    let li = document.createElement("li");
    let p = document.createElement("input");
    
   p.setAttribute("value",this.text)
   p.style.border = "none"
   p.disabled = true
   p.style.backgroundColor = "white"

  
   p.setAttribute("class","task-element");
   li.addEventListener("click",()=>{

    
    if(p.disabled)
    {


        p.disabled = false;
        p.focus();
    }
   
   
   });

//li.innerHTML = '<input type="checkbox" id="check">' +p.outerHTML+ '<button class="delete"> </button>';
    

//creating the checkbox



let checkbx = document.createElement("input");
checkbx.type = "checkbox";
checkbx.classList.add( "check");



let deletebtn = document.createElement("button");
deletebtn.classList.add("delete");


li.appendChild(checkbx);
li.appendChild(p);
li.appendChild(deletebtn);


const deleteBtn = li.querySelector("button");
deleteBtn.addEventListener("click",()=>{

    li.remove();
    taskList.splice(taskList.indexOf(li),1)
});

//let paragraph = li.querySelector("#task-element");

checkbx.addEventListener("change",()=>{
    this.taskDone(checkbx,p);
    p.disabled = true;
})


return li;

}



 taskDone(checkbox,p) {


    if(checkbox.checked)
        {
        p.classList.add("checked");
        return true
   
}
else
{
    p.classList.remove("checked");
    return false
   
}

}

}

// function taskChecked(checkbtn)
// {
// if(checkbtn.checked())
// }




let taskList = [];
let taskId = 0;

function addTask()
{
    const taskText = document.getElementById("task-input").value;
if(taskText)
{
    const task = new Task(taskText);
    taskList.push(task);
    
    localStorage.setItem(taskId,JSON.stringify(task));
    taskId++;

    console.log(task.text)
   document.querySelector("ol").appendChild(task.element);
   document.querySelector("#task-input").value= "";

}

}


function getTasks()
{
    for (let i = 0; i < localStorage.length; i++) {

let taskId = localStorage.key(i);
let taskData = JSON.parse(localStorage.getItem(taskId));

    let li = document.createElement("li");
    let p = document.createElement("input");
    
   p.setAttribute("value",this.text)
   p.style.border = "none"
   p.disabled = true
   p.style.backgroundColor = "white"

  
   p.setAttribute("class","task-element");



let checkbx = document.createElement("input");
checkbx.type = "checkbox";
checkbx.classList.add( "check");



let deletebtn = document.createElement("button");
deletebtn.classList.add("delete");


deletebtn.addEventListener("click",()=>
{

    li.remove();
    taskList.splice(taskList.indexOf(li),1);
    localStorage.removeItem(taskId); 
        
});



li.classList.add("theTask")


    p.setAttribute("value",taskData.text);
    li.appendChild(checkbx);
    li.appendChild(p);
    li.appendChild(deletebtn);





    console.log(taskData.text);
   

    document.body.querySelector("ol").appendChild(li);






}

}

getTasks()



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


