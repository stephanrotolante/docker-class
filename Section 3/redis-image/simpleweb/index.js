const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send("Fuck boy you know it");
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
})