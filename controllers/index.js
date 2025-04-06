const fs = require('fs')
const crypto = require('crypto')
const write = require('../utils/write')



let cars = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/cars.json`, 'utf-8')
)

exports.getAllCars = (req, res) => {
    res.status(200).json({
        message: 'Araç Verilerini Alir',
        results: cars.length,
        cars
    })
}

exports.createCar = (req, res) => {
    res.status(201).json({
        message: 'Araç Oluşturuldu',
        car: newCar
    })
}

exports.getCar = (req, res) => {
    res.status(200).json({
        message: 'Araç Bulundu',
        car: req.car
    })
}

exports.updateCar = (req, res) => {

    const updateData = req.body
    const updateCar = { ...req.car, ...updateData }

    const index = cars.findIndex((car) => car.id == updateCar.id)

    cars.splice(index, 1, updateCar)

    write(cars)

    res.status(200).json({
        message: 'Araç Güncellendi',
        car: updateCar
    })
}

exports.deleteCar = (req, res) => {
    res.status(204).json({
        message: 'Araç Silindi'
    })
}