const fs = require('fs');

const a=fs.readFileSync('file.txt')
console.log(a.toString())
console.log("finish reading file")
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data)
// })

// fs.writeFile('file2.txt',"this is a data",()=>{
//     console.log("written to the file")
// })


b=fs.writeFileSync('file3.txt',"thiod is a data")
console.log(b)
