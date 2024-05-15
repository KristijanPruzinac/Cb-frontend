function ValidateRegister(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get values from form fields
    const name = document.getElementById("username").value;
    const firstName = document.getElementById("firstName").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const psw = document.getElementById("psw").value;
    const psw_repeat = document.getElementById("psw-repeat").value;

    // Check if passwords match
    if (psw === psw_repeat) {
        // Construct JSON object with form data
        const userData = {
            Username: name,
            Password: psw,
            RealName: firstName,
            RealLastName: surname,
            Email: email
        };

        console.log(userData);
        console.log(JSON.stringify(userData));

        // Call AsyncPost function with JSON object as data
        AsyncPost("register", userData)
            .then(response => {
                // Handle response if needed
                console.log("Registration successful:", response);
            })
            .catch(error => {
                // Handle error if registration fails
                console.error("Error registering user:", error);
            });
    } else {
        alert("Passwords don't match!");
    }
}