
function increase(counterId) {
    let counter = document.getElementById(counterId);
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}


function decrease(counterId) {
    let counter = document.getElementById(counterId);
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}


function resetCounter(counterId, initialValue) {
    let counter = document.getElementById(counterId);
    counter.innerHTML = initialValue;
}


