const fs = require('fs');
const path = require('path')

const callBack = (error, content) => {
    if(error) throw error
    console.log(content)
}
console.log(__dirname)


fs.readFile(path.join(__dirname, 'public', 'index.html'),callBack)