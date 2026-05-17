import express from 'express';
import asyncHandler from 'express-async-handler';
import Favourite from './favouritesModel';

const router = express.Router();



router.get('/', async (req, res) => {
    console.log(req.user);
    const favourites = await Favourite.find({ userId: `${req.user._id}`});
    res.status(200).json(favourites);
});


router.post('/', asyncHandler(async (req, res) => {
    const newFavourites = req.body;
    newTask.userId = req.user._id;
    const postFavourites = await Favourite(newFavourites).save();
    res.status(201).json(postFavourites);
}));

router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Favourite.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Favourites Updated Successfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Favourites' });
    }
});


// delete 
router.delete('/:id', async (req, res) => {
    const result = await Favourite.deleteOne({
        _id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json();
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find Favourites' });
    }
});


export default router;