const router = require('express').Router()



router.get("/", async (req, res, next)=>{
    res.send({message : "OK api route is working"})
})

module.exports = router