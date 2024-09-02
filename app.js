document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons--number, .result--reset, .result--equals');
    
    let currentInput = '';
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
  
            if (button.classList.contains('result--reset')) {
                resetCalculator();
            } else if (button.classList.contains('result--equals')) {
                calculateResult();
            } else if (value === 'Del') {
                deleteLastCharacter();
            } else {
                appendValue(value);
            }
        });
    });
  
    function resetCalculator() {
        currentInput = '';
        display.textContent = '0';
    }
  
    function calculateResult() {
        try {
            // Evaluate the expression in currentInput
            const result = eval(currentInput.replace(/x/g, '*'));
            display.textContent = result;
            currentInput = result.toString();
            shouldResetDisplay = true;
        } catch (error) {
            display.textContent = 'Error';
        }
    }
  
    function appendValue(value) {
        if (shouldResetDisplay) {
            currentInput = '';
            shouldResetDisplay = false;
        }
  
        if (value === '.' && currentInput.slice(-1) === '.') return; 
  
        currentInput += value;
        display.textContent = currentInput;
    }
  
    function deleteLastCharacter() {
        currentInput = currentInput.slice(0, -1);
        display.textContent = currentInput || '0';
    }
});
