import inquirer from "inquirer";
let welcome = new Promise((resolve, reject)=> {
    console.log("Loading......")
    setTimeout(()=> {
        resolve(console.log("Welcome to calculator"))
    },2000)
})
async function calculator() {
await welcome
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "num1",
        message: "enter the first number in num1"
    }, 
    {
        type: "input",
        name: "num2",
        message: "enter the second number in num2"
    },
    {
        type: "list",
        name: "operation",
        message: "pick your desire operation",
        choices: ["addition", "substraction", "multiplication", "division"]
    }
])
// console.log(answer.num1)
// console.log(answer.num2)
// console.log(answer.operation)
let num1 = parseInt(answer.num1)
let num2 = parseInt(answer.num2)
let result
    let addition = () => {
        result = num1 + num2
        return result
    }

    let substraction = () => {
        result = num1 - num2
        return result
    }

    let multiplication = () => {
        result = answer.num1 * answer.num2
        return result
    }

    let division = () => {
        result = answer.num1 / answer.num2
        return result.toFixed(3)
    }
    switch(answer.operation){
        case "addition":
            console.log(addition())
            break;

        case "substraction":
            console.log(substraction())
            break;

        case 'multiplication':
            console.log(multiplication())
            break;

        case "division":
            console.log(division())
            break;
    }
    let array = []
    return array.push(result)
}

async function wait() {
    do {await calculator()
        var answer = await inquirer.prompt([
            {
                type: "list",
                name: "continue",
                message: "Do you want to continue?",
                choices: ["YES", "NO"]
            }
        ])
        var AC = answer.continue == "YES"
    }
    while (AC)
}
await wait()
console.log()


