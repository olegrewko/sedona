// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');

window.addEventListener('click', function (event){
  const counterWrapper = event.target.closest('.counter-wrapper');
  const counter = counterWrapper.querySelector('[data-counter]');
  // const counter = document.querySelector('[data-counter]');

  console.log('click window');
  console.log(event.target.dataset.action );

  if(event.target.dataset.action === 'plus'){
      console.log('plus' );
      // const counterWrapper = event.target.closest('.counter-wrapper');
      console.log(counterWrapper);
      // const counter = counterWrapper.querySelector('[data-counter]');
      console.log(counter);

      // btnPlus.addEventListener('click', function() {
          // if (parseInt(counter.innerText) > 1) {
          counter.innerText = ++counter.innerText;
          // }
      // });

  }
  if(event.target.dataset.action === 'minus'){
      console.log('minus' );

      console.log(counterWrapper);

      console.log(counter);


      // btnMinus.addEventListener('click', function() {
          // if (parseInt(counter.innerText) > 1) {
              counter.innerText = --counter.innerText;
          // }

      // });

      }

});
