const express = require('express');


const router = express.Router();
//统一返回格式
var responseData;

router.use(function (req, res, next) {
    responseData = {
        code: 0,
        message: ''
    }

    next();
});
router.post('/user/login', (req, res, next) => {
    console.log(req.body.username);

})
router.post('/user/register', (req, res, next) => {
    let [username, password] = [req.body.username, req.body.password];
    if (username.length < 12) {
        responseData.code = 1;
        responseData.message = "账号长度不能小于12位";
        res.json(responseData);
        return;
    }
    responseData.message = '注册成功！'
    res.json(responseData);
})
module.exports = router;
