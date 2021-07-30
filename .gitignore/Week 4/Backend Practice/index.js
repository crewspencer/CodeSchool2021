const express = require("express")
const store = require("./model")

const app = express();

const port = process.argv[2] || 8001

//
app.use(express.json({}));


// Get - gets all of the todos (does not have a URL param)
app.get("/todo", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("getting all todos");
  res.send(JSON.stringify(store));
});

// Get - gets the todo with the given id
app.get("/todo/:id", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`getting todo with id: ${req.params.id}`);

  if (store[req.params.id] === undefined) {

    res.status(404).send(
      JSON.stringify({
        error:"not found",
      })
    );
    return;
  }
  res.send(JSON.stringify(store[req.params.id]));
});

// Post - Creates one todo (does not have a URL param)
app.post("/todo", function(req, res) {
  res.setHeader("Content-Type", "application/json");
  console.log(`creating a todo with body`, req.body);

  store[req.body.id] = req.body;
  
  res.status(201).send(JSON.stringify(store[req.body.id]));
});

// Delete - delete one
app.delete("/todo/:id", function(req, res) {
  console.log(`deleting todo with id: ${req.params.id} `);
  if (store[req.params.id] === undefined) {

    res.status(404).send(
      JSON.stringify({
        error:"not found",
      })
    );
    return;
  }

   let todo = store[req.params.id];

   delete store[req.params.id];

   res.send(JSON.stringify(todo));

});

// Patch - Update
app.patch("/todo/:id", function(req, res) {
  console.log(`updating todo with id: ${req.params.id} with body`, req.body);
  res.send(`return from updating todo with id: ${req.params.id}`);
});

// Put - Replace
app.put("/todo/:id", function(req, res) {
  console.log(`replacing todo with id: ${req.params.id}with body`, req.body);

  if (store[req.params.id] === undefined) {

    res.status(404).send(
      JSON.stringify({
        error:"not found",
      })
    );
    return;
  }
  store[req.params.id] = req.body;

  res.send(JSON.stringify(store[req.params.id]));
});


// Listen - Port Number
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

