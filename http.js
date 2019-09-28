
const http = require('http');
 const fs = require('fs');
 const path = require('path');

 const reader = (res, filename) => {
    fs.readFile(path.join(__dirname, 'public', filename), 'utf-8', (err, content) => {
        if (err) throw err
        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(content, 'utf8');
    })

 }

 const server = http.createServer((req, res) => {


    //build filepath
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url+'.html')
    console.log(filePath)

    let extname = path.extname(filePath)
    console.log(extname)
    
    let contentType = 'text/html'

    switch(extname){
        case '.js':
         contentType = 'text/javascript';
         break;
        
        case '.ccs':
         contentType = 'text/css';
         break;
        
        case '.img':
         contentType = 'text/javascript';
         break;

        case '.png':
         contentType = 'text/javascript';
         break;

        case '.json':
         contentType = 'application/json';
         break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err){
            if (err === 'ENOENT'){
              reader(res, '404.html')
            } else {
                res.writeHead(500)
                res.end(`Server errkiuytor ${err.code}`)
            }
        } 
        //success
        else {
            res.writeHead(200, {'Content-Type':contentType});
            res.end(content, 'utf-8')
        }
    })
 });

 const PORT = process.env.PORT || 5000

 server.listen(PORT, () => console.log('server running on port ', PORT));