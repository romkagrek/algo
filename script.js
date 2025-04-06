const spinButton = document.getElementById('spinButton');
const roulette = document.getElementById('roulette');

spinButton.addEventListener('click', () => {
    roulette.style.transform = `rotate(${Math.floor(Math.random() * 360) + 3600}deg)`;
});
 