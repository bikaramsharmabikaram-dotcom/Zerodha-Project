const { model } = require("mongoose");
//schemas:-esake basis par hi model create karne wale hai
const { PositionSchema } = require("../schemas/PositionSchema");
const PositionModel = new model("position", PositionSchema); //jo ye(position) hai, mongodb automatically take this or esaka plural(positions) collection ka name ban jayega or ham yahi se apne collection ka name decide karte hai. or hamne paranthesis ke andar parameter daal diya hai 
//or aisa karne se model vi create ho jayega or jo ye model create ho raha hai ye based hai schema par
module.exports = { PositionModel };