let userName = 'Aaron';
let userAge = 19;

if (userAge >=18){
    document.getElementById("greeting").textContent= 'Hello ' + 
    userName + ", you are an adult.";
} else {
    document.getElementById("greeting").textContent= 'Hello ' +
    userName + ", You are a minor.";
}

function addNumbers(a, b) {
    return a +b;    
}

function showSum(){
    let result = addNumbers(6, 7);
    document.getElementById("sumResult").textContent = "The sum is: "  + result;
}

function showNumbers(){
    let list = document.getElementById("numberList");
    list.innerHTML= "";
    for (let i=1; i<=10; i++){
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li)
    }
}

let count = 0;
while (count < 5){
    console.log("Count is: " + count);
    count++;
}

document.getElementById("toggleButton").addEventListener("click", function()
{
    let message = document.getElementById("message")
    if (message.style.display === "none"){
        message.style.display = "block";
    }
    else {
        message.style.display = "none";
    }
});

function addItem(){
    let list = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = "This is a new item.";
    list.appendChild(newItem);
}

document.getElementById("message").textContent = "Hi, welcome to the site!";