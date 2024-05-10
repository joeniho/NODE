const http = require("node:http");
const os = require("node:os");

function randomDelay(){
    Math.floor(Math.random() *3000)
}

function requestHandler(req, res){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Methods", "GET");

    setTimeout(() => {
        const cpuInfo = os.cpus();
        const osInfo = {
            platform: os.platform(),
            release: os.release(),
            hostname: os.hostname()
        }
        res.writeHead(200, {"content-type": "application/json" });
        res.end(JSON.stringify({cpuInfo, osInfo}))
    }, randomDelay());

    

}


const server = http.createServer(requestHandler)

server.listen(3000, () => { 
    console.log("Server running now");
    
})
