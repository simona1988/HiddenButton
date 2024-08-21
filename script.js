let winnerIndex;

function generateButtons() {
    const container = document.getElementById('buttons-container');
    const numberInput = document.getElementById('numberInput');
    const n = parseInt(numberInput.value);
    container.innerHTML = '';
    document.getElementById('result').textContent = '';
    winnerIndex = Math.floor(Math.random() * n);
    for (let i = 0; i < n; ++i) {
        const button = document.createElement('button');
        button.className = 'btn btn-primary btn-lg';
        button.textContent = `Buton ${i + 1}`;
        button.onclick = () => checkWinner(i);
        container.appendChild(button);
    }
}

function checkWinner(buttonIndex) {
    const resultElement = document.getElementById('result');
    if (buttonIndex === winnerIndex) {
        resultElement.textContent = "Câștigător!";
        resultElement.classList.add("text-success");
        resultElement.classList.remove("text-danger");
    } else {
        resultElement.textContent = "Necâștigător.";
        resultElement.classList.add("text-danger");
        resultElement.classList.remove("text-success");
    }
}