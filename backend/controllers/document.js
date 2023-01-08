const fetch = require("node-fetch");

// Load User model
const User = require("../models/user");
const Document = require("../models/document");

module.exports = {
    //  ---------------------------------------- //create doc method//--------------------------- //

    createDocument: async(req, res) => {
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
    },

    // const updatedDocument = await Document.findById(req.body.id);
    // updatedDocument.isFavourite = true;
    // await updatedDocument.save();
    // res.status(200).json({ message: "document updated successfully" });
    favouriteDocument: async(req, res) => {
        try {
            const updatedDocument = await Document.findById(req.params.id);
            updatedDocument.isFavourite = true;
            await updatedDocument.save();
            res.status(200).json({ message: "document favourited successfully" });
        } catch (error) {
            res.json(error);
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
    // 63b3ed5cf183c1955e4e41d6
    getAllUserFavDocument: async(req, res) => {
        try {
            const findAll = await Document.find({
                user: req.params.id,
                isFavourite: true,
            });
            if (!findAll) {
                res.json({ message: "You dont have any fav document" });
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
};