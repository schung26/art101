/**
 * Author:  Sharon Chung and Leola Sanchez
 * Created:   11.15.2021
 * License: Public Domain.
 **/

//Return Gryffindor, Slytherin, Hufflepuff, and Ravenclaaw
//depending on length mod 4
function sortingHat(str) {
  len = str.length
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Slytherin"
  }
  else if (mod == 2) {
    return "Hufflepuff"
  }
  else if (mod == 3) {
    return "Ravenclaw"
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
    var name = document.getElementById("input").value;
    var house = sortingHat(name);
    newText = "<p>The Sorting Hat has placed you into " + house + "</p";
    document.getElementById("output").innerHTML = newText;
})
