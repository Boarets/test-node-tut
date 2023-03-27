const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage')
        return
    }
    if (req.url === '/about') {
        res.end('Here is our short history')
        return
    }
    res.end(`<h1>OOOOOOooooops!!!</h1><a href='/'>Back Home</a>`)
})

server.listen(5000)