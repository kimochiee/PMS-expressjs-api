const express = require("express");
const router = express.Router();

const {
  getSlots,
  createSlot,
  getSingleSlot,
  updateSlot,
  deleteSlot,
} = require("../controllers/slot.controller");

router.get("/", getSlots);
router.post("/", createSlot);
router.get("/:id", getSingleSlot);
router.patch("/:id", updateSlot);
router.delete("/:id", deleteSlot);

module.exports = router;
