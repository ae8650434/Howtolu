var inputs = Array.from(document.querySelectorAll('.credit-card-input'));

inputs.forEach(function(input, index) {
    input.addEventListener('keyup', function(e) {
        // Replace non-digits characters
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

        // If the length of the input's value is 4, focus the next input field
        if (e.target.value.length === 4 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        // If the length of the input's value is 0 and the delete or backspace key was pressed, focus the previous input field
        if (e.target.value.length === 0 && (e.key === 'Backspace' || e.key === 'Delete') && index > 0) {
            inputs[index - 1].focus();
        }
    });
});