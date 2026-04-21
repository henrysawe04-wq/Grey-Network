// script.js for WiFi Billing System

// Function to handle user login
function handleLogin(username, password) {
    // Simulated user data
    const userData = { username: 'user', password: 'pass' };

    // Validate login credentials
    if (username === userData.username && password === userData.password) {
        console.log('Login successful');
        // Proceed to billing system
    } else {
        console.error('Invalid username or password');
    }
}

// Function to handle pay bill button click
function payBill(amount) {
    if (validateAmount(amount)) {
        // Simulate bill payment process
        console.log('Payment of ' + formatCurrency(amount) + ' has been processed.');
        // Update billing data here
    } else {
        console.error('Invalid amount. Please enter a valid value.');
    }
}

// Function to validate billing amount
function validateAmount(amount) {
    return !isNaN(amount) && amount > 0;
}

// Function to format currency
function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

// You can add additional functionality as needed, such as billing data updates and more validation