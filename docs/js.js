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
// *************************************************
// // const btnMinus = document.querySelector('[data-action="minus"]');
// // const btnPlus = document.querySelector('[data-action="plus"]');
// // const counter = document.querySelector('[data-counter]');

// window.addEventListener('click', function (event){
//   const counterWrapper = event.target.closest('.counter-wrapper');
//   const counter = counterWrapper.querySelector('[data-counter]');
//   // const counter = document.querySelector('[data-counter]');

//   console.log('click window');
//   console.log(event.target.dataset.action );

//   if(event.target.dataset.action === 'plus'){
//       console.log('plus' );
//       // const counterWrapper = event.target.closest('.counter-wrapper');
//       console.log(counterWrapper);
//       // const counter = counterWrapper.querySelector('[data-counter]');
//       console.log(counter);

//       // btnPlus.addEventListener('click', function() {
//           // if (parseInt(counter.innerText) > 1) {
//           counter.innerText = ++counter.innerText;
//           // }
//       // });

//   }
//   if(event.target.dataset.action === 'minus'){
//       console.log('minus' );

//       console.log(counterWrapper);

//       console.log(counter);


//       // btnMinus.addEventListener('click', function() {
//           // if (parseInt(counter.innerText) > 1) {
//               counter.innerText = --counter.innerText;
//           // }

//       // });

//       }

// });
// function showTooltip(targetItems, name){
//   $(targetItems).each(function(i){
//     var badgeDescription = $(this).attr('title');
//     $('body').append("<div class='"+ name +"' id='"+ name + i +"'>"+ badgeDescription +"</div>");

//     var tooltip = $('#'+name+i);
//     $(this).removeAttr("title").mouseenter(function(){
//       tooltip.css({opacity:0.9, display:'none'}).fadeIn();
//     }).mousemove(function(kmouse){
//       tooltip.css({left:kmouse.pageX+15, top:kmouse.pageY+15});
//     }).mouseleave(function(){
//       tooltip.fadeOut();
//     });
//   });
// }

// $(document).ready(function(){
//   showTooltip('.link-tooltip', 'tooltip-custom');
// });
