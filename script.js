document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const resultElement = document.getElementById('result');
    
    calculateBtn.addEventListener('click', () => {
        const dobInput = document.getElementById('dob').value;
        const dob = new Date(dobInput);
        const today = new Date();
        
        
        if (isNaN(dob.getTime())) {
            resultElement.innerText = 'Invalid date format. Please use MM/DD/YYYY.';
            return;
        }
        
        
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        resultElement.innerText = `You are ${age} years old.`;
    });
});
