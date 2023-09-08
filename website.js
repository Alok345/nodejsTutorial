const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{
    console.log(req)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    if (req.url=='/') {
        res.statusCode=200;
        res.end('<h1>This is alok </h1> <p> ndfijvn flor ef edvneve rnfjnrv</p>');
    }
    else if (req.url=='/about') {
        res.statusCode=200;
        res.end('<h1>This is alok about </h1> <p> ndfijvn flor ef edvneve about about rnfjnrv</p>');
    }
    else if (req.url=='/hello') {
        res.statusCode=200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else{
        // res.alok()
        res.end('<h1>This is page not found </h1> <p> ndfijvn flor ef edvneve about about rnfjnrv</p>');
        res.statusCode=404;
    }

})

server.listen(port , ()=>{
    console.log(`server is listen on port ${port}`)
})