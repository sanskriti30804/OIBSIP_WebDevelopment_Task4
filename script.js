const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});


btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active'); 
});


//Registration Logic

const registerForm = document.querySelector('.form-box.register form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    if (!username || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    
    localStorage.setItem("user", JSON.stringify({
        username,
        email,
        password
    }));

    alert("Registration successful! You can now log in.");
    wrapper.classList.remove('active'); 
});


// Login Logic

const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert(`Welcome back, ${storedUser.username}!`);
        window.location.href = "dashboard.html"; 
    } else {
        alert("Invalid email or password.");
    }
});
