document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        valid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        valid = false;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email format';
        emailError.style.display = 'block';
        valid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Password validation
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirmPassword').value;
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    if (confirmPassword.trim() === '') {
        confirmPasswordError.textContent = 'Please confirm your password';
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else if (confirmPassword !== password) {
        confirmPasswordError.textContent = 'Passwords do not match';
        confirmPasswordError.style.display = 'block';
        valid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    if (valid) {
        alert('Registration successful');
       
    }
});

document.getElementById('signInLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('registrationForm').classList.remove('active');
    document.getElementById('signInForm').classList.add('active');
});

document.getElementById('signUpLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signInForm').classList.remove('active');
    document.getElementById('registrationForm').classList.add('active');
});

document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    // Email validation
    const emailSignIn = document.getElementById('emailSignIn').value;
    const emailSignInError = document.getElementById('emailSignInError');
    if (emailSignIn.trim() === '') {
        emailSignInError.textContent = 'Email is required';
        emailSignInError.style.display = 'block';
        valid = false;
    } else {
        emailSignInError.style.display = 'none';
    }

    // Password validation
    const passwordSignIn = document.getElementById('passwordSignIn').value;
    const passwordSignInError = document.getElementById('passwordSignInError');
    if (passwordSignIn.trim() === '') {
        passwordSignInError.textContent = 'Password is required';
        passwordSignInError.style.display = 'block';
        valid = false;
    } else {
        passwordSignInError.style.display = 'none';
    }

    if (valid) {
        alert('Sign in successful');
        
    }
});


document.getElementById('registrationForm').classList.add('active');
