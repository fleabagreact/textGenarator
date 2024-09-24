const colors = {
    'white-btn': 'white',
    'green-btn': '#89d009',
};

document.querySelectorAll('.color-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        const selectedColor = colors[btn.classList[1]];
        document.body.style.backgroundColor = selectedColor;
    });
});

function updateText() {
    const textInput = document.getElementById('inputText').value;
    const displayText = document.getElementById('displayText');
    
    displayText.innerText = textInput;
}
