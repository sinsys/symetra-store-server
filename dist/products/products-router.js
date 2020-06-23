"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Router - Products
const express_1 = require("express");
const productsRouter = express_1.Router();
const jsonBodyParser = express_1.json();
const mock_data_1 = __importDefault(require("../mock-data/mock-data"));
// Services
const products_service_1 = __importDefault(require("./products-service"));
productsRouter
    .route('/')
    .get((req, res, next) => {
    products_service_1.default.getProducts(mock_data_1.default)
        .then(response => res.json(response))
        .catch(next);
});
exports.default = productsRouter;
//# sourceMappingURL=products-router.js.map