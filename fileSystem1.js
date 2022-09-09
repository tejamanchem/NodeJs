const fs = require('fs')
const http = require('http')

// method to read a file
let readedFile = readFile('./','functions.txt')


function readFile(path,param){
    let a= fs.readFileSync(`${path?path:'.'}/${param}`,'utf-8')
    return a
}

function viewInBrowser(){
    http.createServer(function(req,res){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(`${a}`)
        res.end()
    }).listen(3000)
}

function updateFile(filepath,fileName,textToUpdate){
    let updateFile = fs.appendFileSync(`${filepath}${fileName}`,`${textToUpdate}`)
}

function writeile(filePath,fileName,writtenText){
    let writeFile = fs.writeFileSync(`${filePath}${fileName}`,`${writtenText}`)
}


viewInBrowser()

updateFile('./','functions.txt','this is update call function')



writeile('./createdFileFolder/',`createdFile.txt`,readedFile)




