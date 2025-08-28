'use strict'

const overlay = document.querySelector('.overlay');



// const btns = document.querySelectorAll('button');
const btn = document.querySelector('button');
btn.onclick = function () {
    // alert('Click');
    console.log('Click');
}

// btn.onclick = function() {
//     alert('Second click');
// // }
// btn.addEventListener('click', () => {
//     alert('addEventListener1');
// })
// btn.addEventListener('click', () =>{
//     alert('addEventListener2');
// })
// btn.addEventListener('click', () =>{
//     alert('Click3');
// })

btn.addEventListener('mouseenter', (e) =>{
    // alert('Hover');
    // console.log('Hover');
    // console.log(e);
    console.log(e.target);
    // console.log(e.target.remove());
});

// btn.addEventListener('click', (e) => {
//     console.log(e.target);
//     // e.target.remove();
// })

// const delete = (e) => {
//     e.target.remove()
// } error

// let i = 0
// const deleteElement = (e) => {
    // e.target.remove()
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.currentTarget);
    //     i++;
    //     if (i === 2) {
    //         btn.removeEventListener('click', deleteElement);     
    //     }
// }
  
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);



// const btns =  document.querySelectorAll('button');  

// btns.forEach(btn => {
    // btn.addEventListener('click', deleteElement)
    // btn.addEventListener('click', deleteElement, { once: true })
// });

// const link = document.querySelector('a');

// link.addEventListener('click', function(event) {
//     event.preventDefault();

//     console.log(event.target);
// })


   


