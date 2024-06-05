document.querySelector('.heart').addEventListener('click', function() {
    const textElement = document.querySelector('.text');
    textElement.style.display = textElement.style.display === 'none' ? 'block' : 'none';
});
