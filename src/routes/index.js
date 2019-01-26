const { Router } = require('express');
const router = Router()

router.get('/', (req,res)=>{
   res.status(200).send('Hola Alex Colombo')
})

router.get('/alex', (req,res)=>{
   res.json({message: 'Hola Alex'})
})


module.exports = router;

