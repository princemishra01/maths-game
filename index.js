const symbols = ['+', '-', '*', '/'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function resetNumbers() {
    let nums = document.querySelectorAll('.num');
    nums.forEach(num => {
        num.textContent = numbers[Math.floor(Math.random() * numbers.length)];
    });

    // in the symbol div put the random symbol from the symbols array
    let symbol = document.querySelector('.symbol');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    document.querySelector('#answer').textContent = '';
}

function fillAnswer() {
    let answer = document.querySelector('#answer');
    let nums = document.querySelectorAll('.num');
    let symbol = document.querySelector('.symbol');

    let a = parseInt(nums[0].textContent);
    let b = parseInt(nums[1].textContent);
    let c = parseInt(nums[2].textContent);

    let num1 = a * 100 + b * 10 + c;

    a = parseInt(nums[3].textContent);
    b = parseInt(nums[4].textContent);
    c = parseInt(nums[5].textContent);

    let num2 = a * 100 + b * 10 + c;

    let result;

    switch (symbol.textContent) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    console.log(num1, num2 ,result);

    answer.textContent = result;
    console.log(answer.value);
}

function pressSpaceKey(e) {
    if (e.key !== ' ') {
        return ;
    }
    let answer = document.querySelector('#answer');
    if(answer.textContent !== '') {
        resetNumbers();
    } else {
        fillAnswer();
    }
}

resetNumbers();

document.addEventListener('keydown', pressSpaceKey);

document.getElementById('next').addEventListener('click', resetNumbers);

document.getElementById('get-ans').addEventListener('click', fillAnswer);
