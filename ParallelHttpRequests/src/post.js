const {Worker} = require('worker_threads')

const worker = new Worker(__filename)
worker.on('message',message => console.log(message));

worker.postMessage('Local Teja Vm')
worker.emit(true)