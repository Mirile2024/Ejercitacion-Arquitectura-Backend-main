const router = require("express").Router();
const {
    getdog,
    getdogById,
    postDog,
    putDog,
    deleteDog,
} = require("../controllers/dogController");
router.get("/", getdog);
router.get("/:id", getdogById);
router.post("/", postDog);
router.put("/:id", putDog);
router.delete("/:id", deleteDog);

module.exports = router;
