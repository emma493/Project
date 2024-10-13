// Generate unlimited floating shapes across the screen
function generateShapes() {
    const background = document.getElementById('background');
    const shapeCount = 100; // Number of shapes

    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');

        // Randomly size the shapes
        const size = Math.random() * 80 + 20; // Size between 20px and 100px
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;

        // Randomly position the shapes
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        shape.style.top = `${randomY}px`;
        shape.style.left = `${randomX}px`;

        // Randomize animation duration
        const duration = Math.random() * 20 + 10; // Duration between 10s and 30s
        shape.style.animationDuration = `${duration}s`;

        // Randomize background color gradient
        const color1 = `hsl(${Math.random() * 360}, 100%, 70%)`;
        const color2 = `hsl(${Math.random() * 360}, 100%, 70%)`;
        shape.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;

        background.appendChild(shape);
    }
}

generateShapes();

// USDT to TRX Conversion
document.getElementById('usdtInput').addEventListener('input', function () {
    const usdtValue = parseFloat(this.value) || 0;
    const conversionRate = 5.96778; // Example conversion rate for USDT to TRX
    const trxValue = usdtValue * conversionRate;
    document.getElementById('trxInput').value = trxValue.toFixed(4);

    // Also copy the input to the copyInput field
    document.getElementById('copyInput').value = usdtValue;
});

// Copy to Clipboard
document.getElementById('copyButton').addEventListener('click', function () {
    const copyText = document.getElementById('copyInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');

    // Optionally, show a message to confirm copying
    alert('Copied to clipboard: ' + copyText.value);
});
document.getElementById('goToPayment').addEventListener('click', function () {
    window.location.href = 'https://www.instagram.com/socialfunera';
});