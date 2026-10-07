{/*jab vi ham operating system me koi task run karte hai there is called process or line no-5
    un sare process ko track karta hai jo os kisi vi point par run kar raha hota hai
    or agar un url ko access karna ho to kewal type karna hoga ("process.env.value")
    or line no-18 ke through jo env ki value hai that will go to the system process 
    phir ham line no-23-24 ke through read kar rahe hai or sabse pahle hamne port-no read kar liya hai (3002)
    or jab ham esako deploy karenge AWS par aage chalke waha AWS ak port no allot karega jaha par ye deployed hai
    ham port no (const PORT=process.env.PORT) kuch aise read kar rahe hai kyuki system par ham port number read nhi karte hai
    esliye ham yaha par manual port no de dete hai(like:-3002), or agar ham ye line:- (const PORT=process.env.PORT ||3002;)
    likhna bhul jate hai to deployemnet ke time issues aa sakta hai or deployment ke time hamara backend work nhi karega
    because port no will be not available, usake baad hamne database ka url le liya hai:-(const url=process.env.MONGO_URL;)
    usake baad hamne mongoose ka package require kar liya hai:-(const mongoose=require("mongoose")) and the function is :-
    mongoose.connect(url); or en sare process ko complete karne ka baad koi error nhi aa rahe hai easaka matlab aapne mongodb se 
    connection stablised karliya hai or esaka ak proof hai ki mongodb ke database me dekhoge to statics aane start ho gye hai 


    */}

require("dotenv").config();
const express = require("express");
//ab hame connection stablish karne ke liye kya kya chahiye
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser")
// yaha ham model import/require kar rahe hai every item ke liye or usako niche save vi kar diya hai line no-155
// const { HoldingModel } = require("./model/HoldingModel");
const { PositionModel } = require("./model/PositionModel");
const { HoldingModel } = require("./model/HoldingModel");
const { OrderModel } = require("./model/OrderModel");
//ab jo mongoose ke andar method hai ya function hai connection ke liye wo hai:-
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
//yaha niche wali line me express application used ho raha hai
const app = express();

//body-parser or cors ko used kaise karte hai wo next two line me define hai or ye hamesha express() app ke baad hi hota hai
app.use(bodyparser.json()); //.json ka used esliye kiye hai kyuki json data used kar rahe hai
app.use(cors());

//no ab ham API ROUTE create kar rahe hai for database me se data ko featch karne ke liye esliye niche wale line me get() ka used karenge
// app.get("/addHoldings", async (req, res) => {
//     let tempHolding = [
//         {

//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     //orab  every object ke liye with in this array of object hame esako database me insert kar dena hai ;
//     //to basically har object ke liye model ko create karna hai or us model ke based par jo save operation hai usako perform karenge;
//     tempHolding.forEach((item) => { //forEach js me ak loop hai;
//         // yaha ham new model create kar rahe hai or es new model ke liye save() ko call kar rahe hai;
//         let newHolding = new HoldingModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save(); // ye jo save ka call hai ye item by item inserted to our database
//     });
//     res.send("done");
// });
// ye dono API ROUTE hai database se data ko fetch karne ke liye or dashboard me show karne ke liye;
app.get("/addPositions", async (req, res) => {
    let tempPosition = [
        {
            product: "CNC",
            name: "EVEREADY",
            qty: 2,
            avg: 316.27,
            price: 312.35,
            net: "+0.58%",
            day: "-1.24%",
            isLoss: true,
        },
        {
            product: "CNC",
            name: "JUBLFOOD",
            qty: 1,
            avg: 3124.75,
            price: 3082.65,
            net: "+10.04%",
            day: "-1.35%",
            isLoss: true,
        },
    ];
    tempPosition.forEach((item) => {
        let newPosition = new PositionModel({
            product: item.product,
            name: item.name,
            qty: item.qty,
            avg: item.avg,
            price: item.price,
            net: item.net,
            day: item.day,
            isloss: item.isLoss,
        });
        newPosition.save();
    });
    res.send("done");
});
//ye dono endpoint hai 
app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionModel.find({});
    res.json(allPositions);
});
//yaha par ak newOrder ka ak rout create kar rahe hai
app.post("/newOrder", async (req, res) => {
    let newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    });
    newOrder.save();
    res.send("order saved");
});

//ab mongodb connection ka code hai usako likh lenge in line no:-20
mongoose.connect(url)

app.listen(3002, () => {

    console.log("app started");
    mongoose.connect(url);
    console.log("DB connected");
});