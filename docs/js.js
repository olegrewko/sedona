var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
  this.classList.add("active");
});

// var btn = document.getElementsByClassName("i__btn");
// btn.addEventListener("click", function() {
//   this.classList.add("active");
// });


function changeText () {
  if (this.innerText == "В ИЗБРАННОЕ") { // check if text inside is "More"
     this.innerText == "В ИЗБРАННОМ";    // If so, change to "Less"
  } else {
     this.innerText == "В ИЗБРАННОЕ";
  }
}

/*
Fetch the buttom element
*/
const button = document.body.querySelector('[data-target="#collapseExample"]');

/*
Add click event listener where we will provide logic that updates the button text
*/
button.addEventListener('click', function() {

  /*
  Update the text of the button to toggle beween "More" and "Less" when clicked
  */
  if(button.innerText.toLowerCase() === 'в избранное') {
    button.innerText = 'В ИЗБРАННОМ';
  }
  else {
    button.innerText = 'В ИЗБРАННОЕ';
  }
});
// input
document.querySelector('button').onclick = () => {
  console.log(document.querySelector('#one').value);
  //style
  document.querySelector('button').style.backgroundColor =
  document.querySelector('#one').value
}
document.querySelector('#one').oninput = () => {
  console.log(document.querySelector('#one').value);
  document.querySelector('#d').innerHTML =
  document.querySelector('#one').value
}
