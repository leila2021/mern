const { body, validationResult } =require('express-validator');

const registerRules=()=>[
body("name","name is required").notEmpty(),
body("lastname","lastname is required").notEmpty(),
body("mail","mail is not valid").isEmail(),
body("password","pwd must be 6 cars").isLength({
    min:6,max:20,
}),
];
const loginRules=()=>[
    body("mail","mail is not valid").isEmail(),
    body("password","pwd must be 6 cars").isLength({
        min:6,max:20,
    }),
    ];
    const customErrors=(errorArray)=>errorArray.map(
        (err)=>({"msg":err.msg})
    );
    const validator=(req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json( customErrors(errors.array()) );}
          else next();

    }
    module.exports={ validator,registerRules,loginRules } 