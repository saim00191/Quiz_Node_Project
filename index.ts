#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//***************//
    //QUIZ//
//***************//

let score = 0

console.log(chalk.blue.bold("Welcome to the JavaScript Quiz!"))

let condition = true

while (condition) {
    let Q1 = await inquirer.prompt([{
        name:"Q1",
        type:"list",
        message:"TypeScript is a superset of which programming language?",
        choices:["a) JavaScript" , "b) Python" , "c) Java" , "d) C++"]
    }]);
        if(Q1.Q1 === "a) JavaScript"){
            console.log(chalk.green.bold("Correct Answer!"));
            score++
        }else{
            console.log(chalk.red.bold("Wrong Answer!"));
        }
    
    let Q2 = await inquirer.prompt([{
        name:"Q2",
        type:"list",
        message:"Which of the following is not a valid JavaScript data type?",
        choices:["a) Number" , "b) String" , "c) Boolean" , "d) Object"]
    }]);
        if(Q2.Q2 === "d) Object"){
            console.log(chalk.green.bold("Correct Answer!"));
            score++
        }else{
            console.log(chalk.red.bold("Wrong Answer!"));
    }
    
    let Q3 = await inquirer.prompt([{
        name:"Q3",
        type:"list",
        message:"Which of the following is not a valid JavaScript operator?",
        choices:["a) ++" , "b) --" , "c) #" , "d) /"]
    }]);
        if(Q3.Q3 === "c) #"){
            console.log(chalk.green.bold("Correct Answer!"));
            score++
        }else{
            console.log(chalk.red.bold("Wrong Answer!"));
    }
    
    let Q4 = await inquirer.prompt([{
        name:"Q4",
        type:"list",
        message:"TypeScript code is compiled into which language?",
        choices:["a) JavaScript" , "b) Typescript" , "c) Java" , "d) Python"]
    }]);
    
        if(Q4.Q4 === "a) JavaScript"){
            console.log(chalk.green.bold("Correct Answer!"));
            score++
        }else{
            console.log(chalk.red.bold("Wrong Answer!"));
    }
    
    let Q5 = await inquirer.prompt([{
        name:"Q5",
        type:"list",
        message:"What keyword is used to declare a variable in TypeScript?",
        choices:["a) let" , "b) var" , "c) const" , "d) Both a & c"]
    }]);
        if(Q5.Q5 === "d) Both a & c"){
            console.log(chalk.green.bold("Correct Answer!"));
            score++
        }else{
            console.log(chalk.red.bold("Wrong Answer!"));
    }
    
    let Round1Complete = await inquirer.prompt([
        {
        name : "Round1Complete",
        type : "list",
        message : "Round 1 Complete!",
        choices : ["a) Next Round" , "b) Exit"]
        }
    ])
    if(Round1Complete.Round1Complete === "a) Next Round"){
        console.log(chalk.blue.bold("Round 2 Starting!"))
        let Q6 = await inquirer.prompt([{
            name:"Q6",
            type:"list",
            message:"Which of the following data types is not supported by TypeScript?",
            choices:["a) number" , "b) char" , "c) boolean" , "d) string"]
        }]);
            if(Q6.Q6 === "b) char"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
        }

        let Q7 = await inquirer.prompt([{
            name:"Q7",
            type:"list",
            message:"In TypeScript, what symbol is used for single-line comments?",
            choices:["a) //" , "b) #" , "c) /" , "d) <!--"]
        }]);
            if(Q7.Q7 === "a) //"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
        }

        let Q8 = await inquirer.prompt([{
            name:"Q8",
            type:"list",
            message:"Which command is used to install TypeScript globally?",
            choices:["a) npm install typescript" , "b) npm typescript" , "c) npm install -g typescript" , "d) install typescript"]
        }]);
            if(Q8.Q8 === "c) npm install -g typescript"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
        }

        let Q9 = await inquirer.prompt([{
            name:"Q9",
            type:"list",
            message:"What does the 'any' type signify in TypeScript?",
            choices:["a) It represents an unknown type." , "b) It represents a string type." , "c) It represents any type." , "d) None of these."]
        }]);
            if(Q9.Q9 === "c) It represents any type."){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
        }

        let Q10 = await inquirer.prompt([{
            name:"Q10",
            type:"list",
            message:"How do you define an optional parameter in TypeScript?",
            choices:["a) By using the ! symbol" , "b) By using the # symbol" , "c) By using the ? symbol" , "d) By using the $ symbol"]
        }]);
            if(Q10.Q10 === "c) By using the ? symbol"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
        }
        console.log(chalk.blue.bold("Round 2 Complete!"))

        let Round2Complete = await inquirer.prompt(
            {
                name : "Round2Complete",
                type : "list",
                message : "Round 2 Complete!",
                choices : ["a) Next Round" , "b) Exit"]
            }
        )
        if(Round2Complete.Round2Complete === "a) Next Round"){
            console.log(chalk.blue.bold("Round 3 Starting!"))

            let Q11 = await inquirer.prompt([{
                name:"Q11",
                type:"list",
                message:"Which of the following is used to define an array type in TypeScript?",
                choices:["a) []" , "b) array" , "c) Array" , "d) Array<>"]
            }]);
                if(Q11.Q11 === "a) []"){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
            }

            let Q12 = await inquirer.prompt([{
                name:"Q12",
                type:"list",
                message:"Which keyword is used to define a function in TypeScript?",
                choices:["a) func" , "b) fn" , "c) function" , "d) <function>"]
            }]);
                if(Q12.Q12 === "c) function"){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
            }

            let Q13 = await inquirer.prompt(
                {
                    name:"Q13",
                    type:"list",
                    message:"Which TypeScript feature is used to define a union type?",
                    choices:["a) &" , "b) ;" , "c) |" , "d) /"]
                }
            )
            if(Q13.Q13 === "c) |"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
            }

            let Q14 = await inquirer.prompt(
                {
                    name:"Q14",
                    type:"list",
                    message:"What is the 'never' type used for in TypeScript?",
                    choices:["a) To represent a function that never returns" , "b) To represent a type that cannot be assigned a value" , "c) To represent a value that never occurs " , "d)  To represent an infinite loop"]
                }
            )
            if(Q14.Q14 === "a) To represent a function that never returns"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
            }

            let Q15 = await inquirer.prompt(
                {
                    name:"Q15",
                    type:"list",
                    message:"Which command is used to compile a TypeScript file?",
                    choices:["a) tsc compile filename.ts" , "b) tsc filename.ts" , "c) tscompile filename.ts" , "d) compile filename.ts"]
                }
            )
            if(Q15.Q15 === "b) tsc filename.ts"){
                console.log(chalk.green.bold("Correct Answer!"));
                score++
            }else{
                console.log(chalk.red.bold("Wrong Answer!"));
            }
            console.log(chalk.blue.bold("Round 3 Complete!"))

            let Round3Complete = await inquirer.prompt(
                {
                    name : "Round3Complete",
                    type : "list",
                    message : "Round 3 Complete!",
                    choices : ["a) Next Round" , "b) Exit"]
                }
            )

            if(Round3Complete.Round3Complete === "a) Next Round"){
                let Q16 = await inquirer.prompt(
                    {
                        name:"Q16",
                        type:"list",
                        message:"Which compiler option is used to watch for file changes and recompile automatically in TypeScript?",
                        choices:["a) --auto" , "b) --live" , "c) --reload" , "d) --watch"]
                    }
                )
                if(Q16.Q16 === "d) --watch"){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
                }

                let Q17 = await inquirer.prompt(
                    {
                        name:"Q17",
                        type:"list",
                        message:"Which keyword is used to throw an error in TypeScript?",
                        choices:["a) raise" , "b) throw" , "c) error" , "d) none of these"]
                    }
                )   
                if(Q17.Q17 === "b) throw"){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
                }

                let Q18 = await inquirer.prompt(
                    {
                        name:"Q18",
                        type:"list",
                        message:"Which popular code editor has built-in support for TypeScript?",
                        choices:["a) Sublime Text" , "b) IntelliJ IDEA" , "c) Atom" , "d) VS Code"]
                    }
                )
                if(Q18.Q18 === "d) VS Code"){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
                }

                let Q19 = await inquirer.prompt(
                    {
                        name:"Q19",
                        type:"list",
                        message:"Which TypeScript plugin is used to format code according to a specified style guide?",
                        choices:["a) ESLint" , "b) Prettier " , "c) TSLint" , "d) TypeScript Formatter"]
                    }
                )
                if(Q19.Q19 === "b) Prettier "){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
                }

                let Q20 = await inquirer.prompt(
                    {
                        name:"Q20",
                        type:"list",
                        message:"Which command is used to start a TypeScript debugger session in Visual Studio Code?",
                        choices:["a)  Ctrl + Shift + N" , "b) Ctrl + F5" , "c) F5" , "d)  Ctrl + Shift + B"]
                    }
                )   
                if(Q20.Q20 === "c) F5" ){
                    console.log(chalk.green.bold("Correct Answer!"));
                    score++
                }else{
                    console.log(chalk.red.bold("Wrong Answer!"));
                }

                console.log(chalk.blue.bold("Round 4 Complete!"))

                console.log(`Your Score is ${chalk.yellow.bold(score)} out of ${chalk.yellow.bold("20")}`);
                
                if (score > 15) {
                    console.log(chalk.green.bold("PASS"));
                    condition = false
                } else {
                    console.log(chalk.red.bold("FAIL"));
                    condition= false
                }
            } else {
                //Round 3
                condition = false
                console.log(chalk.blue.bold("Game Over!"))
                console.log(chalk.blue.bold(`Your Score is ${chalk.yellow.bold(score)} out of ${chalk.yellow.bold("15")}`))
            }
        } else {
            //Round 2
            condition = false
            console.log(chalk.blue.bold("Game Over!"))
            console.log(chalk.blue.bold(`Your Score is ${chalk.yellow.bold(score)} out of ${chalk.yellow.bold("10")}`))
        }

    } else {
        //Round 1
        condition = false
        console.log(chalk.blue.bold("Game Over!"))
        console.log(chalk.blue.bold(`Your Score is ${chalk.yellow.bold(score)} out of ${chalk.yellow.bold("5")}`))
    }
}