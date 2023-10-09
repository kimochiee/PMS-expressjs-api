const express = require("express");
const router = express.Router();

const {
  getAreas,
  createArea,
  getSingleArea,
  updateArea,
  deleteArea,
  getFloors,
  getWingsByFloor,
  getSlots,
  getSlot,
  updateSlot,
  insertSlot,
  deleteSlot,
} = require("../controllers/area.controller");

router.get("/", getAreas);
router.post("/", createArea);
router.get("/:id", getSingleArea);
router.patch("/:id", updateArea);
router.delete("/:id", deleteArea);

router.get("/:active/floors", getFloors);
router.get("/:floor/wings", getWingsByFloor);

router.get("/:floor/:wing", getSlots);
router.patch("/:floor/:wing", insertSlot);
router.get("/floor/slots/:id", getSlot);
router.patch("/floor/slots/:id", updateSlot);
router.patch("/slot/:areaId/:slotId", deleteSlot);

module.exports = router;
