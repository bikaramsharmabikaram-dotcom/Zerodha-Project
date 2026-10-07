const { model } = require("mongoose");
//schemas:-esake basis par hi model create karne wale hai
const { HoldingSchema } = require("../schemas/HoldingSchema");
const HoldingModel = new model("Holding", HoldingSchema); //jo ye(holding) hai, mongodb automatically take this or esaka plural(holdings) collection ka name ban jayega or ham yahi se apne collection ka name decide karte hai. or hamne paranthesis ke andar parameter daal diya hai 
//or aisa karne se model vi create ho jayega
module.exports = { HoldingModel };