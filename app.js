///imports
const express = require("express");
const app = express();
const connectDb = require("./database");
const morgan = require("morgan");
const bookRouter = require("./api/book/routes");

///middlewares
app.use(express.json());
app.use(morgan("dev"));
// app.use(cors());

/// my routes

app.use("/api/books", bookRouter);

//not found handler
app.use((req, res, next) => {
  return res.status(404).json({ message: "path not found!" });
});

// error handler
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || "server error!");
});
///

/// connect to DB
connectDb();

///
//  ADD ONE PORT
/// run server
const PORT = 8005;
app.listen(PORT, () => {
  console.log(`i am runing on port ${PORT}`);
});
