const express =  require('express');
const path = require('path');
const logger = require('./loggers');
const router = require('./router');
const cars = require('./data');
const exphbs = require('express-handlebars');

const app = express();


//initializing the different wares used by app

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

//Homepage 
app.get('/', (req, res) => {
    res.render('index', {
        title: 'homepage',
        name: 'brian',
        cars
    });
});
app.use('/api/cars', router);


app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));





























// const http = require('http');
//  const fs = require('fs');
//  const path = require('path');

//  const reader = (res, filename) => {
//     fs.readFile(path.join(__dirname, 'public', filename), 'utf-8', (err, content) => {
//         if (err) throw err
        
//         res.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         res.end(content, 'utf8');
//     })

//  }

//  const server = http.createServer((req, res) => {


//     //build filepath
//     let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url+'.html')
//     console.log(filePath)

//     let extname = path.extname(filePath)
//     console.log(extname)
    
//     let contentType = 'text/html'

//     switch(extname){
//         case '.js':
//          contentType = 'text/javascript';
//          break;
        
//         case '.ccs':
//          contentType = 'text/css';
//          break;
        
//         case '.img':
//          contentType = 'text/javascript';
//          break;

//         case '.png':
//          contentType = 'text/javascript';
//          break;

//         case '.json':
//          contentType = 'application/json';
//          break;
//     }

//     fs.readFile(filePath, (err, content) => {
//         if (err){
//             if (err === 'ENOENT'){
//               reader(res, '404.html')
//             } else {
//                 res.writeHead(500)
//                 res.end(`Server errkiuytor ${err.code}`)
//             }
//         } 
//         //success
//         else {
//             res.writeHead(200, {'Content-Type':contentType});
//             res.end(content, 'utf-8')
//         }
//     })
//  });

//  const PORT = process.env.PORT || 5000

//  server.listen(PORT, () => console.log('server running on port ', PORT));