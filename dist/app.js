"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = __importDefault(require("./config"));
const generate_data_1 = require("./mock-data/generate-data");
const app = express_1.default();
const morganOpt = (config_1.default.NODE_ENV === 'production')
    ? 'tiny'
    : 'common';
const myFunc = (req, res, next) => {
    res.json(mockData);
};
let mockData = {
    products: generate_data_1.generateProducts(10),
    users: generate_data_1.generateUsers(5),
    couponCode: "ABC123",
    couponInterval: 3
};
app.use(morgan_1.default(morganOpt), helmet_1.default(), cors_1.default(config_1.default.CLIENT_ORIGIN));
app.get('/', myFunc);
const errorHandler = (err, req, res, next) => {
    let response;
    if (config_1.default.NODE_ENV === 'production') {
        response = {
            error: {
                message: 'server error'
            }
        };
    }
    else {
        // tslint:disable-next-line:no-console
        console.error(err);
        response = {
            message: err.message, err
        };
    }
    res.status(500).json(response);
};
app.use(errorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map