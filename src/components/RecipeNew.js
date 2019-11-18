import React from "react";
import { useFormik } from "formik";

const RecipeNew = () => {
  const formik = useFormik({
    initialValues: {
      name: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form className="ui form" onSubmit={formik.handleSubmit}>
      <h3 class="ui dividing header">Your New Recipe</h3>
      <div className="field">
        <label htmlFor="name">Recipe Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
      </div>
      <div className="field">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
      </div>
      <div class="field">
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          name="instructions"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.instructions}
        />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default RecipeNew;
