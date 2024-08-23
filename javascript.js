const toggleButton = document.getElementById('toggleButton');
const body = document.body;

toggleButton.addEventListener('click', function() {
   
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.innerHTML = 'Toggle';
    } else {
        toggleButton.innerHTML = 'Toggle';
    }
});
