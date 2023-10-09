const express = require("express");
const router = express.Router();

const {
  getPermissions,
  createPermission,
  getSinglePermission,
  updatePermission,
  deletePermission,
} = require("../controllers/permission.controller");

router.get("/", getPermissions);
router.post("/", createPermission);
router.get("/:id", getSinglePermission);
router.patch("/:id", updatePermission);
router.delete("/:id", deletePermission);

module.exports = router;
