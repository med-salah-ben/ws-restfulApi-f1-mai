const express =require("express")
const router = express.Router();
const controllers = require("../controllers/ContactControllers");

//method POST
// Adding New  Contact
router.post("/newcontact",controllers.postContact);
router.get("/", controllers.getContacts);
router.get("/:id", controllers.getContactByID);
router.delete("/:id", controllers.deleteContactByID);
router.put("/:id", controllers.updateContact);




module.exports = router