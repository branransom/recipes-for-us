const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const mongoose = require("mongoose");
const db = require("./config/db");
const router = require("./router");
const serve = require("koa-static");

const app = new Koa();

const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
};

app
  .use(errorHandler)
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve("./dist"));

app.on("error", (err, ctx) => {
  console.log("Server error occurred: ", err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

mongoose
  .connect(db.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now");
    process.exit();
  });
