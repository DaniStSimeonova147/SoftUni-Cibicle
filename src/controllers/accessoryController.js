const router = require('express').Router();

const accessoryManager = require('../managers/accessoryManager');

router.get('/create', (req, res) => {
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;

    await accessoryManager.create({ name, description, imageUrl });

    res.redirect('/');
});

router.get('/:cubeId/attach-accessoy', (req,res) =>{
    res.render('accessory/attach');
});

module.exports = router;