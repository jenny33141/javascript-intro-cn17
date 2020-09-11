// let accBal = 1000
// let amountToWithdraw = 200

// console.log(accBal + amountToWithdraw )
// console.log(accBal - amountToWithdraw)
// console.log(accBal / amountToWithdraw)
// console.log(accBal * amountToWithdraw)
// console.log(accBal += amountToWithdraw)
// console.log(accBal -= amountToWithdraw)
// console.log(accBal *= amountToWithdraw)
// console.log(accBal /= amountToWithdraw)
// console.log (accBal * amountToWithdraw)
// definition of a variable = is putting something in a box 
// declaration of a variable = using the variablelet pinTries = 5

let accountNumber = "123456"
const pinVerification = (pin) => {
    

    if (pin == "1235") {
        console.log("Welcome, what would you like to do today?")
        chooseService("Deposit cash")

    } else {
        console.log("Sorry, incorrect pin")
        pinTryCount()
    }
}

const pinTryCount = () => {
   
    // for (pinTries = 0; pinTries > 4; pinTries++) {
    //     console.log("You have exceeded pin tries")
    // }
    if (pinTries > 3) {
        console.log("You have exceeded pin tries")
    }
}
let userBalance = 1000

const withdrawCash = (account, amount) => {

    userBalance -= amount
    if (amount > 250) {
        console.log("This exceeds your daily withdrawal limit")
    } else {
        console.log(`You have withdrawn £${amount} from ${accountNumber}`)
        console.log(`You have £${userBalance} left.`)
    }


}

const depositCash = (account, amount) => {
    userBalance += amount
    if (amount > 250) {
        console.log("This exceeds your daily deposit limit")
    } else {
        console.log(`You have deposited £${amount} into ${accountNumber} your balance is now £${userBalance}`)
    }
}
const chooseService = (service) => {

    if (service == "Withdraw cash") {

        console.log("Withdrawing cash")
        withdrawCash(123456, 250)

    } else if (service == "Check balance") {
        console.log(`Your balance is £${userBalance}`)


    } else if (service == "Deposit cash") {
        console.log("Depositing cash")
        depositCash(123456, 250)
    } else {
        console.log("What other service would you like?")
    }
}
const pinChange = () => {

}


pinVerification(1234)