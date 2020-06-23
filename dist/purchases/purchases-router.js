"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Router - Purchases
const express_1 = require("express");
const purchasesRouter = express_1.Router();
const mock_data_1 = __importDefault(require("../mock-data/mock-data"));
// Services
const purchases_service_1 = __importDefault(require("./purchases-service"));
purchasesRouter
    // Get all purchases
    .route('/')
    .get((req, res, next) => {
    purchases_service_1.default.getPurchases(mock_data_1.default)
        .then(response => res.json(response))
        .catch(next);
});
exports.default = purchasesRouter;
//# sourceMappingURL=purchases-router.js.map