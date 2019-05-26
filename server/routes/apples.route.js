import express from "express";
import appleController from "../controllers/apple.controller"
const router = express.Router();

router.get('/allapples', (req, res) => {
    appleController.getAll(req, res);
});

router.post('/addcsv', (req, res) => {
    appleController.addCsv(req, res);
});

export default router;
