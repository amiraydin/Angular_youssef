
// #!/user/bin/env node
// require(".env").config();

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
app.disable('x-powered-by');
app.use(cors());
app.use(bodyParser.json({}));
app.use(morgan('dev'));
app.use('/api', api);
// app.use('*', (req, res) => res.status(404).end());
// const server = app.listen(process.env.PORT || 3000, () => cb && cb(server));


const debug = require("debug")("node:server");
const http = require("http");


const port = normalizePort(process.env.PORT || 5000);
app.set("port", port);

// http server 
const server = http.createServer(app);

// listen on provided port, on all network interfaces 

server.listen(port, () => {
    console.log(`server runing at ${port} ...`);
});

server.on('error', onError);
server.on('listening', onListening);


function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port
    }
    return false;
}

// Event listener for http server "error" event .

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = typeof port === 'string' ? 'pipe' + port : 'port' + port;
    // handle specific listen errors with frindly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + 'requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + 'is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// Event listener for http server "listning" event.

function onListening() {
    var addr = server.address();
    var bind = typeof addr === "string" ? "pipe" + addr : "port" + addr.port;
    debug("listening on", +bind)
}


