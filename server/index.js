require("dotenv").config();
const path = require("path");
const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const serve = require("koa-static");
const mongoose = require("mongoose");

const db = require("./config/db");
const router = require("./router");

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
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

app.use(errorHandler)
    .use(cors())
    .use(bodyParser())
    .use(serve(path.resolve(__dirname, "..", "dist")))
    .use(router.routes())
    .use(router.allowedMethods());

app.on("error", err => {
    console.log("Server error occurred: ", err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

mongoose
    .connect(DB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch(err => {
        console.log("Could not connect to the database. Exiting now");
        process.exit();
    });
