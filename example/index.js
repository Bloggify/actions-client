"use strict";

const BloggifyActionsClient = require("../lib");


const app = new BloggifyActionsClient("http://localhost:8080")

// Make a get request
app.get("action.name", {
    query: { id: 2 }
}).then(({ data }) => {
    console.log(data)
})

// Make a post request
app.post("action.name", {
    name: "PipeOrgansMap"
}).then(({ data }) => {
    console.log(data)
})
