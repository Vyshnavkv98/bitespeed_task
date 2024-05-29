"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movieController_1 = require("../controllers/movieController");
const auth_1 = __importDefault(require("../middleware/auth"));
const movieRouter = (0, express_1.Router)();
let movie_controller = new movieController_1.movieController();
movieRouter.get('/', auth_1.default, movie_controller.getAllMovies);
exports.default = movieRouter;
//# sourceMappingURL=movieRouter.js.map