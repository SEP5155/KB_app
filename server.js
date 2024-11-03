const http = require('http');
const express = require('express');
const basicRouter = require('./routes/basicRoute');

const app = express();

const server = http.createServer();

// app.use('api/v1/home', basicRouter);
app.use('/api/v1/home', (req, res) => {
    res.send('test');
});

app.listen(9999, () => {
    console.log('server is listening now')
})