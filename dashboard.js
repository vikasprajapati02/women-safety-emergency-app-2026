function saveHistory() {
    let now = new Date();

    let time = now.toLocaleTimeString();
    let date = now.toLocaleDateString();

    let li = document.createElement("li");
    li.innerText = "🚨 SOS Sent on " + date + " at " + time;

    document.getElementById("historyList").appendChild(li);
}

function saveContact() {
    let name = document.getElementById("contactName").value;
    let phone = document.getElementById("contactPhone").value;

    if (name === "" || phone === "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerText = name + " - " + phone;

    document.getElementById("contactList").appendChild(li);

    document.getElementById("contactName").value = "";
    document.getElementById("contactPhone").value = "";
}

function startTracking() {

    if (navigator.geolocation) {

        navigator.geolocation.watchPosition(function(position) {

            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            fetch(`http://localhost:5000/track?lat=${lat}&lon=${lon}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
            });

        });

    } else {
        alert("Location not supported");
    }
}

document.querySelector(".sos-btn").addEventListener("click", function() {
    alert("🚨 Live Tracking Started");
    saveHistory();
    startTracking();
});

function logoutUser(){
    alert("Logged Out Successfully");
    window.location.href = "login.html";
}