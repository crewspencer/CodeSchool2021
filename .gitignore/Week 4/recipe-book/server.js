/*
This file handles our api endpoints
*/
// import so you can use it
const express = require("express");
const { store, Recipe } = require("./model");
const cors = require("cors");
// instantiate your app/server
const app = express();
app.use(cors());
app.use(express.static("static"));
app.use(express.json({}));

module.exports = app;

// Get - gets all of the recipes (does not have a URL param)
app.get("/recipe", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let findQuery = {};

  console.log(req.query);
  if (req.query.name !== null && req.query.name !== undefined) {
    findQuery.name = req.query.name;
  }

  console.log("getting all recipes with find query", findQuery);
  // return all of the recipes in the store

  Recipe.find(findQuery, function (err, recipes) {
    // check if there was an error
    if (err) {
      console.log(`there was an error listing Recipes`, err);
      // send back the error
      res.status(500).json({ message: `unable to list Recipes`, error: err });
      return;
    }
    // success!!! return all the recipes
    res.status(200).json(recipes);
  });
});

// Get - gets the recipe with the given id
app.get("/recipe/:id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`getting recipe with id: ${req.params.id}`);
  Recipe.findById(req.params.id, (err, recipe) => {
    // check if there was an error
    if (err) {
      console.log(
        `there was an error finding a recipe with id ${req.params.id}`,
        err
      );
      // send back the error
      res.status(500).json({
        message: `unable to find recipe with id ${req.params.id}`,
        error: err,
      });
    } else if (recipe === null) {
      console.log(`unable to find recipe with id ${req.params.id}`);
      res.status(404).json({
        message: `recipe with id ${req.params.id} not found`,
        error: err,
      });
    } else {
      // success!!!! return the recipe
      res.status(200).json(recipe);
    }
  });
});

// Post - crates one recipe (does not have a URL param)
app.post("/recipe", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a recipe with body`, req.body);

  let newRecipe = {
    name: req.body.name || "",
    ingredients: req.body.ingredients || "",
    instructions: req.body.instructions || "",
  };

  Recipe.create(newRecipe, (err, recipe) => {
    // check if there is an error
    if (err) {
      console.log(`unable to create recipe`);
      res.status(500).json({
        message: "unable to create recipe",
        error: err,
      });
      return;
    }
    // success!!! return the recipe
    res.status(201).json(recipe);
  });
});

// Delete - deletes the recipe with the given id
app.delete("/recipe/:id", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`deleting recipe with id: ${req.params.id}`);

  Recipe.findByIdAndDelete(req.params.id, function (err, recipe) {
    if (err) {
      console.log(`unable to delete recipe`);
      res.status(500).json({
        message: "unable to delete recipe",
        error: err,
      });
      return;
    } else if (recipe === null) {
      console.log(`unable to delete recipe with id ${req.params.id}`);
      res.status(404).json({
        message: `recipe with id ${req.params.id} not found`,
        error: err,
      });
    } else {
      res.status(200).json(recipe);
    }
  });
});

// Patch
app.patch("/recipe/:id", function (req, res) {
  console.log(`updating recipe with id: ${req.params.id} with body`, req.body);

  let updateRecipe = {};
  // name
  if (req.body.name !== null && req.body.name !== undefined) {
    updateRecipe.name = req.body.name;
  }
  // ingredients
  if (req.body.ingredients !== null && req.body.ingredients !== undefined) {
    updateRecipe.ingredients = req.body.ingredients;
  }
  // instructions
  if (req.body.instructions !== null && req.body.instructions !== undefined) {
    updateRecipe.instructions = req.body.done;
  }

  Recipe.updateOne(
    { _id: req.params.id },
    {
      $set: updateRecipe,
    },
    function (err, updateOneResponse) {
      if (err) {
        console.log(`unable to patch recipe`);
        res.status(500).json({
          message: "unable to patch recipe",
          error: err,
        });
        return;
      } else if (updateOneResponse.n === 0) {
        console.log(`unable to patch recipe with id ${req.params.id}`);
        res.status(404).json({
          message: `recipe with id ${req.params.id} not found`,
          error: err,
        });
      } else {
        res.status(200).json(updateOneResponse);
      }
    }
  );
});


// Put - replaces the todo with the given id`
app.put("/recipe/:id", function (req, res) {
    console.log(`replacing recipe with id: ${req.params.id} with body`, req.body);
  
    let updateRecipe = {
      name: req.body.name || "",
      instructions: req.body.instructions || "",
      ingredients: req.body.ingredients || "",
    };
  
    Recipe.updateOne(
      { _id: req.params.id },
      { 
        $set: updateRecipe,
       },
      function (err, updateOneResponse) {
        if (err) {
          console.log(`unable to replace recipe`);
          res.status(500).json({
            message: "unable to replace recipe",
            error: err,
          });
          return;
        } else if (updateOneResponse.n === 0) {
          console.log(`unable to replace recipe with id ${req.params.id}`);
          res.status(404).json({
            message: `recipe with id ${req.params.id} not found`,
            error: err,
          });
        } else {
          res.status(200).json(updateRecipe);
        }
      }
    );
  });




module.exports = app;
