const connectToMongo = require("./config/db.config");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/note"));

app.listen(port, () => {
  console.log(`INotebook app listening at http://localhost:${port}`);
});
