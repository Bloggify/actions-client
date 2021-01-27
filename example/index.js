"use strict";

var BloggifyActionsClient = require("../lib");

var app = new BloggifyActionsClient("http://localhost:8080");

// Make a get request
app.get("action.name", {
    query: { id: 2 }
}).then(function (_ref) {
    var data = _ref.data;

    console.log(data);
});

// Make a post request
app.post("action.name", {
    name: "PipeOrgansMap"
}).then(function (_ref2) {
    var data = _ref2.data;

    console.log(data);
});