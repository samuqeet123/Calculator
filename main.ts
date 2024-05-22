import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "GuessedNumberByProgram",
        message: "Choise the number between 0 to"
    },
    {
        type: "input",
        name: "GuessTheNumber",
        message: "Enter the guessed number"
    }
])
let guessed = parseInt(answer.GuessedNumberByProgram)
let yourGuess = parseInt(answer.GuessTheNumber)
// console.log(guessed)
// console.log(yourGuess)

let programGuessed = Math.floor(Math.random() * guessed)

if (programGuessed == yourGuess) {
    console.log("You Win")
}
else {
    console.log(`You lose..The write answer was ${programGuessed}.. Try again`)
}
