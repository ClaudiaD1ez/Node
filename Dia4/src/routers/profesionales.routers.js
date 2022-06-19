const {Router} = require ("express")
const router = Router();
const profesContrl = require("../controller/profesionales.controller")

router.get("/", profesContrl.getStart);
router.get("/professionales", profesContrl.getProf);
router.post("/professionales", profesContrl.postProf);
router.put("/professionales", profesContrl.putProf);
router.delete("/professionales", profesContrl.deleteProf);




module.exports = router;
