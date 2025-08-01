const http = require("http");

const fs = require("fs");

const server = http.createServer((req, res) => {
  const method = req.method;

  if (method === "DELETE") {
    console.log("DELETE method is working!!!");
    const url = req.url;
    const a = url.split("=");
    const name = a[1];
    const users = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    req.on("end", () => {
      for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
          users.splice(i, 1);
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
