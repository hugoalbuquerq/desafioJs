const getUserChoice = (userInput) => { 
    if(userInput.toLocaleLowerCase() === 'pedra'){
        userInput = 'pedra'
    }else if(userInput.toLocaleLowerCase() === 'papel'){
        userInput = 'papel'
    }else if(userInput.toLocaleLowerCase() === 'tesoura'){
        userInput = 'tesoura'
    }else{
        console.log("A opção está inválida!")
    }
    return userInput
}


function  getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {    
        return 'pedra';
    } else if (randomNumber === 1) {
        return 'papel';
    } else {        
        return 'tesoura';
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return 'Empate';
    } else if (userChoice == 'pedra' && computerChoice == 'tesoura') {
        return 'Você ganhou';
    }else if (userChoice == 'papel' && computerChoice == 'pedra') {
        return 'Você ganhou';
    } else if (userChoice == 'tesoura' && computerChoice == 'papel') {
        return 'Você ganhou';
    }else {
        return 'Você perdeu';
    }
    }

    function playGame() {
        let userChoice = getUserChoice(prompt("escolha : pedra, papel ou tesoura."));
        let computerChoice = getComputerChoice();
        console.log('Usuário escolheu: ' + userChoice);
        console.log('Computador escolheu: ' + computerChoice);
        console.log(determineWinner (userChoice, computerChoice))
    }
    
playGame()