const express = require("express");
const router = express.Router();

const {
  getRates,
  createRate,
  getSingleRate,
  getRateByCode,
  updateRate,
  deleteRate,
} = require("../controllers/rate.controller");

router.get("/", getRates);
router.post("/", createRate);
router.get("/:id", getSingleRate);
router.patch("/:id", updateRate);
router.delete("/:id", deleteRate);

router.get("/rate/:rateCode", getRateByCode);

module.exports = router;
