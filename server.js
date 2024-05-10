const http = require("node:http"); // Import the http module
const os = require("os");
// Function to create the server response 
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.write(
    JSON.stringify({ message, cpu: os.cpus()[0].model, os: os.platform() })
  ); // Include CPU and OS 
  res.end();
}

// Create the server and handle requests
const server = http.createServer((req, res) => {
  // Check for GET requests 
  if (req.method === "GET") {
    // Simulate random delay 
    const delay = Math.floor(Math.random() * 1000) + 500; 
    setTimeout(() => {
      createCorsResponse(req, res, "Request processed after a random delay!");
    }, delay);
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.write("Method Not Allowed");
    res.end();
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000");
});
