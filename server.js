// /// Dependencies ///
//
// var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');
// var mongoose = require('mongoose');
//
//
// /// Controllers ///
//
//
// /// Middleware ///
//
// var port = 3000;
// var app = express();
// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(cors());
//
// /// Endpoints ///
//
//
// /// Connections ///
// var mongoUri = 'mongodb://localhost:27017/krissy';
// mongoose.set('debug', true);
// mongoose.connect(mongoUri);
// mongoose.connection.once('open', function() {
//   console.log('connected to mongoDB at: ', mongoUri);
// });
//
// app.listen(port, function() {
//   console.log("Creeping on " + port);
// });
