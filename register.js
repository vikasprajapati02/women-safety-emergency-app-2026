function registerUser(){

    let inputs = document.querySelectorAll("input");

    let name = inputs[0].value;
    let phone = inputs[1].value;
    let email = inputs[2].value;
    let familyEmail = inputs[3].value;
    let password = inputs[4].value;
    let confirm = inputs[5].value;

    if(name === "" || phone === "" || email === "" || familyEmail === "" || password === "" || confirm === ""){
        alert("Please fill all details");
        return;
    }

    if(password !== confirm){
        alert("Password does not match");
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("familyEmail", familyEmail);
    localStorage.setItem("userName", name);

    alert("Registration Successful!");
    window.location.href = "login.html";
}