 const { Console } = require('console')
 const http = require('http')

 const port = process.env.PORT || 3000

 const server = http.createServer((res,req)=>{
     console.log(req)
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html')
     res.end('<h1>Hi</h1> <p>i still exist</p>')

 })

 server.listen(port, ()=>{
     console.log(`server is listening on port ${port} `)
 });
