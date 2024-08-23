{

    if (inputUnit === 'inches') {
        baseInchesValue = inputValue;
    } else if (inputUnit === 'feet') {
        baseInchesValue = inputValue * 12;
    } else if (inputUnit === 'miles') {
        baseInchesValue = inputValue * 63360;
    } else if (inputUnit === 'centimeters') {
        baseInchesValue = inputValue / 2.54; 
    } else if (inputUnit === 'meters') {
        baseInchesValue = inputValue * 39.3701; 
    }

    // Convert inches to the desired output unit
    let outputValue;
    if (outputUnit === 'inches') {
        outputValue = baseInchesValue;
    } else if (outputUnit === 'feet') {
        outputValue = baseInchesValue / 12;
    } else if (outputUnit === 'miles') {
        outputValue = baseInchesValue / 63360;
    } else if (outputUnit === 'centimeters') {
        outputValue = baseInchesValue * 2.54; 
    } else if (outputUnit === 'meters') {
        outputValue = baseInchesValue / 39.3701; 
    }

    document.getElementById('inputResult').textContent = inputUnit.charAt(0).toUpperCase() + inputUnit.slice(1) + ": " + inputValue;
    document.getElementById('outputResult').textContent = outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1) + ": " + outputValue;
};

document.getElementById('resetBtn').onclick = function() {
    document.getElementById('inputValue').value = '';
    document.getElementById('inputResult').textContent = 'Inches:';
    document.getElementById('outputResult').textContent = 'Miles:';
};
