const inputBox = document.getElementById("input-box");
const taskList = document.getElementById("task-list");

// Clock function

function displayTime(){
    const d = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = days[d.getDay()];
    let month = months[d.getMonth()];

    document.getElementById("clock").innerHTML = "Today is " + day + ", " + month + " "+ d.getDate() + ", " + d.getFullYear()+"."; 
}
setInterval(displayTime, 1000);

// this is the function that works once we "CLICK" the button
function addTask(){
    // if the input box is empty - give the message in an ALERT 
    if(inputBox.value === ''){ 
        alert("You must write something!"); 
    }
    else{
        //with the input box filled - now we create a "li" with a new task
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskList.appendChild(li);
        
        //This will append the X so we can eliminate the tast
        let span =document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = "";
}

    //whenever we click on a LI "unchecked" it becomes cheked. And when the LI is checked it becomes unchecked. 
    taskList.addEventListener("click", function(e){
        if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    
     } //whenever we click on a span element, the li gets remove.
        else if(e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
    }
}, false);