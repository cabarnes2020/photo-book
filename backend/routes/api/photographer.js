const {Photographer} = require('../../db/models')
const asyncHandler = require('express-async-handler');
const router = require('express').Router();


router.get('/', asyncHandler(async (req, res) => {
    const photographers = await Photographer.findAll()
    res.json({photographers})  //used to send the data BACK to the front end.
}))

router.get('/best', asyncHandler(async (req, res) => {
    const photographers = await Photographer.findAll({
        where: {
            avgRating: 5
        }
    })
    res.json({ photographers })  //used to send the data BACK to the front end.
}))





module.exports = router;