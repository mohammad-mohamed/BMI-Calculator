document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmiForm');
    const resultDiv = document.getElementById('result');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid values for weight and height.';
            return;
        }

        const bmi = calculateBMI(weight, height);

        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    });

    function calculateBMI(weight, height) {
        return weight / ((height / 100) ** 2);
    }
});
