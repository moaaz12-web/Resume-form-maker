const { Configuration, OpenAIApi } = require("openai");
const env = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();
const PORT = process.env.PORT || 5000;

// express app config
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));
app.use(cookieParser());

// Routes
// app.use("/api", require("q./routes/generation.js"))
app.use(
    cors({
        origin: ["http://localhost:5000"],
        methods: "GET,POST,PUT,DELETE,OPTIONS",
    })
);



app.post("/api/projects", async (req, res) => {
    const { projects } = req.body;
  
    const configuration = new Configuration({
      apiKey: process.env.CHATGPT_API_KEY,
    });
  
    const openai = new OpenAIApi(configuration);
  
    const generatedDescriptions = [];
  
    const projectsArray = Array.isArray(projects) ? projects : [projects]; // Wrap single project in an array
  
    for (let i = 0; i < projectsArray.length; i++) {
      const project = projectsArray[i];
      const description = project.description;
  
      const prompt = `Improve the following description, but don't add anything that is not mentioned. Make it good to read:\n ${description}`;
  
      try {
        const output = await openai.createCompletion({
          model: "text-davinci-003",
          prompt,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        })
  
        const generatedDescription = output.data.choices[0].text;
        generatedDescriptions.push(generatedDescription);
      } catch (error) {
        // console.error(error);
        generatedDescriptions.push("Error");
      }
    }
  
    const updatedProjects = projectsArray.map((project, i) => {
      const generatedDescription = generatedDescriptions[i];
      return {
        ...project,
        description: generatedDescription === "Error" ? project.description : generatedDescription,
      };
    });
  
    res.send(updatedProjects);
  });
  


  app.post("/api/experience", async (req, res) => {
    const { experience } = req.body;
  
    const configuration = new Configuration({
      apiKey: process.env.CHATGPT_API_KEY,
    });
  
    const openai = new OpenAIApi(configuration);
  
    const generatedDescriptions = [];
  
    const experienceArray = Array.isArray(experience) ? experience : [experience]; // Wrap single experience in an array
  
    for (let i = 0; i < experienceArray.length; i++) {
      const { description } = experienceArray[i];
      const prompt = `Improve the following description, but don't add anything that is not mentioned. Make it good to read: \n ${description}`;
  
      try {
        const output = await openai.createCompletion({
          model: "text-davinci-002",
          prompt,
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
  
        const generatedDescription = output.data.choices[0].text.trim();
        generatedDescriptions.push(generatedDescription);
      } catch (error) {
        // console.error(error);
        generatedDescriptions.push("Error");
      }
    }
  
    const updatedExperience = experienceArray.map((exp, i) => {
      const generatedDescription = generatedDescriptions[i];
      return {
        ...exp,
        description: generatedDescription === "Error" ? exp.description : generatedDescription,
      };
    });
  
    res.send(updatedExperience);
  });
  


  app.post("/api/summary", async (req, res) => {
    const { summ } = req.body;
  
    const configuration = new Configuration({
      apiKey: process.env.CHATGPT_API_KEY,
    });
  
    const openai = new OpenAIApi(configuration);
  
    try {
      const output = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Improve the following description, but don't add anything that is not mentioned. Make it good to read.\n ${summ}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
  
      const generatedSummary = output.data.choices[0].text;
      res.send({ generated: generatedSummary });
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  });
  
  



app.listen(PORT, function () {
    console.log(`Server Runs Perfectly at http://localhost:${PORT}`);
});