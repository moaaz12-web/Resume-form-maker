const fetch = require("node-fetch");

// Load User model
const User = require("../models/user");
// const Document = require("../models/document");
const TextDocumentSchema = require("../models/TextDocumentSchema");

module.exports = {

    //  ---------------------------------------- //create doc method//--------------------------- //


saveDocument: async(req,res)=>{
    try {
        const { text, translated, user } = req.body;
        // console.log(text, translated, user)
    
        // if (!text) {
        //   return res.status(400).json({ message: "text is required" });
        // }

        // if (!user) {
        //   return res.status(400).json({ message: "user is required" });
        // }
        //! User logged in hoga already agar wo ye page access kare!!!
    
        TextDocumentSchema.create({ text, translated, user });
        await TextDocumentSchema.save();
        res.status(201).json({ message: "Document saved successfully" });
      } catch (error) {
        // console.error(error.message);
        res.status(500).json({ message: "Error saving document. Maybe you didn't generate anything? 🤔" });
      }
},

getAllUserDocument: async(req, res) => {
    try {
        const findAll = await Document.find({ user: req.params.id });
        if (!findAll) {
            res.json({ message: "You dont have any document" });
        } else {
            // res.json(findAll);
            res.status(200).json({
                findAll,
            });
        }
    } catch (error) {
        res.json(error);
    }
},



    // createDocument: async(req, res) => {
    //     const {
    //         language,
    //         tone,
    //         usecase,
    //         description,
    //         variants,
    //         generatedText,
    //         translatedText,
    //         isFavourite,
    //         user,
    //     } = req.body;
    //     try {
    //         await Document.create({
    //             language,
    //             tone,
    //             usecase,
    //             description,
    //             variants,
    //             generatedText,
    //             translatedText,
    //             isFavourite,
    //             user,
    //         });
    //         res.status(201).json({ message: "document created successfully" });
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // },


    // favouriteDocument: async(req, res) => {
    //     try {
    //         const updatedDocument = await Document.findById(req.params.id);
    //         updatedDocument.isFavourite = true;
    //         await updatedDocument.save();
    //         res.status(200).json({ message: "document favourited successfully" });
    //     } catch (error) {
    //         res.json(error);
    //     }
    // },

 
    // // 
    // getAllUserFavDocument: async(req, res) => {
    //     try {
    //         const findAll = await Document.find({
    //             user: req.params.id,
    //             isFavourite: true,
    //         });
    //         if (!findAll) {
    //             res.json({ message: "You dont have any fav document" });
    //         } else {
    //             // res.json(findAll);
    //             res.status(200).json({
    //                 findAll,
    //             });
    //         }
    //     } catch (error) {
    //         res.json(error);
    //     }
    // },
};