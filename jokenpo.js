const getUserChoice = (userInput) => { 
    if(userInput.toLowerCase() === 'pedra'){
        userInput = 'rock'
    }else if(userInput.toLowerCase() === 'papel'){
        userInput = 'paper'
    }else if(userInput.toLowerCase() === 'tesoura'){
        userInput = 'scissors'
    }else{
        console.log("A opção está inválida!")
    }
    return userInput
}


function  getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {    
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {        
        return 'scissors';
    }
}

function determineWinner (userChoice, computerChoice) {
    if (userChoice == computerChoice) {
        return 'Empate';
    } else if (userChoice == 'rock' && computerChoice == 'scissors') {
        return 'Você ganhou';
    }else if (userChoice == 'paper' && computerChoice == 'rock') {
        return 'Você ganhou';
    } else if (userChoice == 'scissors' && computerChoice == 'paper') {
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