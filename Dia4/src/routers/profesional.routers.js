const {Router} = require ("express")
const router = Router();
const profContrl = require("../controller/profesional.controller")


router.get("/", profContrl.getStart);

router.get("/professional", profContrl.getProf);

router.post("/professional", profContrl.postProf);

router.put("/professional", profContrl.putProf);

router.delete("/professional", profContrl.deleteProf);

module.exports = router;
