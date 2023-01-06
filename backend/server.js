const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const cookieParser = require("cookie-parser");
const { Configuration, OpenAIApi } = require("openai");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

//load env variables
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const configuration = new Configuration({
    apiKey: "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",
});

// express app config
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cookieParser());

app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: "GET,POST,PUT,DELETE,OPTIONS",
    })
);

//Require application Route modules
const userRoutes = require("./routes/users");
const docRoutes = require("./routes/document");

app.use("/user", userRoutes);
app.use("/doc", docRoutes);

app.post("/api/generate", (req, response) => {
    const { language, Tone, Usecase, Description, Variants } = req.body;
    // do something with the data, such as calling a function to generate text
    // const generatedText = generateText(language, Tone, Usecase, Description, Variants);

    let input = `Write a ${Usecase} for me in ${language} language. Make the tone ${Tone}. The description or keywords are these: ${Description}. Make ${Variants} versions of these.`;
    // console.log(input)

    const openai = new OpenAIApi(configuration);

    const output = openai
        .createCompletion({
            model: "text-davinci-003",
            prompt: input,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((res) => {
            // console.log(res.data.choices[0].text)
            response.send({ generated: res.data.choices[0].text });
        });
});

app.post("/api/translate", (req, response) => {
    const { language, text } = req.body;
    // do something with the data, such as calling a function to generate text
    // const generatedText = generateText(language, Tone, Usecase, Description, Variants);

    let input = `Translate the following text into ${language} language. \n ${text}`; // console.log(input)

    const openai = new OpenAIApi(configuration);

    const output = openai
        .createCompletion({
            model: "text-davinci-003",
            prompt: input,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        .then((res) => {
            // console.log(res.data.choices[0].text)
            response.send({ translated: res.data.choices[0].text });
        });
});

app.post("/payment", cors(), async(req, res) => {
    let { amount, id } = req.body;
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Word Weaver Payment",
            payment_method: id,
            confirm: true,
        });
        console.log("Payment", payment);
        res.json({
            message: "Payment successful",
            success: true,
        });
    } catch (error) {
        console.log("Error", error);
        res.json({
            message: "Payment failed",
            success: false,
        });
    }
});

app.listen(PORT, function() {
    console.log(`Server Runs Perfectly at http://localhost:${PORT}`);
});

// "/user/google-login": {
//     "target": "http://localhost:5000/"
// },
// "/user/facebook-login": {
//     "target": "http://localhost:5000/"
// },