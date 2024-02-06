const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { 
    createInventoryController,
    getInventoryController,
    getUsersController,
    getHospitalController,
    getOrganisationController,
    getOrganisationForHospitalController,
    getInventoryHospitalController,
    getRecentInventoryController
     } = require('../controllers/inventoryController');

const router =express.Router();

//routes
// ADD INVENTORY || POST
router.post("/create-inventory", authMiddleware, createInventoryController);

//GET ALL BLOOD RECORDS
router.get("/get-inventory", authMiddleware, getInventoryController);

//GET RECENT BLOOD RECORDS
router.get("/get-recent-inventory", authMiddleware, getRecentInventoryController);

//GET HOSPITAL BLOOD RECORD
router.post("/get-inventory-hospital", authMiddleware, getInventoryHospitalController);

//GET USER RECORDS
router.get("/get-users", authMiddleware, getUsersController);

//GET HOSPITALS RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET ORGANISATIONS RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

//GET orgnaisation RECORDS
router.get("/get-organisation-for-hospital", authMiddleware, getOrganisationForHospitalController);

module.exports = router;
