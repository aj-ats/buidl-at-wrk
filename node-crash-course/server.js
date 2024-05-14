import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.setHeader('content-type', 'text/html')
    // res.statusCode = 404;
    console.log(req.url);
    console.log(req.method)
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let food = 'tacos';
    res.end('<b>hello wrlddddd</b>');
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
} )


/*
// think about use cases for this logic in a server
import http from 'http';
const PORT = 7777;

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')
    let food = 'tacos';
    res.end(`<b>My favorite food is ${food}</b>`);
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
} )

user  makes a request that is invalid the server response can use the set header method to show invalid request . ex fetching api key using invalid token

*/
