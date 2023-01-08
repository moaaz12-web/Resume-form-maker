const express = require("express")
const cors = require('cors');
const { Configuration, OpenAIApi } = require("openai");


const app = express()
const configuration = new Configuration({
  apiKey: "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",
});

app.use(cors());
app.use(express.json())

// Routes
// app.use("/api", require("q./routes/generation.js"))

app.post('/api/generate', (req, response) => {
  const { language, Tone, Usecase, Description, Variants } = req.body;
  // do something with the data, such as calling a function to generate text
  // const generatedText = generateText(language, Tone, Usecase, Description, Variants);

  let input = `Write a ${Usecase} for me in ${language} language. Make the tone ${Tone}. The description or keywords are these: ${Description}. Make ${Variants} versions of these.`
  // console.log(input)

  const openai = new OpenAIApi(configuration);

const output = openai.createCompletion({
  model: "text-davinci-003",
  prompt: input,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
}).then((res)=>{
  // console.log(res.data.choices[0].text)
  response.send({ generated: res.data.choices[0].text });
})
});


app.post('/api/translate', (req, response) => {
  const { language, text } = req.body;
  // do something with the data, such as calling a function to generate text
  // const generatedText = generateText(language, Tone, Usecase, Description, Variants);

let input = `Translate the following text into ${language} language. \n ${text}`  // console.log(input)

const openai = new OpenAIApi(configuration);

const output = openai.createCompletion({
  model: "text-davinci-003",
  prompt: input,
  temperature: 0.7,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
}).then((res)=>{
  // console.log(res.data.choices[0].text)
  response.send({ translated: res.data.choices[0].text });
})
});



let port = 5000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })