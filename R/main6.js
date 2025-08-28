// const numberOFFilms = prompt("сколько фильмов вы уже посмотрели")

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: {},
//     privat: false,
// }

// const a = prompt('Один из последных фильмов?', "")
// const b = prompt('На сколько оцените его?', "")
// const c = prompt('Один из последных посмотренных  фильмов?', "")
// const d = prompt('На сколько оцените его', "")


// personalMovieDB.movies[a] = b
// personalMovieDB.movies[с] = d

// console.log(personalMovieDB);



// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последных посмотренных  фильмов?', ''),
//         b = prompt('На сколько оцените его', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done')
//     } else {
//         console.log('error');
//         i--;
//     }
// }

if (personalMovieDB.count < 10) {
    console.log("Просмотренно давольно мало фильмов");
}else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
}else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
}else{
    console.log("Произашла ошибка"); 
}

console.log(personalMovieDB)
