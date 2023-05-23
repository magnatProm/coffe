document.querySelector('.nav').addEventListener('click', (event) => {

    if (event.target.closest('.btn-circle')) {
      event.target.closest('.list__btn').classList.toggle('nav-menu_active');
    }
    scroll(event.target.innerHTML)
  })

function scroll(text) {
  const anchor = document.querySelector(`[data-anchor="${text}"]`);

  window.scrollTo({
    left: 0,
    top: anchor.offsetTop
  })
}

  // ___________

// slider bar
  sliderFunction(".slider__1")
  sliderFunction(".slider__2")

function sliderFunction(slider_name){

  const prev = document.querySelector(`${slider_name} .control__btn-left`),
  next = document.querySelector(`${slider_name} .control__btn-right`),
  item_slider = document.querySelectorAll(`${slider_name} .card`),
  carousel_slider = document.querySelector(`${slider_name} .slider__carousel`),
  window_slider = document.querySelector(`${slider_name} .slider__window`).offsetWidth;

  let offset = 0,
      number;


if (350 < window_slider) {
number = 3;
}
else if (350 > window_slider && 250 < window_slider) {
number = 2;
}
else {
number = 1;
}


let item_width = Math.floor(window_slider / number) + 'px';

item_slider.forEach(slide => {
slide.style.width = item_width;
})



const calculation = item_slider[0].offsetWidth * item_slider.length,
      calculation_1 = item_slider[0].offsetWidth * number,
      formula = calculation - calculation_1;


next.addEventListener('click', () => {

for (let i = 0; i < number; ++i) {

if (offset == formula){
continue;
}
if(offset <= formula){
offset += item_slider[0].offsetWidth;
}

}
carousel_slider.style.transform = `transLateX(-${offset}px)`;

})


prev.addEventListener('click', () => {

for (let i = 0; i < number; ++i){

if (offset == 0) {
 offset = +formula;
} else {
offset -= +item_slider[0].offsetWidth;
}

if (offset >= formula){
offset =0;
continue;
}

}

carousel_slider.style.transform = `transLateX(-${offset}px)`;
})
}
// slider bar


// button discount
document.querySelector('.discount').onclick=function(){
  alert('15% off')
}
// button discount





// _________________
window.addEventListener('click', (event) => {

  if (event.target.closest('.product')) {
      const basketLike = event.target.closest('.product');
      const basketLikeContent = {
        img: basketLike.querySelector('img').getAttribute('src'),
        title: basketLike.querySelector('.product__title').innerText,
        text: basketLike.querySelector('.product__text').innerText,
        id: basketLike.getAttribute('data-n'),
        btnLike: basketLike.querySelector('.product__inner .btn_like').className,
        price: basketLike.querySelector('.product__inner p').getAttribute('data-price'),
        discount: basketLike.getAttribute('data-discount'),
        btn: basketLike.querySelector('.svg').innerHTML,
      }
      // btn: basketLike.querySelector('.svg').outerHTML,

      // добавление товара
      if (event.target.closest('.product[data-n] .btn_like') || event.target.closest('.main-btn')) {
          add__choose(event.target, basketLikeContent)
      }// добавление товара

      // добавить стиль лайка
      if (event.target.closest('.btn_like')) {
        btn_like_style(basketLikeContent.id)
      }// добавить стиль лайка

      // добавить стиль
      if (event.target.closest('.main-btn')) {
        btn_style(basketLikeContent.id)
      }// добавить стиль

      basket_form_length()
  }

}, { capture: true });


function add__choose(occasion, item) {
  const form = (occasion.closest('.main-btn')) ? '.basket-product' : '.basket-like';
  const text_2 = (occasion.closest('.main-btn')) ? '' : `data-like="${item.id}"`;

  const deleteBasket = document.querySelectorAll(`.basket-like [data-like="${item.id}"]`).length;
  const deleteBasketP = document.querySelectorAll(`.basket-product [data-n="${item.id}"]`).length;
  
  const discount = (item.discount=='null') ? '' :  `<p class="btn-circle discount__btn">${item.discount}%</p>`;

  if (occasion.closest('.btn_like') && deleteBasket > 0) {
      document.querySelector(`.basket-like [data-like="${item.id}"]`).remove()
  }
  else if(occasion.closest('.main-btn') && deleteBasketP > 0) {
    document.querySelector(`.basket-product [data-n="${item.id}"]`).remove()
  }
  else {
      document.querySelector(`${form}`).insertAdjacentHTML("afterbegin",
      `
      <li class="product" ${text_2} data-n="${item.id}" data-discount="${item.discount}">
        <img class="product__img" src="${item.img}" alt="coffe">
        ${discount}
        <div class="product__info">
        <h3 class="product__title">${item.title}</h3>
        <p class="product__text list__text">${item.text}</p>
        <div class="product__inner">
        <p class="product__price" data-price="${item.price}">${item.price}$</p>
        <button class="${item.btnLike}">❤</button>

        <button class="main-btn">
        <svg class="svg" width="60" height="40" viewBox="56 0 400 330" fill="none">
        ${item.btn}
        </svg>
        </button>
        
        </div>
        </div>
        </li>
      `
      );
  }
}

function btn_like_style(like){
  const text=document.querySelectorAll(`[data-n="${like}"] .btn_like`);
  text.forEach(item=> item.classList.toggle('btn_like_active'))
}

function btn_style(btn){
  const text=document.querySelectorAll(`[data-n="${btn}"] .svg`);
  const svg__bread_top = document.querySelector(`[data-n="${btn}"] .svg__bread-top`);
  const fill_svg=`rgb(${random(255)} ${random(255)} ${random(255)})`;
  const fill_svg_2=`rgb(${random(255)} ${random(255)} ${random(255)})`;

  function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
  if(!svg__bread_top.hasAttribute('style')){    
      text.forEach(item=> {
        item.querySelector('.svg__bread-top').style.fill=fill_svg
        item.querySelector('.svg__bread-bottom').style.fill=fill_svg
        item.querySelector('.svg__pouring').style.fill=fill_svg_2
        console.dir(item)
      })
    } else{
      text.forEach(item=> {
        item.querySelector('.svg__bread-top').removeAttribute('style')
        item.querySelector('.svg__bread-bottom').removeAttribute('style')
        item.querySelector('.svg__pouring').removeAttribute('style')
      })
    }
}

function basket_form_length(name='product', number=0){
  const text=document.querySelectorAll(`.basket-${name} li`).length;
  const info=((text==0) ? '' : text)

  document.querySelectorAll('.list .list__item .label')[number].innerHTML=info;

  if(number==0){
    basket_form_length(name='like', number=1)
  } else{
    return
  }
}