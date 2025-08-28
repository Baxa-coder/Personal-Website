'use strict'

// const box = document.getElementById('box');

// console.log(box);


// const btns = document.getElementsByTagName('button');

// console.log(btns);
// console.log(btns[1]);

// const btns2 = document.getElementsByTagName('button')[1];

// console.log(btns2);

// const circles = document.getElementsByClassName('circle');

// console.log(circles);


// const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

// for(let i = 0; i < hearts.length; i++){
//     console.log(hearts[i]);
// }

// hearts.forEach(item => {
//     console.log(item);
// })

// const oneHeart = document.querySelector('.heart')

// console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = document.querySelectorAll('.heart'),
    // oneHeart = document.querySelector('.heart');
    oneHeart = wrapper.querySelector('.heart');

// console.dir(box);

box.style.backgroundColor = 'blue';
box.style.width = '500px';
// btns[1].style.borderRadius = '100%'
// circles.style.backgroundColor = 'red' error
circles[0].style.backgroundColor = 'red'
box.style.cssText = `background-color: green; width: 500px;`;



// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue'
// };

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue'
// });

// const div = document.createElement('div')
// const text = document.createTextNode('Here was I')

// div.classList.add('black');

// document.body.append(div);
// document.body.prepend(div);
// document.body.appendChild(div);

// wrapper.append(div);
// wrapper.prepend(div);

// hearts[1].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);
// hearts[0].replaceWith(circles[0]);

// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = 'Hello World';
// div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = 'Hello';
// div.textContent = "<h1>Hello World</h1>";


// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
















