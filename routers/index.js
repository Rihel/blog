const express=require('express');

const router=express.Router();

router.get('/',(req,res,next)=>{
    res.render('page/index',{
        title:'首页'
    })
})

module.exports=router;
