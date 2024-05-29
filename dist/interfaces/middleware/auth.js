"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token)
        return res.status(401).send(`Unauthorized access`);
    if (token === 'FSMovies2023') {
        next();
    }
    else {
        res.sendStatus(403);
    }
};
exports.default = authenticateToken;
//# sourceMappingURL=auth.js.map