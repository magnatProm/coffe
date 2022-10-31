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
  let lengthCoffe = [];
  window.addEventListener('click', (event) => {

    const basketLike = event.target.closest('.card');
   
  
    if (event.target.closest('.basket-like__item .btn_like')){
      const like_form_data = event.target.closest(`.basket-like li`).getAttribute('data-like'),
            like_form_li = document.querySelector(`.basket-like li[data-like="${like_form_data}"]`),
            like_form_button = document.querySelector(`.card .card__info[data-n="${like_form_data}"] button`);

      like_form_button.classList.remove('btn_like_active');
      like_form_button.setAttribute('data-like', "");


      like_form_li.parentNode.removeChild(like_form_li);
    }

  
    const basketLikeContent = {
      title: basketLike.querySelector('h3').innerText,
      text: basketLike.querySelector('.card__inner p').innerText,
      img: basketLike.querySelector('img').getAttribute('src'),
      id: basketLike.querySelector('div').getAttribute('data-n'),
    }

  
    if (event.target.dataset.like == "") {
      event.target.setAttribute('data-like', "like");
      event.target.closest('button').classList.add('btn_like_active');
      lengthCoffe.push(basketLikeContent.id);
  
      document.querySelector('.basket-like').insertAdjacentHTML("beforeend",
        `
        <li class="dropdown__item list__btn basket-like__item" data-like="${basketLikeContent.id}">
        <img src="${basketLikeContent.img}" alt="coffe" class="basket-like__img">
        <div class="basket-like__text">
        <h3>${basketLikeContent.title}</h3>
        <p>${basketLikeContent.text}</p>
        <p>${basketLikeContent.id}</p>
        </div>
        <button class="btn-circle btn_like btn_like_active" data-like="like">❤</button>
        <div class="basket-like__inner" data-like="${basketLikeContent.id}">
        </div>
        </li>
        `
      );
    }

    // не нравиться
    else {
      const like_form = document.querySelector(`.basket-like li[data-like="${basketLikeContent.id}"]`);
      event.target.setAttribute('data-like', "");
      event.target.closest('button').classList.remove('btn_like_active');
      like_form.style.background = "#3f51b5";
      like_form.parentNode.removeChild(like_form);
    }


  
  
  }, { capture: true });
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


  onload = function () {  
    document.querySelector('.loading').style.display = "none";
  };