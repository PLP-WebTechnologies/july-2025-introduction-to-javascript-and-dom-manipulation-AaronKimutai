// Declare variables for user name and age
let userName = 'Aaron';
let userAge = 19;

// Check if the user is an adult or minor and show the message on the page
if (userAge >=18){
    document.getElementById("greeting").textContent= 'Hello ' + 
    userName + ", you are an adult.";
} else {
    document.getElementById("greeting").textContent= 'Hello ' +
    userName + ", You are a minor.";
}

// Function to add two numbers and return the result
function addNumbers(a, b) {
    return a +b;    
}

// Function to call addNumbers and display the result on the page
function showSum(){
    let result = addNumbers(6, 7);
    document.getElementById("sumResult").textContent = "The sum is: "  + result;
}

// Function to show numbers 1 to 10 as a list on the page
function showNumbers(){
    let list = document.getElementById("numberList");
    list.innerHTML= "";
    for (let i=1; i<=10; i++){
        let li = document.createElement("li");
        li.textContent = i;
        list.appendChild(li)
    }
}

// While loop example: logs numbers 0 to 4 in the console
let count = 0;
while (count < 5){
    console.log("Count is: " + count);
    count++;
}

// Event listener: toggles the display of the "message" paragraph when button is clicked
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

// Function to add a new list item to "itemList"
function addItem(){
    let list = document.getElementById("itemList");
    let newItem = document.createElement("li");
    newItem.textContent = "This is a new item.";
    list.appendChild(newItem);
}

// Display a welcome message when the page loads
document.getElementById("message").textContent = "Hi, welcome to the site!";