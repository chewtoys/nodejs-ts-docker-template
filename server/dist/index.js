"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Constants 
var PORT = 8080;
var HOST = '0.0.0.0';
// App
var app = express();
app.get('/', function (req, res) {
    res.send('Hello world\n');
});
app.listen(PORT, HOST);
console.log("Running on http://" + HOST + ":" + PORT);
//# sourceMappingURL=index.js.map