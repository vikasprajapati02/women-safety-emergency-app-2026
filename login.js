function loginUser(){

    let email = document.querySelector('input[type="email"]').value;
    let password = document.querySelector('input[type="password"]').value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if(email === "" || password === ""){
        alert("Please fill all details");
        return;
    }

    if(email === savedEmail && password === savedPassword){
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    }else{
        alert("Invalid Email or Password");
    }
}