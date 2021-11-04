/**
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   11.2.2021
 * License: Public Domain.
 **/
 function putNameInTitle(){
   // var name = window.prompt("What is your name.");
   //   console.log("name =", name);
  var newEl = document.createElement("div")
  var buttonElement = document.createElement("div");
  buttonElement.id = "button";
  buttonElement.innerHTML = "";
  buttonElement.appendChild(buttonElement);

}

var button = document.getElementById('my-button');
button.addEventListener('click',putNameInTitle() {
  inputValue = document.getElementById('my-input').value;
  console.log("You Input:", inputValue);
});

// Borrow the nameSort() function or my anagram() function from Lab 7.

// Attach an event listener to your button that does the following:

        // Gets the value of your input field
        // Runs that value through your sort() or anagram() function and saves the results.
        // Replaces the html in <div id=output> with the results.
