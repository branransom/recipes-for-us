const fs = require("fs");
const path = require("path");
const Router = require("@koa/router");
const recipesRouter = require("./recipes");

const router = new Router();

router.use("/api", recipesRouter.routes(), recipesRouter.allowedMethods());

router.get("*", ctx => {
  console.log(path.resolve(__dirname, "..", "..", "dist", "index.html"));
  ctx.type = "html";
  ctx.body = fs.readFileSync(
    path.resolve(__dirname, "..", "..", "dist", "index.html")
  );
});

module.exports = router;
