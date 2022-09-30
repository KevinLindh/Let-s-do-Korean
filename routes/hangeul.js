const express = require("express");
const router = express.Router();
const hangeulController = require("../controllers/hangeulTest");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:section", ensureAuth, hangeulController.getHangeulTest);
router.get("/test/:section", ensureAuth, hangeulController.getHangeulReview)
router.post("/result/:section", ensureAuth, hangeulController.createHangeulResult);

module.exports = router;