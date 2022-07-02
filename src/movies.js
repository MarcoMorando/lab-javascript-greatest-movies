const movies = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let moviesCopy = [...moviesArray];
  let directors = [];
  moviesCopy.forEach(x => {
    directors.push(x.director);
  });
  return directors;
}
console.log('------------------------------- Iteration 1: All directors? - Get the array of all directors. -------------------------------');
const mArray = getAllDirectors(movies)
console.log(mArray);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let moviesCopy = [...moviesArray];
  let dramaMov = [];
  dramaMov = moviesCopy.filter(x => x.director === 'Steven Spielberg').filter(y => y.genre.find(i=>i==='Drama'))
  return dramaMov.length
}
console.log('--------------- Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? ---------------');
const mArray2 = howManyMovies(movies)
console.log(mArray2);
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let moviesCopy = [...moviesArray];
  let totalSum = 0;
  for (let i = 0; i < moviesCopy.length; i++) {
    totalSum += moviesCopy[i].score;
  }
  return (totalSum/moviesCopy.length).toFixed(2)
}
console.log('--------------------- Iteration 3: All scores average - Get the average of all scores with 2 decimals. ----------------------');
const mArray3 = scoresAverage(movies)
console.log(mArray3);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let moviesCopy = [...moviesArray];
  let dramaMov = [];
  let result;
  dramaMov = moviesCopy.filter(y => y.genre.find(i=>i==='Drama'))
  result=scoresAverage(dramaMov)
  return result
}
console.log('-------------------------------- Iteration 4: Drama movies - Get the average of Drama Movies. -------------------------------');
const mArray4 = dramaMoviesScore(movies)
console.log(mArray4);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesCopy = [...moviesArray];
  moviesCopy.sort((x,y)=>x.year - y.year)
  return moviesCopy
}
console.log('------------------------ Iteration 5: Ordering by year - Order by year, ascending (in growing order) ------------------------');
const mArray5 = orderByYear(movies)
console.log(mArray5);
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesCopy = [...moviesArray];
  letOrderByTitle = [];
  let first20Mov = [];
  letOrderByTitle = moviesCopy.sort((x,y)=>(x.title < y.title) ? -1 : 0);
  for (let i = 0; i < 20; i++) {
    first20Mov.push(letOrderByTitle[i]);
  }
  return first20Mov
}
console.log('----------------------- Iteration 6: Alphabetic Order - Order by title and print the first 20 titles ------------------------');
const mArray6 = orderAlphabetically(movies)
console.log(mArray6);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
