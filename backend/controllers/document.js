const fetch = require("node-fetch");

// Load User model
const User = require("../models/user");
const Document = require("../models/document");

module.exports = {
  //  ---------------------------------------- //create doc method//--------------------------- //

  createDocument: async (req, res) => {
    const {
      language,
      tone,
      usecase,
      description,
      variants,
      generatedText,
      translatedText,
      isFavourite,
      user,
    } = req.body;
    try {
      await Document.create({
        language,
        tone,
        usecase,
        description,
        variants,
        generatedText,
        translatedText,
        isFavourite,
        user,
      });
      res.status(201).json({ message: "document created successfully" });
    } catch (error) {
      console.log(error.message);
    }
    // try {
    //   if (!isValid) {
    //     res.status(404).json(errors);
    //   } else {
    //     await User.findOne({ email }).then(async (exist) => {
    //       if (exist) {
    //         errors.email = "Email already in use";
    //         return res.status(404).json(errors);
    //       } else {
    //         const hashedpassword = await bcrypt.hash(password, 8);
    //         await User.create({
    //           name,
    //           email,
    //           password: hashedpassword,
    //         });
    //         res.status(201).json({ message: "user added with success" });
    //       }
    //     });
    //   }
    // } catch (error) {
    //   console.log(error.message);
    // }
  },
  //   ---------------------------------------------
};
