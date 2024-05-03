const express = require('express');
const router = express.Router();
const Restaurante = require('../models/restaurantes');

router.get('/', async (req, res) => {
    try {
        const restaurantes = await Restaurante.findAll();
        res.json(restaurantes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los restaurantes' });
    }
});


router.post('/', async (req, res) => {
    try {
        const restaurante = await Restaurante.create(req.body);
        res.json(restaurante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el restaurante' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        await Restaurante.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Restaurante actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el restaurante' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Restaurante.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Restaurante eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el restaurante' });
    }
});

router.get('/restaurantes/estadisticas', async (req, res) => {
    const { latitude, longitude, radius } = req.query;

    try {
        const restaurantes = await Restaurante.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [parseFloat(longitude), parseFloat(latitude)]
                    },
                    $maxDistance: parseFloat(radius)
                }
            }
        });

        const count = restaurantes.length;
        const avg = restaurantes.reduce((sum, resto) => sum + resto.clasificacion, 0) / count;
        const std = Math.sqrt(restaurantes.reduce((sum, resto) => sum + Math.pow(resto.clasificacion - avg, 2), 0) / count);

        res.json({ count, avg, std });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;
