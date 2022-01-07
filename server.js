const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({
    extended: true
}))

const todoRoute = require("./routes/todoRoute");
app.use(todoRoute);

const dbDriver = "mongodb+srv://abhishek:rKbKhmexljtap0Rh@cluster0.jwma6.mongodb.net/todo";

const port = process.env.PORT || 2305;

mongoose.connect(dbDriver, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    app.listen(port, () => {
        console.log("DB is connected....");
        console.log(`Server is running on http://localhost:${port}`);
    })
})