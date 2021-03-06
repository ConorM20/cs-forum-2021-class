  
const server = require("./server");
const persist = require("./persist");

const port = process.env.PORT || process.argv[2] || 8080;

persist(() => {
  server.listen(port, () => {
    console.log(`Code School 2021 Forum App Running on Port ${port}`);
  });
});