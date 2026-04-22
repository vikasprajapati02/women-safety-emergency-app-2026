function familyLogin(){

    let enteredEmail = document.getElementById("familyLoginEmail").value;
    let savedFamilyEmail = localStorage.getItem("familyEmail");

    if(enteredEmail === ""){
        alert("Please enter family email");
        return;
    }

    if(enteredEmail === savedFamilyEmail){
        alert("Login Successful");
        window.location.href = "family.html";
    }else{
        alert("Invalid Family Email");
    }
}