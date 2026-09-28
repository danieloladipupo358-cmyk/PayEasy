function showSection(sectionName) {

    const sections = document.querySelectorAll(".page-section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    const selectedSection = document.getElementById(sectionName);

    selectedSection.style.display = "block";

    window.scrollTo(0, 0);
}


function selectBill(billName) {

    const selectedBill = document.getElementById("selectedBill");

    selectedBill.textContent = "You selected: " + billName;

    showSection("payment");
}


function toggleAssistant() {

    const assistantBox = document.getElementById("assistantBox");

    if (assistantBox.style.display === "block") {

        assistantBox.style.display = "none";

    } else {

        assistantBox.style.display = "block";
    }
}


const paymentForm = document.getElementById("paymentForm");

paymentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const amount = document.getElementById("amount").value;

    const paymentMessage = document.getElementById("paymentMessage");

    if (name === "" || phone === "" || amount === "") {

        paymentMessage.textContent = "Please fill in all fields.";

        return;
    }

    paymentMessage.textContent =
        "Payment submitted successfully!";

});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const contactMessage = document.getElementById("contactMessage");

    if (name === "" || email === "" || message === "") {

        contactMessage.textContent =
            "Please fill in all fields.";

        return;
    }

    contactMessage.textContent =
        "Your message has been sent!";

});