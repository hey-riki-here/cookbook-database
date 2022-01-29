const res = require("express/lib/response");
const Accounts = require("../models/Accounts");

exports.displayAccounts = async (req, res) => {
  const accounts = await Accounts.find();
  res.send({ data: accounts });
};

exports.createAccount = async (req, res) => {
  const account = new Accounts(req.body);
  await account.save();
  res.send("Nice");
};

exports.login = async (req, res) => {
  try {
    const account = await Accounts.find({
      username: { $regex: `\^${req.params.username}\$` },
      password: { $regex: `\^${req.params.password}\$` },
    });
    res.send(account);
  } catch (error) {
    res.status(404);
  }
};

exports.updateAccount = async (req, res) => {
  try {
    await Accounts.updateOne(
      { account_id: req.params.account_id },
      { name: req.body.name }
    );
    await Accounts.updateOne(
      { account_id: req.params.account_id },
      { email: req.body.email }
    );
    await Accounts.updateOne(
      { account_id: req.params.account_id },
      { username: req.body.username }
    );
    await Accounts.updateOne(
      { account_id: req.params.account_id },
      { password: req.body.password }
    );
  } catch (error) {
    console.log(error);
  }
};
