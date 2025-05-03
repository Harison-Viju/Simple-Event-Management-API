import { Request, Response } from 'express';
import Event from '../models/Event';

// Create Event
export const createEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, date } = req.body;
    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get All Events
export const getEvents = async (req: Request, res: Response): Promise<void> => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get Event by ID
export const getEventById = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Update Event
export const updateEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete Event
export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      res.status(404).json({ error: 'Event not found' });
      return;
    }
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
