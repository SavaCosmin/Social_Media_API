const router = require("express").Router();

router.get("/", (req,res)=>{
    console.log("gost page")
})

module.exports = router