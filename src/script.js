const btn = document.querySelector('#btn');
const dice1 = document.querySelector('#dice-1')
const dice2 = document.querySelector('#dice-2')
const label = document.querySelector('#label');


function rollDice() {
    let counter = 0;

    const intervalId = setInterval(() => {
        const randA = Math.floor(Math.random() * 6) + 1;
        const randB = Math.floor(Math.random() * 6) + 1;

        updateUi(randA, randB);

        counter++;
        
        if (counter === 13) {
            clearInterval(intervalId);

            if (randA === randB) {
                label.textContent = "TIE!";
            } else if (randA > randB) {
                label.textContent = 'PLAYER 1 WINS!';
            } else {
                label.textContent = 'PLAYER 2 WINS!';
            }
        }
    }, 200);
}


function updateUi(randA, randB) {
    dice1.src = `./src/images/dice${randA}.png`;
    dice2.src = `./src/images/dice${randB}.png`;
}


btn.addEventListener('click', rollDice);