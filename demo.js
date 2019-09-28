const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter { 

    log (msg) {
        this.emit('message', {id : uuid.v4(), msg})
    }
}

const callBack = () => {
    console.log('event fired');
}

module.exports = Logger;
// myEmitter.on('evendt', callBack)

// myEmitter.emit('event');
// myEmitter.emit('evendt');
// myEmitter.emit('event');

// const url = require('url');

// const myUrl = new URL('https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22');

// console.log(myUrl.host);
// console.group(myUrl.toString())

// console.log(myUrl.pathname);
// console.log(myUrl.searchParams);

// const params = [];

// myUrl.searchParams.forEach((value, name) => console.log(`${name}:${value}`));
