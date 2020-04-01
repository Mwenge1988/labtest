
// QUESTION: REWRITE THE FOLLOWING JAVASCRIPT WITH ES6 SYNTAX CONST, LET, ARROW FUNCTION AND TEMPLATE LITERALS


// var balance - 0;
let balance = 0;

// var deposit = function(amount)  {
//     balance = balance + amount;
//     console.log("Deposit " + amount + "into account");
// };

let deposit = (amount) => {
    balance += amount;
    console.log(`Deposit ${amount} into account`);
};

// var withdrawal - function(amount) {
//     balance = balance - amount;
//     console.log("Withdrawal " + amount + "from account");
// };

let withdrawal = (amount) => {
    balance -= amount;
    console.log(`Withdraw ${amount} from account`);
};

// var checkBalance = function() {
//     console.log("The balance is " + balance);
// };

let checkBalance = () => {
    console.log(`The balance is ${balance}`);
};

// // calls functions and outputs results
// checkBalance();
// deposit(100);
// checkBalance();
// withdrawal(25);
// checkBalance();

checkBalance();
deposit(100);
checkBalance();
withdrawal(25);
checkBalance();

// // Output 
// The balance is 0
// Deposit 100 into account
// The balance is 100
// Withdraw 25 from accountThe balance is 75