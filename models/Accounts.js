const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    account_id: String,
    name: String,
    email: String,
    username: String,
    password: String,
});

module.exports = mongoose.model('account', schema);