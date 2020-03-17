const router = require('express').Router();
let comments = require('../models/comments.model');

let User = require('../models/user.model');


router.route('/').get((req,res)=>{
    comments.find()
    .then(comment=>res.json(comment))
    .catch(err=> res.status(400).json("Error"+err));

});

router.route('/add').post((req,res)=>{


    
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const username = req.body.username;


   
    const newExercise= new comments({
        username,
        description,
        date,
      });  
    
    
    newExercise.save() 
    .then(()=> res.json('Comment and User Added'))
    .catch(err=> res.status(400).json("error"+err));


})
router.route('/:id').delete((req, res) => {
    comments.findByIdAndDelete(req.params.id)
      .then(() => res.json('Exercise deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;

