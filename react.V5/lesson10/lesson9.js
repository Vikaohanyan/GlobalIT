// 1

// const { add, subtract, multiply, divide } = require("./math");

// console.log(add(8, 1));
// console.log(subtract(10, 8));
// console.log(multiply(4, 3));
// console.log(divide(8, 3));

// 2
 const fs = require("fs");
fs.mkdirSync("students");

const students = [
  { name: "Anna", age: 20 },
  { name: "Ashot", age: 15 },
  { name: "Karen", age: 21 },
  { name: "Ani", age: 18 },
  { name: "Mane", age: 30 },
];

fs.writeFileSync("students/list.json", JSON.stringify(students, null, 2));
const data = fs.readFileSync("students/list.json", "utf8");
const studentList = JSON.parse(data);
studentList.forEach((student) => {
  console.log(student.name);
});


// 3
// const http = require('http');
// http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     if (req.method === 'GET' && req.url === '/') return res.end(JSON.stringify({ message: "Welcome!" }));
//     if (req.method === 'GET' && req.url === '/time') return res.end(JSON.stringify({ time: new Date().toLocaleTimeString() }));
//     if (req.method === 'GET' && req.url === '/info') return res.end(JSON.stringify({ platform: process.platform, node_version: process.version, uptime: process.uptime() }));
//     res.statusCode = 404;
//     res.end(JSON.stringify({ error: "404 Not Found" }));
// }).listen(3000);