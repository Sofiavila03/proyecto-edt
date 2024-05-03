app.get('/restaurantes/estadisticas', async (req, res) => {
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
  