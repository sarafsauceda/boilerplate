const express = require("express");
const app = express();

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`)
})

app.get("/", (req, res) => {
    res.send("hello )")
})