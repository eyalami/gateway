import express from 'express';
import path from 'path';
import open  from 'open';
import compression from 'compression';
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // hard coding for simplicity, pretend its a real db
  res.json([
    {"id":1, "firstName": "bob", "lastName": "dylan", "email": "bobdylan@gmail.com"},
    {"id":2, "firstName": "little", "lastName": "richy", "email": "lionelrichy@gmail.com"},
    {"id":3, "firstName": "bob", "lastName": "marley", "email": "bobmarley@gmail.com"}
  ]);
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  } else  {
    open('http://localhost:' + port);
  }
});
