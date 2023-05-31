const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;


// Routes
app.use(routes);

app.listen(port, () => console.log(`listening on http://localhost:3000`));
