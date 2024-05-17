document.addEventListener('DOMContentLoaded', function() {
    const bmiForm = document.getElementById('bmiForm');
    const resultDiv = document.getElementById('result');

    bmiForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get values from input fields
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);

        // Validate input
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.textContent = 'Please enter valid values for weight and height.';
            return;
        }

        // Calculate BMI
        const bmi = calculateBMI(weight, height);

        // Display result
        resultDiv.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    });

    // Function to calculate BMI
    function calculateBMI(weight, height) {
        return weight / ((height / 100) ** 2);
    }
});
