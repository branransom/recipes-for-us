const Router = require("@koa/router");
const {
    createRecipe,
    getAllRecipes,
    getRecipe,
    deleteRecipe,
    addIngredient,
    getIngredients,
    deleteIngredient,
    setInstructions,
} = require("../controller");

const router = new Router();

router.post("/recipes", async ctx => {
    const payload = ctx.request.body;

    ctx.body = await createRecipe(payload);
});

router.get("/recipes", async ctx => {
    ctx.body = await getAllRecipes();
});

router.get("/recipes/:recipeId", async ctx => {
    const { recipeId } = ctx.params;

    ctx.body = await getRecipe(recipeId);
});

router.delete("/recipes/:recipeId", async ctx => {
    const { recipeId } = ctx.params;

    await deleteRecipe(recipeId);

    ctx.body = {
        message: "Recipe deleted successfully",
    };
});

router.post("/recipes/:recipeId/ingredients", async ctx => {
    const { recipeId } = ctx.params;
    const { name } = ctx.request.body;

    ctx.body = await addIngredient(recipeId, name);
});

router.get("/recipe/:recipeId/ingredients", async ctx => {
    ctx.body = await getIngredients(recipeId);
});

router.delete("/recipes/:recipeId/ingredients/:ingredientId", async ctx => {
    const { recipeId, ingredientId } = ctx.params;

    ctx.body = await deleteIngredient(recipeId, ingredientId);
});

router.put("/recipes/:recipeId/instructions", async ctx => {
    const { recipeId } = ctx.params;
    const { instructions } = ctx.body;

    ctx.body = await setInstructions(recipeId, instructions);
});

module.exports = router;
