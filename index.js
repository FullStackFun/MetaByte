var express = require('express');
var cors = require('cors');
require('dotenv').config()
let multer = require('multer')
let upload = multer({dest: './public/uploaded'})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

app.post('/api/fileanalyse', upload.single('upfile'), function(request, response) {
  console.log(request.file, "request.file")
 // console.log(request.body, "request.body")
  let obj = {name: request.file.originalname, type: request.file.mimetype, size: request.file.size}

 // console.log(response.json(obj), "json response")

  response.json(obj)
})