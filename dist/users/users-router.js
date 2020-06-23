"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Router - Products
const express_1 = require("express");
const usersRouter = express_1.Router();
const mock_data_1 = __importDefault(require("../mock-data/mock-data"));
// Services
const users_service_1 = __importDefault(require("./users-service"));
usersRouter
    // Get all users
    .route('/')
    .get((req, res, next) => {
    users_service_1.default.getUsers(mock_data_1.default)
        .then(response => res.json(response))
        .catch(next);
});
exports.default = usersRouter;
//# sourceMappingURL=users-router.js.map