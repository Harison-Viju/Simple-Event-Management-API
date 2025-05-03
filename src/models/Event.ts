// src/models/Event.ts
import mongoose, { Document } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description: string;
  date: Date;
}

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true }
});

export default mongoose.model<IEvent>('Event', EventSchema);
