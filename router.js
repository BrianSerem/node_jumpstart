const express = require('express');
const router = express.Router();
const cars = require('./data');
const uuid = require('uuid');

//get all cars
router.get('/', (req, res) =>
    res.json(cars)
);

//get a singe car by id
router.get('/:id', (req, res) => {
    const exits = cars.some(car => car.id === parseInt(req.params.id));

    if (exits) {
        const car = cars.filter(car => car.id === parseInt(req.params.id));
        res.json(car);

    } else {
        res.status(400).json({
            message: `Car with id ${req.params.id} not found`
        })
    }
});

router.post('/', (req, res) => {
    const newCar = {
        id: uuid.v4(),
        name: req.body.name,
        brand: req.body.brand,
        engine: req.body.engine
    };
    if (!newCar.name || !newCar.brand) {
        res.status(400).json({
            message: 'You must provide name and brand'
        });
    } else {
        cars.push(newCar);
        // res.json(newCar);
        res.redirect('/');
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;

    const exists = cars.some(car => car.id === parseInt(id));
    console.log(exists)

    if (!exists) {
        return res.status(400).json({
            message: `Car with id ${id} does not exist`
        });
    }
    const car = cars.filter(car => car.id === parseInt(id));
    cars.pop(car);
    res.json({
        message: 'car has been removed succesfully',
        cars: cars.filter(car => car.id != parseInt(id))
    });

})

router.put('/:id', (req, res) => {

    const carId = req.params.id;
    const exists = cars.some(car => car.id === parseInt(carId));

    if (exists) {
        const updateInfo = req.body;
        cars.forEach(car => {
            if (car.id === parseInt(carId)) {
                car.name = updateInfo.name ? updateInfo.name : car.name;
                car.brand = updateInfo.brand ? updateInfo.brand : car.brand;
            }
        });
        res.json({
            message: 'Car updated succesfully',
            car: 'car'
        })
    } else {
        res.status(400).json({
            message: `Car with id ${carId} not found`
        })
    };
})

module.exports = router;