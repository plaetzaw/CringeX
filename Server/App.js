const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(require("./routes/login"));
app.use(require("./routes/createUser"))
