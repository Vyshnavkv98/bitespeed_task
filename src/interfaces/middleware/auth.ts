import express, { Request, Response, NextFunction } from 'express';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).send(`Unauthorized access`);

  if (token === 'FSMovies2023') {
    next(); 
  } else {
    res.sendStatus(403);
  }
};

export default authenticateToken;
