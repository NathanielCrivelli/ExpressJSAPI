const express = require('express');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    console.log('Additional processing is done here');
    req.timestamp = new Date().toString();
    next();
})
  

app.get('/', (req, res) => {
    res.append('Content-Type', 'text/html');
    res.send('<html><head></head><body>'+
        '<h1>Hello World!</h1>'+
        '<h3>My server is working!!!</h3>'+
        '<h5>'+req.timestamp+'</h5></body></html>');
})

app.get('/bbt', function (req, res) {
    res.send('Big Bang Theory episode information');
})

app.get('/bbt/episode/:num', function (req, res) {
    res.send('BBT episode '+req.params.num);
})

app.get('/bbt/episode', function(req, res) {
    res.send('BBT Episode List');
})

app.get('*', function (req, res) {
    res.send('This part runs if no other paths catch it');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
