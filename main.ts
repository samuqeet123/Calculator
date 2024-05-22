import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "Question1",
        message: "What is the capital city of Pakistan?",
        choices: ["Karachi", "Islamabad", "Non of Them"]
    },
    {
        type: "list",
        name: "Question2",
        message: "Who is the Prime Minister of Pakistan?",
        choices: ["Nawaz Sharif", "Shahbaz Sharif", "Asim Munir"]

    },
    {
        type: "list",
        name: "Question3",
        message: "What is the formula of water?",
        choices: ["H2O", "CO2", "Non of Them"]
    },
    {
        type: "list",
        name: "Question4",
        message: "Which one is the fruit from the following",
        choices: ["Tomato", "Potato", "Non of Them"]
    }
])

let Q1 = answer.Question1
let score = 0

if (Q1 == "Karachi") {
    score += 1
}
else { score }

let Q2 = answer.Question2
if (Q2 == "Asim Munir") {
    score += 1
}
else { score }

let Q3 = answer.Question3
if (Q3 == "H2O") {
    score += 1
}
else { score }

let Q4 = answer.Question4
if (Q4 == "Tomato") {
    score += 1
}
else { score }

switch (score) {
    case 4:
        console.log("Excellent");
        break;
    case 3:
        console.log("Very Good");
        break;
    case 2:
        console.log("Keep it up");
        break;
    case 1:
        console.log("Nice try");
        break;
    default :
        console.log("letter luck next time");
        break;
}
