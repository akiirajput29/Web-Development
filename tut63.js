// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World This is Akhil');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pseudo Selectors & more designing</title>
        <style>
            .container {
                border: 2px solid red;
                background-color: rgb(245, 170, 117);
                padding: 34px;
                margin: 34px auto;
                width: 666px;
            }
    
            a {
                text-decoration: none;
                color: red;
            }
    
            a:hover {
                color: black;
                background-color: hotpink;
            }
    
            a:visited {
                background-color: seagreen;
            }
    
            a:active {
                background-color: slateblue;
            }
    
            .btn {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-weight: bold;
                background-color: silver;
                padding: 6px;
                border: none;
                cursor: pointer;
                font-size: 13px;
                border-radius: 4px;
            }
    
            .btn:hover {
                color: steelblue;
                background-color: turquoise;
            }
        </style>
    </head>
    
    <body>
        <div class="container" id="cont1">
            <h3>This is my heading</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius optio cupiditate pariatur! Pariatur
                impedit fugit dolor quasi repellendus corporis consequuntur nisi veniam magnam laudantium, iure corrupti
                aliquid ad delectus nulla atque laborum minus.</p>
            <a href="https://yahoo.com" class="btn">Read More</a>
            <button class="btn">Contact Us</button>
        </div>
    </body>
    
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});