// src/middleware/validation.ts
import { Request, Response, NextFunction } from 'express';

export const validateEvent = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.body.title || !req.body.description || !req.body.date) {
    res.status(400).json({ error: 'Missing required fields' });
    return; // Return to stop further execution
  }
  if (isNaN(Date.parse(req.body.date))) {
    res.status(400).json({ error: 'Invalid date format' });
    return; // Return here as well
  }
  next();
};
