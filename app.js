const express = require("express");
const exhbs = require("express-handlebars");
const cookieParser = require("cookie-parser");
const path = require("path");
const db = require("./config/database");
require("./app/Models/association")();
const port = process.env.PORT || 3000;

const app = express();
app.engine(
  "hbs",
  exhbs({
    defaultLayout: "main",
    extname: "hbs"
  })
);
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

db.authenticate()
  .then(() => {
    console.log("Database Connected...");
  })
  .catch(err => {
    console.log(err);
  });

app.use("/api/user", require("./routes/user"));
app.use("/api/tickets", require("./routes/tickets"));
app.use("/", require("./routes/views"));

app.use(express.static(path.join(__dirname, "public")));
app.listen(port, () => {
  console.log(`Serve running on port http://127.0.0.1:${port}`);
});
