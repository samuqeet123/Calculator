import inquirer from "inquirer"
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "User",
        message: "Enter your UserName"
    },
    {
        type: "input",
        name: "PIN",
        message: "Enter PIN Code"
    },
    {
        type: "list",
        name: "select",
        message: "What do you want?",
        choices: ["Fast Withdraw", "Check Balance", "Transfer Amount", "Deposite"]
    }
])

let opr = answer.select
let Balance: number = 50000

switch (opr) {
    case "Fast Withdraw":
        const amount = await inquirer.prompt([
            { 
              type: "list",
              name: "selectAmount",  
              message: "Select the amount",
              choices: [500, 1000, 5000, 10000, 20000]  
            }
        ])

        let SA = amount.selectAmount
        let selectedAmount = parseInt(SA)
        Balance -= selectedAmount
        break;

    case "Check Balance":
        Balance -= 3.75    
        console.log(Balance);
        break;
    
    case "Transfer Amount":
        const transferingAmount = await inquirer.prompt([
            {
                type: "input",
                name: "transfer",
                message: "Input Amount to Transfer",
            }
        ])
        let tt = transferingAmount.transfer
        let transferAmount = parseInt(tt)
        Balance -= transferAmount
        break;
        
    case "Deposite":
        const depositingAmount = await inquirer.prompt([
            {
                type: "input",
                name: "depositing",
                message: "Enter Amount to deposit"
            }
        ])
        let DA = depositingAmount.depositing
        let depositedAmount = parseInt(DA)
        Balance += depositedAmount
        break;
 
}
console.log(`Your curernt balance is ${Balance}`)