function nextScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');

    if (screenId === 'screen-loading') {
        const steps = ["Measuring cuteness...", "Detecting sweetness...", "Almost done..."];
        let i = 0;
        const interval = setInterval(() => {
            if (i < steps.length) {
                document.getElementById('status-text').innerText = steps[i++];
            } else {
                clearInterval(interval);
                nextScreen('screen-report');
            }
        }, 1200);
    }
}

// Generate Petals
function createPetals() {
    const container = document.getElementById('petals-container');
    for (let i = 0; i < 25; i++) {
        let petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.width = Math.random() * 10 + 5 + 'px';
        petal.style.height = petal.style.width;
        petal.style.animationDuration = Math.random() * 3 + 2 + 's';
        petal.style.delay = Math.random() * 5 + 's';
        container.appendChild(petal);
    }
}
createPetals();
