const range = document.getElementById('age');
const rangeValue = document.getElementById('rangeValue');

range.addEventListener('input', function() {
    rangeValue.textContent = `${this.value} years`;
});