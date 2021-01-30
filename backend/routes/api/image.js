const { Image } = require('../../db/models')
const asyncHandler = require('express-async-handler');
const router = require('express').Router();

router.get('/', asyncHandler(async (req, res) => {
    const images = await Image.findAll()
    //console.log(images)
    res.json({ images })  //used to send the data BACK to the front end.
}))

// router.get(`/:id(\\d+)`, asyncHandler(async (req, res) => {
//     const image = await Image.findOne({
//         where: {

//         }
//     })
// }))



module.exports = router;