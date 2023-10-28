document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = "user123";
        const password = "password123";

        const enteredUsername = loginForm.querySelector("#username").value;
        const enteredPassword = loginForm.querySelector("#password").value;

        if (enteredUsername === username && enteredPassword === password) {
            // Redirect to the next page on successful login
            window.location.href = "dashboard.html";
        } else {
            alert("Login failed. Please check your username and password.");
        }
    });
});

// Set flag "login" ke true saat pengguna berhasil login
localStorage.setItem('login', 'true');

// Hapus flag "login" saat pengguna logout
localStorage.removeItem('login');

