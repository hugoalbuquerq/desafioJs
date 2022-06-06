let userInput = prompt("escolha : pedra, papel ou tesoura.")

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'pedra'   userInput === 'papel'   userInput === 'tesoura') {
    } 
    else {
        console.log('Escolha inválida');
    }

}
 getUserChoice(userInput)

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

