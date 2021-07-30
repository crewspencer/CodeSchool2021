/*

Pretty much copy pasta the other file

*/
const server = require("./server");
const persist = require("./persist");

const portNumber = process.env.PORT || 8080;

persist.connect(() => {
  // start the server
  server.listen(portNumber, () => {
    console.log(`Server running on ${portNumber}`);
  });
});
