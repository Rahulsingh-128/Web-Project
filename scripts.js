document.addEventListener("DOMContentLoaded", function() {
    const navbarContainer = document.getElementById("navbar-container");


    const nav = document.createElement("nav");

    const links = [
        { href: "index.html", text: "Home" },
        { href: "login.html", text: "Login" },
        { href: "register.html", text: "Register" },
        { href: "contact.html", text: "Contact" }
    ];

    links.forEach(link => {
        const anchor = document.createElement("a");
        anchor.href = link.href;
        anchor.textContent = link.text;
        nav.appendChild(anchor);
    });

    navbarContainer.appendChild(nav);
});


let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const contactForm = document.getElementById('contactForm');

//     if (loginForm) {
//         loginForm.addEventListener('submit', (event) => {
//             if (!loginForm.checkValidity()) {
//                 event.preventDefault();
//                 event.stopPropagation();
//             }
//             loginForm.classList.add('was-validated');
//         });
//     }

    // Login validation code
    const staticUsername = "user@g";
    const staticPassword = "pass";


    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let isValid = true;

        // Clear previous error messages
        document.getElementById("errorUsername").textContent = "";
        document.getElementById("errorPassword").textContent = "";

        // Validate username
        if (username !== staticUsername) {
            document.getElementById("errorUsername").textContent = "Invalid username";
            isValid = false;
        }

        // Validate password
        if (password !== staticPassword) {
            document.getElementById("errorPassword").textContent = "Invalid password";
            isValid = false;
        }

        if (isValid) {
            alert("Login successful!");
            // Redirect to another page or perform other actions
        }
    });

    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            contactForm.classList.add('was-validated');
        });
    }
});

$(document).ready(function() {
    $("#firstname").on("blur", () => validate1());
    const validate1 = function() {
        $("#error1").text("");
        const firstname = $("#firstname").val();
        if (firstname === "") {
            $("#error1").text("First name is required");
            return false;
        } else if (firstname.length < 2) {
            $("#error1").text("Please enter a valid name");
            return false;
        } else if (!firstname.match("^[A-Za-z ]*$")) {
            $("#error1").text("Please enter only characters");
            return false;
        } else {
            return true;
        }
    };

    $("#lastname").blur(() => validate2());
    const validate2 = function() {
        $("#error2").text("");
        const lastname = $("#lastname").val();
        if (lastname === "") {
            $("#error2").text("Last name is required");
            return false;
        } else if (lastname.length > 20) {
            $("#error2").text("Please enter a valid last name");
            return false;
        } else {
            return true;
        }
    };

    $("#age").on("blur", () => validate3());
    const validate3 = function() {
        $("#error3").text("");
        const age = $("#age").val();
        if (age === "") {
            $("#error3").text("Age is required");
            return false;
        } else if (age < 12 || age > 40) {
            $("#error3").text("Age must be between 12 to 40");
            return false;
        } else {
            return true;
        }
    };

    $("#mailid").on("blur", () => validate4());
    const validate4 = function() {
        $("#error4").text("");
        const mailid = $("#mailid").val();
        if (mailid === "") {
            $("#error4").text("Email is required");
            return false;
        } else if (!mailid.includes("@") || mailid.startsWith("@") || mailid.endsWith("@") || mailid.endsWith(".") || mailid.startsWith(".")) {
            $("#error4").text("Please enter a valid email id");
            return false;
        } else {
            return true;
        }
    };

    $("#password").on("blur", () => validate5());
    const passPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*\\?]).{6,12}";
    const regExp = new RegExp(passPattern);
    const validate5 = function() {
        $("#error5").text("");
        const password = $("#password").val();
        if (password === "") {
            $("#error5").text("Password is required");
            return false;
        } else if (!regExp.test(password)) {
            $("#error5").text("Password must contain at least 1 small letter, 1 capital letter, 1 digit, 1 symbol. Password must be 6 to 12 characters long");
            return false;
        } else {
            return true;
        }
    };

    $("#cpassword").on("blur", () => validate6());
    const validate6 = function() {
        $("#error6").text("");
        const password = $("#password").val();
        const cpassword = $("#cpassword").val();
        if (password !== cpassword) {
            $("#error6").text("Passwords must match");
            return false;
        } else {
            return true;
        }
    };

    $("#registerForm").submit(function(event) {
        const r1 = validate1();
        const r2 = validate2();
        const r3 = validate3();
        const r4 = validate4();
        const r5 = validate5();
        const r6 = validate6();
        if (!(r1 && r2 && r3 && r4 && r5 && r6)) {
            event.preventDefault();
        }
    });
});


