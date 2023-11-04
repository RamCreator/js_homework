let lcu = ["Kaithi", "Vikram", "Leo"];

// variable in movie name
let movie1 = "kaithi";
let movie2 = "vikram";
let movie3 = "leo";
let movie4 = "RRR";

const lcuMovies =prompt("movie name:")

// chek the movie in lcu
if (lcu.includes(lcuMovies)) {
  console.log(lcuMovies,"is in the LCU.");
} else {
  console.log(lcuMovies,"is not in the LCU.");
}

