const express = require("express");
const router = express.Router();

const {
  getRoles,
  createRole,
  getSingleRole,
  updateRole,
  deleteRole,
} = require("../controllers/role.controller");

router.get("/", getRoles);
router.post("/", createRole);
router.get("/:id", getSingleRole);
router.patch("/:id", updateRole);
router.delete("/:id", deleteRole);

module.exports = router;
