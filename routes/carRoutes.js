const express = require('express')
const { getAllCars, createCar, getCar, updateCar, deleteCar } = require('../controllers');
const idControl = require('../middleware/idControl');

const router = express.Router()

router('/api/v1/cars').get(getAllCars).post(createCar)
router('/api/v1/cars/:id').get(idControl, getCar).patch(idControl, updateCar).delete(idControl, deleteCar)

module.exports = router