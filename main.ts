import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Write any thing you want"
    }
])

let ans = answer.sentence
let noOfCounts = ans.split(" ")
console.log(noOfCounts.length)


