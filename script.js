// баланс из куки
let balance = parseInt(localStorage.getItem('balance')) || 1000;

function updateBalanceDisplay() {
    document.getElementById('balance').innerText = `${balance}`;
}

// сохран в куки
function saveBalanceToLocalStorage() {
    localStorage.setItem('balance', balance); 
}

// соъранение каждую секунжу
setInterval(saveBalanceToLocalStorage, 1000);

document.getElementById('add').addEventListener('click', function() {
    balance += 1000; // + 1к к балансу
    updateBalanceDisplay();
});

document.getElementById('subtract').addEventListener('click', function() {
    if (balance >= 1000) { // проверка на наличие денег на балансе
        balance -= 1000; // -1к с баланса
        updateBalanceDisplay();
    } else {
        alert("Вы не можете уменьшить баланс более!");
    }
});

// вызов 
updateBalanceDisplay();
saveBalanceToLocalStorage(); // 