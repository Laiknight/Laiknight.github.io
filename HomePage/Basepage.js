// BasePage.js
document.addEventListener('DOMContentLoaded', () => {
    const text = "Laiknight's Archive";
    const typingContainer = document.getElementById('typing-container');
    let index = 0;

    function getRandomChar(correctChar) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const weightedChars = correctChar.repeat(40) + chars; // Increase the weight of the correct character
        return weightedChars.charAt(Math.floor(Math.random() * weightedChars.length));
    }

    function typeText() {
        if (index < text.length) {
            const randomChar = getRandomChar(text.charAt(index));
            typingContainer.textContent += randomChar;
            if (randomChar === text.charAt(index)) {
                index++;
            } else {
                setTimeout(() => {
                    typingContainer.textContent = typingContainer.textContent.slice(0, -1);
                }, 50); // Reduced delay here
            }
            setTimeout(typeText, 100); // Fixed delay here
        }
    }

    typeText();
});