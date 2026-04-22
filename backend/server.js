const http = require("http");
const url = require("url");

let lat = "";
let lon = "";

const server = http.createServer((req, res) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === "/") {
        res.end("Server Running");
    }

    else if (parsedUrl.pathname === "/track") {
        lat = parsedUrl.query.lat;
        lon = parsedUrl.query.lon;

        res.end("📍 Location Saved");
    }

    else if (parsedUrl.pathname === "/location") {
        res.end(`https://www.google.com/maps?q=${lat},${lon}`);
    }

});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});