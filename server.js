const http = require('http');

const server = http.createServer(
    (req, res) => {
        res.write(`<h1>Hello wold!</h1>`);
        res.end()
    }
)

server.listen(8000, 'localhost', function(){
    console.log('web run http://localhost:8000')
})