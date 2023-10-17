const ramWeight = 78; // Ram weight 
const ramHeight = 1.69; // Ram height 


const sakthiWeight = 92; // Sakthi's weight 
const sakthiHeight = 1.95; // Sakthi's height 
// Calculate Ram  the BMI formula
const ramBMI = ramWeight / (ramHeight ** 2);

// Calculate Sakthi BMI formula
const sakthiBMI = sakthiWeight / (sakthiHeight ** 2);

//  Ram's BMI to Sakthi's BMI and store the result in a variable
const ramHigherBMI = ramBMI > sakthiBMI;


console.log("Ram BMI: " + ramBMI);
console.log("Sakthi BMI: " + sakthiBMI);
console.log("Ram has a higher BMI than Sakthi? " + ramHigherBMI);


if (ramBMI > sakthiBMI){
    console.log("ram BMI is heigher than sakthi !")
}
else{
    console.log('sakthi BMI is heigher than ram !');
}
