# Simple Event Management API

This is a TypeScript-based REST API for managing events with basic CRUD operations using Express and MongoDB.

## Features

- Create an event (title, description, date)
- List all events
- Get a specific event by ID
- Update an event by ID
- Delete an event by ID

## Tech Stack

- Node.js
- TypeScript
- Express
- MongoDB (Mongoose)
- Dotenv, CORS

## Getting Started

### Prerequisites

- Node.js
- MongoDB (running locally or in the cloud)

### Installation

```bash
git clone <repo-url>
cd event-management-api
npm install

## Setup
1. Clone repository
2. Install dependencies: `npm install`
3. Start MongoDB server
4. Create `.env` file with environment variables
5. Start dev server: `npm run dev`

## API Endpoints
- POST /api/events - Create event
- GET /api/events - List all events
- GET /api/events/:id - Get specific event
- PUT /api/events/:id - Update event
- DELETE /api/events/:id - Delete event


npm run dev   # for development (with nodemon)
npm run build # to build TypeScript
npm start     # to run built app
