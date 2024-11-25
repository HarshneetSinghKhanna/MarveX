document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            if (validateEmail(email) && validatePassword(password)) {
                // Handle login logic here
                console.log('Login successful');
                window.location.href = 'index.html';
            }
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (validateName(name) && 
                validateEmail(email) && 
                validatePassword(password) && 
                validateConfirmPassword(password, confirmPassword)) {
                // Handle signup logic here
                console.log('Signup successful');
                window.location.href = 'index.html';
            }
        });
    }
    
    // Password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
    
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const password = document.getElementById('password');
            togglePasswordVisibility(password, this);
        });
    }
    
    if (toggleConfirmPassword) {
        toggleConfirmPassword.addEventListener('click', function() {
            const confirmPassword = document.getElementById('confirmPassword');
            togglePasswordVisibility(confirmPassword, this);
        });
    }
});

// Validation functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = re.test(email);
    showError('email', !isValid, 'Please enter a valid email');
    return isValid;
}

function validatePassword(password) {
    const isValid = password.length >= 6;
    showError('password', !isValid, 'Password must be at least 6 characters');
    return isValid;
}

function validateName(name) {
    const isValid = name.trim().length > 0;
    showError('name', !isValid, 'Please enter your hero name');
    return isValid;
}

function validateConfirmPassword(password, confirmPassword) {
    const isValid = password === confirmPassword;
    showError('confirmPassword', !isValid, 'Passwords do not match');
    return isValid;
}

function showError(inputId, show, message) {
    const input = document.getElementById(inputId);
    const errorElement = input.nextElementSibling;
    
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.style.display = show ? 'block' : 'none';
        errorElement.textContent = message;
        input.style.borderColor = show ? 'var(--primary-red)' : 'transparent';
    }
}

function togglePasswordVisibility(passwordInput, toggleIcon) {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    toggleIcon.classList.toggle('fa-eye');
    toggleIcon.classList.toggle('fa-eye-slash');
}