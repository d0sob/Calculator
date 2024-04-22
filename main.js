document.querySelectorAll('.main button').forEach(button => {
    button.addEventListener('click', function() {
        const display = document.getElementById('display');
        display.value += this.textContent;
    });
});
document.getElementById("0").addEventListener("click", function() {
    document.getElementById("display").value += '0';
});
document.getElementById('divi').addEventListener("click", () => {
    document.getElementById('display').value += '/';
})

document.getElementById('equals').addEventListener("click", (problem) => {
    const display = document.getElementById('display');
    problem = eval(display.value);
    display.value = problem;
})