// let favouriteSong = "Wrecking Ball"
// let favouriteArtist = "Miley Cyrus"

// if (favouriteSong == "Wrecking Ball") {
//     console.log("You win £100")
// }
// else {
//     console.log("You owe me £100")
// }


// 

// dayOfTheWeek = "Tuesday"

// switch (dayOfTheWeek) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//      console.log("Alarm")
//      break
//     case "Saturday":
//     case "Sunday":
//         console.log("No alarm")
//         break
//     default:
//         console.log("Error")
//     break;
// }

// 
// Topping = "Chilli"

// switch (Topping) {
//     case "Cheese":
//     case "Pepperoni":
//     case "Onions":
//         console.log("I must have these on my pizza")
//         break
//     case "Chilli":
//     case "Peppers":
//     case "Anchovies":
//         console.log("I don't mind these on my pizza")
//         break
//     default:
//         console.log(`${Topping} should not be on a pizza`)
//         break




// }

// let theGoodCoffee = "North star"
// let coffeeIsGrinding = "pop"

// const grindThoseBeans = () => {
//     if (coffeeIsGrinding == false ){
//     console.log(`${theGoodCoffee} isnt grinding`)
//     }
//     else if (coffeeIsGrinding == true){
//         console.log(`${theGoodCoffee} is grinding`)
//     }
//     else {
//         console.log("Error")
//     }
// }

// grindThoseBeans()
// grindThoseBeans()

// let userBalance = 1000
// const cashWithdrawl = (accountNumber, amount) => {
//     userBalance -= amount
//     console.log(`You have withdrawn £${amount} from ${accountNumber}`)
//     console.log(`You have £${userBalance} left.`)



// }

// cashWithdrawl(1234567, 100)








// const dayOfTheWeek = (day) => {
//     return day
// }

// const alarmChecker = () => { 
//     switch (dayOfTheWeek) {
//             case "Monday":
//             case "Tuesday":
//             case "Wednesday":
//             case "Thursday":
//             case "Friday":
//              console.log("Alarm")
//              break
//             case "Saturday":
//             case "Sunday":
//                 console.log("No alarm")
//                 break
//             default:
//                 console.log("Error")
//             break;
//         }
//     }

// alarmChecker(dayOfTheWeek("Sunday"))





// Objects

// const person = {
//     name: "John",
//     age: 21,
//     haircolour: "Brown",
//     speak() {
//         console.log(`Hi my name is ${this.name}`)
//     }

// }
// person.speak()



// const pet = {
//     name: "Fluffy",
//     type: "dog",
//     colour: "white",
//     eat() {
//         console.log(`Hi my name is ${this.name}and I am eating.`)

//     },
//     drink() {
//         console.log(`Hi my name is ${this.name} and I am drinking`)
//     }
// }

// pet.eat()
// pet.drink()


// const coffeeShop = {
//     branch: "Chester",
//     drink: ["Cappucino", "Latte", "Espresso", "Hot Chocolate"],
//     food: ["Cheese Toastie", "Ham Wrap", "Egg Muffin"],
//     drinkPrices: [{
//         Cappucino: 2.50
//     }, {
//         Latte: 2.75
//     }, {
//         Espresso: 2.00
//     }],
//     order() {
//         console.log(`Your order is ${this.drink[1]}, £${this.drinkPrices[1]}  and ${this.food[2]}`)
//     }

// }

// coffeeShop.order()
// console.log (coffeeShop.drinkPrices)

// // classes

// const bunny = {
//     name: "floppy",
//     age: 0,
//     hop() {
//         console.log("I am hopping")
//     },
//     birthday() {
//         return this.age++
//     }
// }

// bunny.birthday()
// console.log(bunny)



// class Bunny {
//     constructor(name, gender) {
//         this.name = name
//         this.gender = gender
//         this.age = 0
//         this.hops = 0
//     }
//     increaseAge() {
//         this.age++
//     }
//     increaseHops() {
//         this.hops++
//     }
// }

// const freddie = new Bunny("Freddie","Male")
// freddie.increaseAge()
// console.log(freddie.age)

// class Person {
//     constructor(name, dateOfBirth, eyeColour) {
//         this.name = name
//         this.dateOfBirth = dateOfBirth
//         this.eyeColour = eyeColour
//         this.nose = true
//         this.ears = true
//         this.legs = "yes"
//         this.age = 0
//         this.hungerLevel = 100
        

//     }
//       increaseAge() {
//           this.age++
//       }
//       removeNose() {
//           this.nose = false

//       }
//       eat() {
//           this.hungerLevel -= 20
//       }
//       workout() {
//           this.hungerLevel += 30
//       }
// }

// const david = new Person("David","01.01.2003", "lime green")
// david.increaseAge()
// david.removeNose()
// david.eat()
// david.workout()
// console.log(david)


// Car Park challenge


class Car {
    constructor (reg, hours, day) {
        this.reg = reg
        this.hours = hours
        this.day = day
        this.rate = 2.00
        this.total = 0
    }
    totalToPay() {
        if (this.day == "Sunday") {
            this.total = this.rate * (this.hours/2)
        }
        else if (this.hours > 8) {
            this.total = 10
        }
      else { this.total = this.rate * this.hours
      }
    }

   
}

const car1 = new Car("t435wdv", 11, "Wednesday")
car1.totalToPay()
console.log(`Your car is reg number ${car1.reg}, you have parked for ${car1.hours} hours, the total amount to pay is £${car1.total}`)


class Staff extends Car {
    constructor(reg, hours, day, staffNumber, credits) {
    super(reg, hours,day)
    this.staffNumber = staffNumber
    this.credits = credits
    }
   useCredits() {
this.credits -= this.hours

   }
}
const ben = new Staff("x123rty", 4, "Tuesday", "456789", 50 )
ben.useCredits()
console.log(`You are staff number ${ben.staffNumber}, you parked for ${ben.hours} hours you have ${ben.credits} credits left on your account.`)
