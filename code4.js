let bill = 275;
let tipPercentage;

// Determine the tip percentage based on the bill value
switch (true) {
    case (bill >= 50 && bill <= 300):
        tipPercentage = 15;
        break;
    default:
        tipPercentage = 20;
}

// Calculate the tip and total value
let tip = (tipPercentage / 100) * bill;
let totalValue = bill + tip;

// // Printing the result
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}`);
