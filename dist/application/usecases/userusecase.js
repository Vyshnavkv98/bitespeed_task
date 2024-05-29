"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieApiUsecase = void 0;
const movieRepositoryImpl_1 = require("../../infrastructure/dataAccess/movieRepositoryImpl");
const groupMoviesByCategory_1 = require("../../infrastructure/utils/groupMoviesByCategory");
let movieRepository = new movieRepositoryImpl_1.MovieRepositoryImpl();
class MovieApiUsecase {
    constructor() { }
    async getMovies() {
        try {
            const result = await movieRepository.getAllMovies();
            const groupedMovies = await (0, groupMoviesByCategory_1.groupMoviesByCategory)(result);
            return groupedMovies;
        }
        catch (error) {
            console.error('Error fetching movies:', error);
            throw error;
        }
    }
}
exports.MovieApiUsecase = MovieApiUsecase;
//# sourceMappingURL=userusecase.js.map