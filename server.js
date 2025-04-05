const express = require('express')
const { getAllCars, createCar, getCar, updateCar, deleteCar } = require('./controllers');
const { logger } = require('./middleware');
const idControl = require('./middleware/idControl');

const app = express();
const PORT = 3000

//* Middleware(ara yazılım)
app.use(logger)


// * isteklerin body/header/params işleyen middleware
app.use(express.json())

// * 1. Yol *//
// app.get('/api/v1/cars', getAllCars)
// app.post('/api/v1/cars', createCar)
// app.get('/api/v1/cars:id', getCar)
// app.patch('/api/v1/cars:id', updateCar)
// app.delete('/api/v1/cars:id', deleteCar)

// * 2. Yol *//
app.route('/api/v1/cars').get(getAllCars).post(createCar)
app.route('/api/v1/cars/:id').get(idControl, getCar).patch(idControl, updateCar).delete(idControl, deleteCar)

app.listen(PORT, () => {
    console.log(`Server ${PORT} portunda dinlemede`)
})