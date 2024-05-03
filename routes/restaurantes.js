const express = require('express');
const router = express.Router();
const Restaurantes = require('../models/restaurantes');

router.get('/', async (req, res) => {
    try {
        const restaurantes = await Restaurantes.findAll();
        res.json(restaurantes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los restaurantes' });
    }
});


router.post('/', async (req, res) => {
    try {
        const restaurante = await Restaurantes.create(req.body);
        res.json(restaurante);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al crear el restaurante' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        await Restaurantes.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Restaurante actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el restaurante' });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        await Restaurantes.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Restaurante eliminado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el restaurante' });
    }
});

module.exports = router;
