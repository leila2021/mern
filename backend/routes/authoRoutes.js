const express =require('express');
const router=express.Router();
const {register,login,getAuthUser}=require('../controllers/autoControllers');
const {registerRules,validator}=require( '../middlewares/bodyValidator')
const isAuth=require('../middlewares/isAuth')
//post
// registre un user
// access public
router.post('/register',registerRules(),validator,register)
// post
// log un user
// access public
router.post('/login',login)
// get
// get autho user
// access private : client login
router.get('/me',isAuth,getAuthUser)



module.exports=router


