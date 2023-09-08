const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is alok </h1> <p> ndfijvn flor ef edvneve rnfjnrv</p>');

})

server.listen(port , ()=>{
    console.log(`server is listen on port ${port}`)
})