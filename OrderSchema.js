const { Schema } = require("mongoose");
const OrderSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    mode: String,
});
module.exports = { OrderSchema };