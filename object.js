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
        <div class="card product" data-n="${item.id}" data-like="${item.id}" data-discount="${item.discount}">
        <img class="card__img product__img" src="img/${item.img}" alt="coffe">
        ${text_discount}
        <div class="card__info product__info">
        <h3 class="product__title">${item.header}</h3>
        <p class="card__text product__text">${item.text}</p>
        <div class="card__inner product__inner">
        <p data-price="${item.price}">${item.price}$</p>
        <button class="btn-circle btn_like">❤</button>

        <button class="main-btn">
        <svg class="svg" data-svg="${item.id+item.img}" width="60" height="40" viewBox="56 0 400 330" fill="none">
            <path class="svg__bread-top" d="M486.449 131.501C509.949 131.501 507.949 97.0005 486.449 97.0005C482.123 45.6637 450.949 15.5004 405.449 8H106.949C47.6842 10.0426 21.449 78.5 26.9491 97.0005C6.44897 97.0005 -2.05099 128 26.9491 131.501H46.4491H466.449H486.449Z" fill="#82cfbf"/>
            <path class="svg__pouring" d="M466.449 185.944C489.949 173 495.449 146.5 466.449 131.501H46.4491C19.4491 143 19.4491 173 46.4491 185.042L466.449 185.944Z" fill="#fff"/>
            <path class="svg__bread-bottom" d="M26.9491 185C0.449083 186.5 2.94909 220.5 26.9491 220.5C25.4491 262 54.5692 301.551 107.449 308.5H406.949C462.449 299 479.779 267.013 487.449 220.5C516.449 212 502.449 187.5 491.949 186L466.449 185.944L46.4491 185.042L26.9491 185Z" fill="#82cfbf"/>
            <path d="M486.449 97.0005C507.949 97.0005 509.949 131.501 486.449 131.501H466.449M486.449 97.0005H440.449M486.449 97.0005C482.123 45.6637 450.949 15.5004 405.449 8H106.949C47.6842 10.0426 21.449 78.5 26.9491 97.0005M26.9491 97.0005C6.44897 97.0005 -2.05099 128 26.9491 131.501H46.4491M26.9491 97.0005H352.949M26.9491 220.5C2.94909 220.5 0.449083 186.5 26.9491 185L46.4491 185.042M26.9491 220.5C50.9491 220.5 70.4491 220.5 70.4491 220.5M26.9491 220.5C25.4491 262 54.5692 301.551 107.449 308.5H406.949C462.449 299 479.779 267.013 487.449 220.5M487.449 220.5C516.449 212 502.449 187.5 491.949 186L466.449 185.944M487.449 220.5H158.949M466.449 185.944C489.949 173 495.449 146.5 466.449 131.501M466.449 185.944L46.4491 185.042M466.449 131.501H46.4491M46.4491 131.501C19.4491 143 19.4491 173 46.4491 185.042M103.449 220.5H125.449M385.449 97.0005H406.949M307.449 43H327.949M361.949 43C406.307 41.1837 423.687 43.2132 436.949 61.5" stroke="black" stroke-width="16" stroke-linecap="round"/>
        </svg>
        </button>
        
        </div>
        </div>
        </div>
`);
 });

    const slider_2=coffee.forEach(function (item) {

    document.querySelector('.slider__2 .slider__carousel').insertAdjacentHTML("afterbegin",
       `
        <div class="card product" data-n="${item.id}" data-like="${item.id}" data-discount="${item.discount}">
        <img class="card__img product__img" src="img/${item.img}" alt="coffe">
        <div class="card__info product__info">
        <h3 class="product__title">${item.header}</h3>
        <p class="card__text product__text">${item.text}</p>
        <div class="card__inner product__inner">
        <p data-price="${item.price}">${item.price}</p>
        <button class="btn-circle btn_like">❤</button>

        <button class="main-btn">
        <svg class="svg" data-svg="${item.img+item.id}" width="60" height="40" viewBox="56 0 400 330" fill="none">
            <path class="svg__bread-top" d="M486.449 131.501C509.949 131.501 507.949 97.0005 486.449 97.0005C482.123 45.6637 450.949 15.5004 405.449 8H106.949C47.6842 10.0426 21.449 78.5 26.9491 97.0005C6.44897 97.0005 -2.05099 128 26.9491 131.501H46.4491H466.449H486.449Z" fill="#82cfbf"/>
            <path class="svg__pouring" d="M466.449 185.944C489.949 173 495.449 146.5 466.449 131.501H46.4491C19.4491 143 19.4491 173 46.4491 185.042L466.449 185.944Z" fill="#fff"/>
            <path class="svg__bread-bottom" d="M26.9491 185C0.449083 186.5 2.94909 220.5 26.9491 220.5C25.4491 262 54.5692 301.551 107.449 308.5H406.949C462.449 299 479.779 267.013 487.449 220.5C516.449 212 502.449 187.5 491.949 186L466.449 185.944L46.4491 185.042L26.9491 185Z" fill="#82cfbf"/>
            <path d="M486.449 97.0005C507.949 97.0005 509.949 131.501 486.449 131.501H466.449M486.449 97.0005H440.449M486.449 97.0005C482.123 45.6637 450.949 15.5004 405.449 8H106.949C47.6842 10.0426 21.449 78.5 26.9491 97.0005M26.9491 97.0005C6.44897 97.0005 -2.05099 128 26.9491 131.501H46.4491M26.9491 97.0005H352.949M26.9491 220.5C2.94909 220.5 0.449083 186.5 26.9491 185L46.4491 185.042M26.9491 220.5C50.9491 220.5 70.4491 220.5 70.4491 220.5M26.9491 220.5C25.4491 262 54.5692 301.551 107.449 308.5H406.949C462.449 299 479.779 267.013 487.449 220.5M487.449 220.5C516.449 212 502.449 187.5 491.949 186L466.449 185.944M487.449 220.5H158.949M466.449 185.944C489.949 173 495.449 146.5 466.449 131.501M466.449 185.944L46.4491 185.042M466.449 131.501H46.4491M46.4491 131.501C19.4491 143 19.4491 173 46.4491 185.042M103.449 220.5H125.449M385.449 97.0005H406.949M307.449 43H327.949M361.949 43C406.307 41.1837 423.687 43.2132 436.949 61.5" stroke="black" stroke-width="16" stroke-linecap="round"/>
        </svg>
        </button>

        </div>
        </div>
        </div>
`);
 });