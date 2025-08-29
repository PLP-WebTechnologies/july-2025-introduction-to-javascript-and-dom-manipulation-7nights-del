// Part 1: Basics
let userName = "Alice";
let userAge = 20;

// Conditional logic
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// Output to webpage
document.getElementById("greeting").textContent = "Welcome, " + userName + "!";


// Part 2: Functions
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatMessage(name) {
  return `Hello, ${name}! Have a great day`;
}

// Using the functions
console.log("Total cost:", calculateTotal(50, 3));
console.log(formatMessage(userName));


// Part 3: Loops
let numbers = [1, 2, 3, 4, 5];

// For loop
for (let i = 0; i < numbers.length; i++) {
  console.log("Number:", numbers[i]);
}

// While loop (countdown)
let count = 5;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}


// Part 4: DOM Manipulation
// 1. Toggle text content when button is clicked
document.getElementById("toggleBtn").addEventListener("click", function () {
  let greeting = document.getElementById("greeting");
  greeting.classList.toggle("highlight");
  greeting.textContent = greeting.textContent === "Hello, User!"
    ? "Message Toggled"
    : "Hello, User!";
});

// 2. Countdown button updates DOM instead of console
document.getElementById("countdownBtn").addEventListener("click", function () {
  let count = 5;
  let greeting = document.getElementById("greeting");
  let interval = setInterval(() => {
    greeting.textContent = "Countdown: " + count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      greeting.textContent = "Done!";
    }
  }, 1000);
});

// 3. Dynamically add items to list
document.getElementById("addItemBtn").addEventListener("click", function () {
  let list = document.getElementById("dynamicList");
  let newItem = document.createElement("li");
  newItem.textContent = "List item " + (list.children.length + 1);
  list.appendChild(newItem);
});
