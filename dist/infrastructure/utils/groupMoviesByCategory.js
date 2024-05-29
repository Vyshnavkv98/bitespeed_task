"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupMoviesByCategory = void 0;
async function groupMoviesByCategory(movies) {
    const groupedMovies = {};
    movies.forEach((movie) => {
        movie.genres.forEach((movieCategory) => {
            console.log(movieCategory);
            if (!groupedMovies[movieCategory]) {
                groupedMovies[movieCategory] = [];
            }
            groupedMovies[movieCategory].push(movie);
        });
    });
    return groupedMovies;
}
exports.groupMoviesByCategory = groupMoviesByCategory;
//# sourceMappingURL=groupMoviesByCategory.js.map