// src/routes/events.ts
import { Router } from 'express';
import * as eventController from '../controllers/events';
import { validateEvent } from '../middleware/validation';

const router = Router();

router.post('/', validateEvent, eventController.createEvent);
router.get('/', eventController.getEvents);
router.get('/:id', eventController.getEventById);
router.put('/:id', validateEvent, eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);

export default router;
