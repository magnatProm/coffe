const coffee=[
    {
        "img":'coffe1.png',
        "header":'coffe',
        "discount":55,
        "price":400,
        "text":'coffe coffe coffe',
        "id":1,
    },
    {
        "img":'coffe2.png',
        "header":'coffe',
        "discount":null,
        "price":400,
        "text":'coffe coffe coffe',
        "id":2,
    },
    {
        "img":'coffe3.png',
        "header":'coffe',
        "discount":null,
        "price":400,
        "text":'coffe coffe coffe',
        "id":3,
    },
    {
        "img":'coffe4.png',
        "header":'coffe',
        "discount":85,
        "price":400,
        "text":'coffe coffe coffe',
        "id":4,
    },
    {
        "img":'coffe1.png',
        "header":'coffe',
        "discount":40,
        "price":400,
        "text":'coffe coffe coffe',
        "id":5,
    },
    {
        "img":'coffe2.png',
        "header":'coffe',
        "discount":null,
        "price":400,
        "text":'coffe coffe coffe',
        "id":6,
    },
    {
        "img":'coffe3.png',
        "header":'coffe',
        "discount":null,
        "price":400,
        "text":'coffe coffe coffe',
        "id":7,
    },
    {
        "img":'coffe4.png',
        "header":'coffe',
        "discount":39,
        "price":400,
        "text":'coffe coffe coffe',
        "id":8,
    },
    {
        "img":'coffe4.png',
        "header":'coffe',
        "discount":null,
        "price":400,
        "text":'coffe coffe coffe',
        "id":9,
    },
    {
        "img":'coffe2.png',
        "header":'coffe',
        "discount":99,
        "price":400,
        "text":'coffe coffe coffe',
        "id":10,
    },
    {
        "img":'coffe4.png',
        "header":'coffe',
        "discount":null,
        "price":400,
        "text":'coffe coffe coffe',
        "id":11,
    },
    ]



    const slider_1=coffee.forEach(function (item) {

        let text_discount='';
        if(typeof(item.discount)=="number"){
            text_discount=`<p class='btn-circle discount__btn'>${item.discount}%</p>`;
        }

    document.querySelector('.slider__1 .slider__carousel').insertAdjacentHTML("afterbegin",
       `
        <figure class="card">
        <img class="card__img" src="img/${item.img}" alt="coffe">
        ${text_discount}
        <div class="card__info" data-n="${item.id}">
        <h3>${item.header}</h3>
        <figcaption>${item.text}</figcaption>
        <div class="card__inner">
        <p>${item.price}$</p>
        <button class="btn-circle btn_like" data-like>❤</button>
        </div>
        </div>
        </figure>
`);
 });

    const slider_2=coffee.forEach(function (item) {

    document.querySelector('.slider__2 .slider__carousel').insertAdjacentHTML("afterbegin",
       `
        <figure class="card">
        <img class="card__img" src="img/${item.img}" alt="coffe">
        <div class="card__info" data-n="${item.id}">
        <h3>${item.header}</h3>
        <figcaption>${item.text}</figcaption>
        <div class="card__inner">
        <p>$434</p>
        <button class="btn-circle btn_like" data-like>❤</button>
        </div>
        </div>
        </figure>
`);
 });