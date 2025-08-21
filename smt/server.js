const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;

  if (method === "GET") {
    const Data = fs.readFileSync("./data.json", "utf8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(Data);
  } else if (method === "POST") {
    console.log("POST method ajilliaj bn");
    let body = "";
    req.on("data", (chunk) => {
      body = body + chunk;
    });
    req.on("end", () => {
      const newdata = JSON.parse(body);
      console.log(newdata);
      const jsonData = fs.readFileSync("./data.json", "utf8");
      const newuser = JSON.parse(jsonData);
      console.log(newuser);
      newuser.push(newdata);
      fs.writeFileSync("./data.json", JSON.stringify(newuser));
      res.end("over");
    });
  }
});
server.listen(3000, () => {
  console.log("start");
});
