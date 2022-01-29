const express = require("express");
const mongoose = require("mongoose");

const routines = require('./controllers/DatabaseRoutines');

mongoose
  .connect("mongodb://localhost:27017/accountsdb", {
    useNewUrlParser: true,
  })
  .then(() => {
    const app = express();
    app.use(express.json());

    app.get("/accounts", routines.displayAccounts);
    app.get("/accounts/:username/:password", routines.login);
    app.post("/accounts/", routines.createAccount);
    app.put("/accounts/:account_id", routines.updateAccount);
    
    app.listen(3000, () => {
      console.log("Listening to port 3000...");
    });
  }).catch(() => {
      console.log("Cannot connect to database :( ... ");
  });
