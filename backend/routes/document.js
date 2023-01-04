const express = require("express");
const router = express.Router();
const DocumentController = require("../controllers/document");

// POST request for creating a new user.
router.post("/document", DocumentController.createDocument);
router.put("/update/document/:id", DocumentController.favouriteDocument);
router.get("/document", DocumentController.getAllUserDocument);

module.exports = router;

// "proxy": "http://localhost:5000/"
