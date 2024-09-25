const arrowVariable = "&#8599";
const asteriskVariable = "&#10035";
var navList = ["Home", "About", "Work", "Blog"];

//Mapping li items with the navigation-list items to the parent element ul
const listHTML = navList
  .map((each, index) => `<li><a href="#section${index}">${each}</a></li>`)
  .join("");

// the menu items are rendered in the li tag from the navList array for the parent element ul having id "header-nav"
document.getElementById("header-nav").innerHTML = listHTML;

//arrow variable attached to the span id="arrow" inside div class=ws_body-btn
document.getElementById("arrow").innerHTML = arrowVariable;

document.querySelectorAll("span ul li a").forEach((listItem, i) => {
  listItem.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = document.querySelector(this.getAttribute("href"));
    switchSection(targetSection);
    urlUpdate(false);
    console.log('this.getAttribute("href")', this.getAttribute("href"));
  });
});

document.getElementById("triple-arrow").addEventListener("click", function (e) {
  e.preventDefault();
  const targetSection = document.getElementById("section1");
  switchSection(targetSection);
  urlUpdate(true);
});

document.getElementById("asterisk-one").innerHTML = asteriskVariable;

function switchSection(targetSection) {
  targetSection.scrollIntoView({
    behavior: "smooth", // Smooth scrolling behavior
    block: "start", //Scroll to the top of the section
  });
}

function urlUpdate(boolean) {
  window.location.href =
    window.location.href.split("#")[0] +
    `${boolean ? "#section1" : this.getAttribute("href")}`;
}

//Wap to print the name if age is greater than 18
// const age = parseInt(prompt("Enter age: "));
// age > 18 ? console.log("Amit Kumar Nayak") : console.log("Oops! Sorry");

//Fibonacci
// const number = parseInt(prompt("Enter the number of terms: "));
// let n1 = 0,
//   n2 = 1,
//   nextTerm;

// console.log("Fibonacci Series:");

// for (let i = 1; i <= number; i++) {
//   console.log(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
// }

//Greet the user having first-name and last-name
const first_name = prompt("Enter the first name?");
const last_name = prompt("Enter the last name?");
first_name && last_name
  ? console.log(`Hi this is ${first_name + " " + last_name}.`)
  : console.log(
      "Oops! Sorry. Please fill in first_name and last_name both to display the output."
    );

//Greet the person based on the gender
const gender = prompt(`Enter your gender ${first_name + " " + last_name}?`);
gender
  ? console.log(`Gender: ${gender}`)
  : console.log("Please fill in gender.");

//count till 100

let num = 0;
for (i = 0; i < 100; i++) {
  num += 1;
  console.log(num);
}

//Programme to display ell even numbers from array
const array_mix = [1, 2, 3, 4, 5, 6, 7];
// array_mix.forEach((e) => {
//   if (e % 2 === 0) {
//     console.log("Printing even numbers", e);
//   }
// });

for (i = 0; i < array_mix.length - 1; i++) {
  if (array_mix[i] % 2 === 0) {
    console.log("Printing Even number: ", array_mix[i]);
  }
}

//Printing the greatest number in the array
let maxNumber = array_mix[0];
for (i = 1; i < array_mix.length - 1; i++) {
  if (maxNumber < array_mix[i]) {
    maxNumber = array_mix[i];
  }
}
console.log("Printing the greatest number in the array", maxNumber);

//WAP to print all the male members name from a complex object
const obj = {};
const name_param = {};
name_param["first_name"] = first_name;
name_param["last_name"] = last_name;
obj["name"] = name_param;
obj["male"] = gender;
const isMale = gender.toLowerCase() === "male" ? true : false;
console.log(obj);
isMale
  ? console.log("Name of the member first name: ", obj["name"]["first_name"])
  : console.log("There are no male members.");

//Reverse all elements of the array
let array_mix1 = array_mix;

for (i = 0; i < Math.floor(array_mix1.length / 2); i++) {
  j = array_mix1.length - i - 1;
  let temp;
  temp = array_mix1[i];
  array_mix1[i] = array_mix1[j];
  array_mix1[j] = temp;
}
console.log("array_mix1", array_mix1);

//Add two numbers
const a1 = parseInt(prompt("Enter number 1: "));
const a2 = parseInt(prompt("Enter number 2: "));

const add = (a1, a2, tense) => {
  if (tense == "active") {
    return `The sum of ${a1} and ${a2}: ${a1 + a2}`;
  } else if (tense == "passive") {
    return `The sum of ${a1} and ${a2} has been calculated as ${a1 + a2}`;
  }
};

console.log(add(a1, a2, "active")); //Without passive tense

console.log(add(a1, a2, "passive")); //With passive tense

//Counter 30 to 0
let count = 30;
const countDown = (count) => {
  for (i = count; i > 0; i--) {
    count -= 1;
    console.log(`The updated count is ${count}`);
  }
};

console.log(countDown(count));

// Create a terminal clock
function timeClock() {
  const date = new Date();

  let hours = date.getHours();
  let minute = date.getMinutes();
  let secs = date.getSeconds();

  console.log(`The time now is ${hours}:${minute}:${secs}`);
}

// document.getElementById("hireMeBtn").onclick = timeClock();
