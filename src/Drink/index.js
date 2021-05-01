

import './style.css';
import Layer from '../Layer/index'

const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
        <img src="/assets/cups/${props.id}.png" />
      </div>
      <div class="drink__info">
        <h3>${props.name}</h3>
      </div>
    </div>
    <div class="drink__controls">
      <button class="order-btn">Objednat</button>
    </div>
  `

  const drinkInfoElm = drinkElm.querySelector('.drink__info');
  props.layers.forEach((layer) => {
    drinkInfoElm.innerHTML += Layer(layer);
  })

  const orderBtnElm = drinkElm.querySelector('.order-btn');
  const drinkCupElm = drinkElm.querySelector('.drink__cup');
  console.log(props.ordered);

  const order = () => {
    if(props.ordered === false) {
      drinkCupElm.classList.add('drink__cup--selected');
      orderBtnElm.textContent = 'Zrušit';
      props.ordered = true;
    } else {
      drinkCupElm.classList.remove('drink__cup--selected');
      orderBtnElm.textContent = 'Objednat';
      props.ordered = false;
    }
  }

  orderBtnElm.addEventListener('click', order);

  return drinkElm;
};


export default Drink;