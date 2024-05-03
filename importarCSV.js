const fs = require('fs');
const csv = require('csv-parser');
const connectDB = require('./db');
const Restaurante = require('./restauranteModel');

connectDB();

fs.createReadStream('restaurantes.csv')
    .pipe(csv())
    .on('data', async (row) => {
        try {

            await Restaurante.create({
                id: row.id,
                clasificacion: parseInt(row.clasificacion),
                nombre: row.nombre,
                sitio: row.sitio,
                correoElectronico: row.correoElectronico,
                telefono: row.telefono,
                calle: row.calle,
                ciudad: row.ciudad,
                estado: row.estado,
                lat: parseFloat(row.lat),
                lng: parseFloat(row.lng)
            });
        } catch (error) {
            console.error('Error al guardar restaurante:', error);
        }
    })
    .on('end', () => {
        console.log('Importación del CSV completada');
        process.exit();
    });
