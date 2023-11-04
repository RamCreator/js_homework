// Test Data 1
const dolphinsScores = [96, 108, 89];
const koalasScores = [88, 91, 110];


const calculateAverage = (scores) => scores.reduce((total, score) => total + score, 0) / scores.length;
const dolphinsAverage = calculateAverage(dolphinsScores);
const koalasAverage = calculateAverage(koalasScores);

if (dolphinsAverage > koalasAverage) {
    console.log("Dolphins win the match!");
  } else if (koalasAverage > dolphinsAverage) {
    console.log("Koalas win the match!");
  } else if (dolphinsAverage === koalasAverage) {
    console.log("It's a draw. Both teams win!");
  } else {
    console.log("One team wins the match!");
  }

/////////////////////////////////////////////////


//  Task 2

// the scores for Dolphins and Koalas for Bonus 1
const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

// Calculate the average score for each team
const dolphinsAverageBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAverageBonus1 = calculateAverage(koalasScoresBonus1);

//  the winner or outcome for Bonus 1
if (dolphinsAverageBonus1 >= 100 && koalasAverageBonus1 >= 100) {
  if (dolphinsAverageBonus1 > koalasAverageBonus1) {
    console.log("Dolphins win the match in Bonus 1!");
  } else if (koalasAverageBonus1 > dolphinsAverageBonus1) {
    console.log("Koalas win the match in Bonus 1!");
  } else {
    console.log("It's a draw. Both teams win in Bonus 1!");
  }
} else {
  console.log("No team wins the trophy in Bonus 1 due to the minimum score requirement.");
}
  //////////////////////////////////////////////////////


  //Task 3

// the scores for Dolphins and Koalas for Bonus 2
const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

// Calculate the average score for each team
const dolphinsAverageBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAverageBonus2 = calculateAverage(koalasScoresBonus2);

// Check for a minimum score of 100 and determine the winner or outcome for Bonus 2
if (dolphinsAverageBonus2 >= 100 && koalasAverageBonus2 >= 100) {
  if (dolphinsAverageBonus2 > koalasAverageBonus2) {
    console.log("Dolphins win the match in Bonus 2!");
  } else if (koalasAverageBonus2 > dolphinsAverageBonus2) {
    console.log("Koalas win the match in Bonus 2!");
  } else {
    console.log("It's a draw. Both teams win in Bonus 2!");
  }
} else {
  console.log("No team wins the trophy in Bonus 2 due to the minimum score requirement.");
}