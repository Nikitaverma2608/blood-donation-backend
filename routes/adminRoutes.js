const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getUsersListController,
  getHospitalListController,
  getOrgListController,
  deleteUserController,
} = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

//router object
const router = express.Router();

//Routes

//GET || User LIST
router.get("/user-list", authMiddleware, adminMiddleware, getUsersListController );

//GET || HOSPITAL LIST
router.get( "/hospital-list", authMiddleware, adminMiddleware, getHospitalListController );

//GET || ORG LIST
router.get("/org-list", authMiddleware, adminMiddleware, getOrgListController);

// DELETE DONAR || GET
router.delete( "/delete-user/:id", authMiddleware, adminMiddleware, deleteUserController );

//EXPORT
module.exports = router;