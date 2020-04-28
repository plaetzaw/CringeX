const express = require("express");
const app = express();

app.use(require("./routes/login"));
app.use(require("./routes/createUser"))

app.listen(3001, ()=>{
    console.log("listening on port 3001")
})