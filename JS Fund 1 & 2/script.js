// ---------Evry two lines now challenge---------
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)

// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     return
//   } else if (avgDolphins < avgKoalas) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//   } else {
//     console.log(`No team wins...`)
//   }
// }

// checkWinner(scoreDolphins, scoreKoalas);

// let tip
// let bill
// let calcTip = function calcTip(bill) {
//   if ( bill >= 50  && bill<= 300) {
//     return bill * .15
//   } else {
//     return bill * .20
//   }
// }
// // Array for bills
// let bills = new Array(125, 555, 44)
// // Array for bills
// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// // Array for total
// let totals = [calcTip(bills[0]) + calcTip(tips[0]), calcTip(bills[1]) + calcTip(tips[1]), calcTip(bills[2]) + calcTip(tips[2])]
// console.log(`The bills is ${bills}, The tips is ${tips}, The total is ${totals}`);

// let Jonas = {
//   firstName : 'Jonas',
//   numfriends : 3,
//   friends : ['Michel', 'Peter', 'Ahmed']

// }
// let bestFriend = Jonas.friends[0]
// let friend = 'Jonas has 3 friends, and his best friend is called Michel'
// 'Jonas has 3 friends, and his best friend is called Michel'
// console.log(`${Jonas.firstName} has ${Jonas.numfriends} friends, and his best friend called ${bestFriend}`)

// const jonas = {
//   firstName : 'Jonas',
//   lastName : 'Peter',
//   birthYear : 1991,
//   job : 'teacher',
//   friends : ['Michel', 'Man', 'Steven'],
//   hasDriverLicense : false,

//   calcAge : function() {
//     this.age = 2037 - this.birthYear
//     return this.age;
//   },
//   getSummary : function() {
//     return Information = `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'not'} driver's license`
//   }
// };
// console.log(jonas.getSummary())

// let mark = {
//   fullName : 'Mark Miller',
//   mass : 78,
//   height : 1.69,

//   calcBMI : function() {
//     return mark.BMI = this.mass / this.height * this.height
//   }
// }
// let john = {
//   fullName : 'John Smith',
//   mass : 92,
//   height : 1.95,

//   calcBMI : function() {
//     return john.BMI = this.mass / this.height * this.height
//   }
// }
// mark.calcBMI() > john.calcBMI() ? console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`) : console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`)

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// let tips = []
// let totals = []

// for (let i = 0; i < bills.length ; i++) {
//     let tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(tips + bills[i])
//   }

//   console.log(bills, tips, totals)

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }
