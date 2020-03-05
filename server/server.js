const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

const publicUrl = path.join(__dirname, '..', 'build');
app.use(express.static(publicUrl))

app.get("/category" ,(req, res) => {
    res.send("Hello Category!")})

app.get("*", (req, res) => {

    res.sendFile(path.join(publicUrl, "index.html"))

});



app.listen(port, () => {
    console.log("Server is up");
});

