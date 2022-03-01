const router = require("express").Router()
const Cryptojs = require("crypto-js")


router.post("/hash", async (req,res) => {
    console.log(req.body.password);
  const password = await Cryptojs.AES.encrypt(JSON.stringify(req.body.password), "scret key 12").toString()
  if(req.body.password){
      res.status(200).json(password)
  }else{
      res.status(500).json("error")
  }
})

module.exports = router