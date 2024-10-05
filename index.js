const textArea = document.getElementById('textArea');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const fontSizeDropdown = document.getElementById('fontSizeDropdown');
const fontFamilyDropdown = document.getElementById('fontFamilyDropdown');
const boldBtn = document.getElementById('boldBtn');

// Initial font settings
let fontSize = 16;
let isBold = false;

// Function to update font size
function updateFontSize(newSize) {
    fontSize = newSize;
    textArea.style.fontSize = `${fontSize}px`;
}

// Function to toggle bold text
function toggleBold() {
    isBold = !isBold;
    textArea.style.fontWeight = isBold ? 'bold' : 'normal';
}

// Increase text size
increaseBtn.addEventListener('click', () => {
    fontSize += 2;
    updateFontSize(fontSize);
});

// Decrease text size
decreaseBtn.addEventListener('click', () => {
    if (fontSize > 8) {
        fontSize -= 2;
        updateFontSize(fontSize);
    }
});

// Change text size via dropdown
fontSizeDropdown.addEventListener('change', (event) => {
    const selectedFontSize = parseInt(event.target.value);
    updateFontSize(selectedFontSize);
});

// Change font family via dropdown
fontFamilyDropdown.addEventListener('change', (event) => {
    const selectedFontFamily = event.target.value;
    textArea.style.fontFamily = selectedFontFamily;
});

// Toggle bold text
boldBtn.addEventListener('click', toggleBold);
