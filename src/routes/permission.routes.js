const express = require("express");
const router = express.Router();

const {
  getPermissions,
  createPermission,
  getSinglePermission,
  updatePermission,
  deletePermission,
} = require("../controllers/permission.controller");
const {
  authenticateUser,
  authorizeUser,
} = require("../middlewares/auth.middleware");

router.use(authenticateUser, authorizeUser("Super Admin"));

router.get("/", getPermissions);
router.post("/", createPermission);
router.get("/:id", getSinglePermission);
router.patch("/:id", updatePermission);
router.delete("/:id", deletePermission);

module.exports = router;
