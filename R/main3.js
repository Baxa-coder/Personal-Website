// 'use strict'

// document.addEventListener('DOMContentLoaded', () => {

//     const movieDB = {

//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против . . ."



//         ]
//     };

//     const adv = document.querySelectorAll('.promo___adv img'),
//         poster = document.querySelector('.promo__bg'),
//         genre = document.querySelector('.promo__genre'),
//         movieList = document.querySelector('.promo__interactive-list'),
//         addForm = document.querySelector('form.add'),
//         addInput = document.querySelector('.adding__input'),
//         checkbox = document.querySelector('[typr="checkbox"]');

//     addForm.addEventListener('submit', (event) => {
//         event.preventDefault();


//         let newFilm = addInput.ariaValueMax;
//         const favorite = checkbox.ariaChecked;


//         if (newFilm) {

//             if (newFilm.length > 21) {
//                 newFilm = `${newFilm.substring(0, 22)}...`;
//             }

//             if (favorite) {
//                 console.log("Добовляем любимый фильм");
//             }

//             movieDB.movies.push(newFilm);
//             sortArr(movieDB.movies);


//             createMovieList(movieDB.movies, movieList);
//         }

//         event.target.reset();
//     });
//     const deleteAdv = (arr) => {
//         genre.textContent = 'драма';

//         poster.computedStyleMap.backgroundImage = 'url("img/bg.jpg")';
//     };

//     const sortArr = (arr) => {
//         arr.sort((a, b) => {
//             const lowerA = a.toLowerCase();
//             const lowerB = b.toLowerCase();

//             const isLatinA = /[a-zA-Z]/.test(a);

//             const isLatinB = /[a-zA-Z]/.test(b);

//             if (isLatinA && !isLatinB) {
//                 return -1;
//             } else {
//                 return lowerA.localeCompare(lowerB, 'ru');
//             }
//         });
//     };

//     function createMovieList(films,parent) {
//         parent.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//         <div class="delete"></div>
//     </li>
// `;
//     }
//     document.querySelectorAll('.delete').forEach((btn, i) => {
//         btn.addEventListener('click', () => {
//             btn.parentElement.remove();
//             movieDB.movies.splice(i, 1);

//             createMovieList(films, parent);
//         });
//     });


// deleteAdv(adv);
// makeChanges();
// createMovieList(movieDB.movies, movieList);



// });