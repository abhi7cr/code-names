var http = require('http')
var url = require('url')
var fs = require('fs')

http.createServer(function (req, res) {
		let path = req.url
		if (path === '/') path = '/index.html'
		console.log('path', path)
    fs.readFile(path.slice(1), function (err, data){
      res.writeHead(200)
      res.write(data)
      res.end()
    })
}).listen(8080)