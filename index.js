const express = require('express');
const { byName, byYear } = require('us-baby-names-2');
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    console.log('Additional processing is done here');
    req.timestamp = new Date().toString();
    next();
})
  
// Transform the data object elements into an
// HTML table
const formatToHTML = function(dataArr) {
    // If dataArr is undefined or null, make an empty array
    if (!dataArr) {
      dataArr = [];
    }
    // Use the Array.map function to convert each record 
    // into an HTML table element.
    dataArr = dataArr.map(item => {
      // Create the HTML here
      let html = '<tr>'
      html += (item.year) ? '<td>'+item.year+'</td>' : '';
      html += (item.name) ? '<td>'+item.name+'</td>' : '';
      html += (item.sex) ? '<td>'+item.sex+'</td>' : '';
      html += (item.count) ? '<td>'+item.count+'</td>' : '';
      html += '</tr>';
      return html
    })
    // Now join all the elements together inside the 
    // <table><tbody> elements.
    return '<table><tbody>'+
      dataArr.join('')+'</tbody></table>';
  }
  
  // Transform name with first character capitalized and the 
  // rest lower case
  const fixName = function(name) {
    let newName = name.toLowerCase();
    newName = newName.charAt(0).toUpperCase() +
      newName.substr(1)
    return newName
  }
  

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
