const peep = require('./person');
const path = require('path')
const fs = require('fs')
const os = require('os')


console.log(os.uptime()/3600)

const object1 = {
    root: '/',
    dir: '/Users/brianserem/Desktop/node-projects/trial',
    base: 'index.js',
    ext: '.js',
    name: 'index'
}

const wrongPath = '/Users/brianserem/Desktop/node-projects//trial//index.js'

console.log(path.parse(__filename))

// console.log(path.relative (wrongPath));

// peep1 = new peep('brian', 23);

// peep1.sayHello()

// console.log(__dirname)

// fs.mkdir(path.join(__dirname, '/', 'url_demo.js'), err => {
//     if (err) {throw err}
//     console.log('folder created already')}
// )

const callBackFn = err => {
    if (err) throw err
    console.log('done writing file')
}

// fs.writeFile(path.join(__dirname, '/demo.js'), 'const url = require', callBackFn)

// const news = fs.readFile(path.join(__dirname, '/serem/brian.json'),'utf8', callBackFn)

// fs.rename(path.join(__dirname, '/serem', 'serem.json'), path.join(__dirname, '/serem', 'trial.json'), callBackFn)