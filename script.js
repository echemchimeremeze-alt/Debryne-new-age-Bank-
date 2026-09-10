const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");

if (showPassword) {

    showPassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showPassword.textContent = "🙈";
        } else {
            passwordInput.type = "password";
            showPassword.textContent = "👁️";
        }

    });

}


const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Passwords do not match.");
            return;

        }

        alert(
            "Account details received for " +
            fullName +
            ". Database connection will be added next."
        );

    });

}


function goToLogin() {

    window.location.href = "login.html";

}
