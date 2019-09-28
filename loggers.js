const Logger = require('./demo')

const callBack = (data) => {
  console.log('Called listner', data)
}

const logger = new Logger()
 
logger.on('message', callBack)

logger.log('serem is a cool guy')