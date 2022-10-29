import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const CarRoute = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

CarRoute.post('/cars', (req, res) => carController.create(req, res));
CarRoute.get('/cars/:id', (req, res) => carController.readOne(req, res));
CarRoute.get('/cars', (req, res) => carController.read(req, res));

export default CarRoute;