// hamburg js
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Event listener untuk menghilangkan sidebar setelah memilih tautan
const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach((link) => {
    link.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});

// Contoh JavaScript untuk interaktivitas (misalnya, tombol dan formulir)
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("#navbar a, #sidebar a");

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);

            sections.forEach(function (section) {
                section.classList.remove("active");
            });

            document.getElementById(targetId).classList.add("active");
            sidebar.classList.remove('active'); // Menghilangkan sidebar setelah memilih tautan
        });
    });
});

// Cek apakah pengguna sudah login saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    const loginStatus = document.getElementById("loginStatus");
    const logoutButton = document.getElementById("logoutButton");

    const userLoggedIn = localStorage.getItem("userLoggedIn");

    if (userLoggedIn) {
        loginStatus.textContent = "Status: Logged In";
    }

    logoutButton.addEventListener("click", function () {
        // Logout pengguna dan perbarui status
        localStorage.removeItem("userLoggedIn");
        loginStatus.textContent = "Status: Not Logged In";
    });
});

// dashboard.js

// Cek apakah pengguna sudah login saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
    const loginStatus = document.getElementById("loginStatus");
    const logoutButton = document.getElementById("logoutButton");

    const userLoggedIn = localStorage.getItem("userLoggedIn");

    if (userLoggedIn) {
        loginStatus.textContent = "Status: Logged In";
    }

    logoutButton.addEventListener("click", function () {
        // Logout pengguna dan perbarui status
        localStorage.removeItem("userLoggedIn");
        loginStatus.textContent = "Status: Not Logged In";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function () {
        // Lakukan tindakan logout di sini
        alert("Anda berhasil logout.");
    });
});


// Tambahkan event listener untuk logout
logoutButton.addEventListener('click', function() {
    // Hapus flag "login" dari localStorage
    localStorage.removeItem('login');
    // Arahkan pengguna kembali ke halaman login
    window.location.href = 'login.html';
});

