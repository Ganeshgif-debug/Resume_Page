
function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let event = document.getElementById("event").value;

    if (name.trim() === "") {
        alert("Enter your name");
        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter valid email");
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter 10 digit phone number");
        return false;
    }

    if (event === "") {
        alert("Select an event");
        return false;
    }

    alert("Registration Successful!");
    return false;
}
