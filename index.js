// PROBLEM 1 ######################################
let boxcheck = document.getElementById("myCheck");

function validate(e) {
  alert("I TOLD YOU NOT TO CLICK THIS!!!");
  e.preventDefault();
}

boxcheck.addEventListener("click", validate);

// PROBLEM 2 ######################################
let btninput = document.getElementById("allowtype");
let txtarea = document.getElementById("sometxt");

// !! : your entire js file would not run because you had an empty if statment. Make sure that you comment out any broken code so I can grade what you have correctly. 
function enableText() {

// your missing a flag (a boolean value that you change in a condition or loop)
  txtarea = true;
  if () {
    txtarea = true;
  } else {
    txtarea = false;
  }
}

btninput.addEventListener("click", enableText);





// JUNK CODE BELOW ######################################

// function attackBox() {
//   let click_box = document.getElementById("check_box").checked = true;
//   let another_box = document.getElementById("check_box").checked = false;
//
//   if(another_box === click_box){
//     alert("I TOLD YOU NOT TO CLICK THIS!!!");
//   } else if (boxcheck === another_box){
//     alert("False!!!");
//   }
//
// }
//
// boxcheck.addEventListener("checked", attackBox);
//
//
// function check(ev) {
//   document.getElementById("myCheck").checked = true;
//   alert("I TOLD YOU NOT TO CLICK THIS!!!");
//
//   ev.preventDefault();
// }
//
// function uncheck() {
//   document.getElementById("myCheck").checked = false;
// }



// declaring the variable using a let for the id of txt_field which is used with the input tag
// let t_field = document.getElementById("txt_field");
//
// // declaring the function to check for lowercase
// function checkForLowercase(ev) {
//
// // declares key stroke and character enter is toLowerCase()
//   let char_entered = ev.key;
//   let char_lower = char_entered.toLowerCase();
//
// // if statement with conditional to check if input is lowercase or not
//   if(char_entered !== char_lower) {
//     // some annoying alert
//     alert("Please enter lowered case letters");
//     // this prevents a key from being typed if the letter is capitalized
//     ev.preventDefault();
//   }
// }

// calling the let element from above that listening for the keypress event and
// when its fired it calls the function call
// t_field.addEventListener("keypress", checkForLowercase);
