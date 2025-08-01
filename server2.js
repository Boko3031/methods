const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;

  if (method === "GET") {
    const Data = fs.readFileSync("./data.json", "utf8");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(Data);
  } else if (method === "PUT") {
    console.log("PUT method ajilliaj bn");
    const url = req.url;
    const q = url.split("=");
    const name = q[1];
    console.log(name);
    let body = "";
    req.on("data", (chunk) => {
      body = body + chunk;
    });

    const users = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    req.on("end", () => {
      const userInformation = JSON.parse(body);

      for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
          users[i] = {
            name: name,
            age: userInformation.age,
            school: userInformation.school,
          };
        }
      }
      fs.writeFileSync("./data.json", JSON.stringify(users), "utf8");
      res.end("finished");
    });
  }
});
server.listen(3000, () => {
  console.log("start");
});
