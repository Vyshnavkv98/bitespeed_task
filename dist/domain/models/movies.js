"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    backdrop: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    cast: {
        type: [String],
        required: true
    },
    classification: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    id: {
        type: String,
        required: true
    },
    imdb_rating: {
        type: Number,
        required: true
    },
    length: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true
    },
    released_on: {
        type: Date,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});
const Movie = mongoose_1.default.model('movie', movieSchema);
exports.default = Movie;
//# sourceMappingURL=movies.js.map