import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = 'localhost';
config.dbPort = '27017';
config.dbName = 'tevel';
config.serverPort = 9000;

export default config;
