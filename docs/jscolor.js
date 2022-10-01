window.addEventListener('click', function (event){
  var btn = event.target.closest('.i__btn');
  console.log('window click', event.target);

  // btn.style.backgroundColor = 'green';
  // btn.textContent = 'В ИЗБРАННОМ';
    if((btn.innerText.toLowerCase() === 'в избранное') &&
    (btn.style.backgroundColor === 'rgb(130, 179, 211)')) {
      btn.innerText = 'В ИЗБРАННОМ';
      btn.style.backgroundColor = 'green';

  }
  else {
    btn.innerText = 'В ИЗБРАННОЕ';
    btn.style.backgroundColor = 'rgb(130, 179, 211)';

  }



}
);
const btn = document.body.querySelector('.i__btn');
console.log(btn.style);
let buttons = document.querySelectorAll('.i__btn');
//  console.log(btn.style.textContent);


const hC = (event) => {
  console.log(event.target.dataset.number);
  console.log(event.target.dataset.text);
}


buttons.forEach(button => {
  button.addEventListener('click', hC);
  // button.addEventListener('click',changeText)

})
