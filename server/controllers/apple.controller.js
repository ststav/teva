import Apple from '../models/apples.model'
import logger from '../core/logger/app-logger'

const controller = {};

controller.getAll = async (req, res) => {
    try {
        const apples = await Apple.getAll();
        logger.info('sending all apples...');
        res.send(apples);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
};

controller.addCsv = async (req, res) => {
    let carToAdd = Apple({
        name: req.body.name
    });
    try {
        const savedCar = await Apple.addCsv(carToAdd);
        logger.info('Adding car...');
        res.send('added: ' + savedCar);
    }
    catch(err) {
        logger.error('Error in getting cars- ' + err);
        res.send('Got error in getAll');
    }
};

export default controller;
