const express = require('express')
const router=express.Router()


const bookcontroller=require('../BookController/bookcontroller')

router.post('/insert',bookcontroller.createBook);
router.get('/all',bookcontroller.allbook);
router.get('/all/:id',bookcontroller.getidbook);
router.patch("/update/:id",bookcontroller.updatebook)
router.delete("/delete/:id",bookcontroller.deletebook)
router.delete("/delete",bookcontroller.deleteall)


module.exports=router;

