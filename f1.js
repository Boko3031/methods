const fs=require("fs");

fs.readFileSync("text1.txt","utf8");
fs.writeFileSync("text2.txt","hi");
fs.appendFileSync("text2.txt","hello");
fs.copyFileSync("text1.txt","text3.txt");
fs.unlinkSync("text1.txt","text3.txt");
fs.renameSync("text2.txt","mm.txt");
    