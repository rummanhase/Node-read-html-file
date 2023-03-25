const http = require('http')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname,'/index.html')
console.log(filePath);

fs.readFile(filePath , (err,html)=>{
    if(err) throw err;
    http.createServer((req,res)=>{
        res.writeHead(200,{'content-type':'text/html'})
        res.write(html)
        res.end()
    }).listen('5000',()=>{
        console.log('server listening');
    })
})