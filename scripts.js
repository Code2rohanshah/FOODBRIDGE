// Firebase configuration
const firebaseConfig = {
    apiKey: "AlzaSyARIYwEnWuP7DtugSxmOg-RijAftj4x7jM",
    authDomain: "loginfb-f2c91.firebaseapp.com", // Updated with your project ID
    projectId: "loginfb-f2c91", // Your Firebase Project ID
    storageBucket: "loginfb-f2c91.appspot.com", // Replace with your Firebase storage bucket
    messagingSenderId: "943210512803", // Your Firebase Sender ID
    appId: "your-app-id", // Replace with your Firebase app ID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Register a new user with email and password
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Create a new user with email and password
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User successfully registered
                const user = userCredential.user;
                alert('Account created successfully!');
                // Redirect to login or home page
                window.location.href = 'login.html';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    } else {
        alert('Please enter both email and password');
    }
});

// Handle form submission for login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        // Sign in the user
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // User successfully logged in
                alert('Logged in successfully');
                // Redirect to dashboard or home screen
                window.location.href = 'dashboard.html';  // Placeholder redirect
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    } else {
        alert('Please enter both email and password');
    }
});
