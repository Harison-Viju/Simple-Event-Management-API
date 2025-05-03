# Simple Event Management API
- This is a RESTful API built with **Node.js**, **Express**, **TypeScript**, and **MongoDB**.
- Allows users to create, view, update, and delete events.
- Features **date validation** and provides **JSON responses**.
- Does not require authentication.

---

## 📦 Features

- `POST /api/events` – Create an event (title, description, date).
- `GET /api/events` – List all events.
- `GET /api/events/:id` – Get a specific event.
- `PUT /api/events/:id` – Update an event.
- `DELETE /api/events/:id` – Delete an event.

---

## ⚙️ Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **MongoDB** with Mongoose.
- **ts-node-dev** for development.

---

## 🛠️ Getting Started

- **Clone the Repository**:
    ```bash
    git clone https://github.com/Harison-Viju/Simple-Event-Management-API.git
    cd Simple-Event-Management-API
    ```

- **Install Dependencies**:
    ```bash
    npm install
    ```

- **MongoDB Setup**:
    - **Option A**: Using MongoDB Locally:
        - Download and install MongoDB.
        - Run MongoDB locally with the default port `27017`.
        - Ensure the URI in `.env` is:
            ```bash
            MONGODB_URI=mongodb://localhost:27017/event_db
            ```
    - **Option B**: Using MongoDB Atlas (Cloud):
        - Create a free cluster at [MongoDB Atlas](https://cloud.mongodb.com).
        - Create a database and get your connection string.
        - Replace the URI in `.env` like:
            ```bash
            MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/event_db?retryWrites=true&w=majority
            ```

- **Run the Server**:
    - For development:
        ```bash
        npm run dev
        ```

- **API Testing with Postman**:
    1. Download [Postman](https://www.postman.com/downloads/).
    2. Import the API collection file (manually or via raw JSON) to test endpoints:
         - Create Event.
         - Get All Events.
         - Get Event By ID.
         - Update Event.
         - Delete Event.
### 3. Example POST Body
```bash
POST http://localhost:3000/api/events
Content-Type: application/json

{
  "title": "Demo Event",
  "description": "This is a test event",
  "date": "2025-05-05T10:00:00Z"
}
```
🧾 Environment Variables
Create a .env file in the root directory:
```bash 
PORT=3000
MONGODB_URI=mongodb://localhost:27017/event_db
```
✅ Requirements
 - Node.js (v16 or above)

 - npm

 - MongoDB (local or cloud)

 - Postman (for testing)


### Postman Documentation file:event-management-api.postman_collection.json


## 📸 Screenshots

### 1. Creating an Event in Postman
![Create Event](./Ouput%20Screenshots/create_event.png)

### 2. Getting All Events in Postman
![Get All Events](./Ouput%20Screenshots/get_all_events.png)


### 3. Getting  Events by ID in Postman
![Get Events by ID](./Ouput%20Screenshots/get_event_bys_id.png)

### 4. Update an Event in Postman
![Update an Event](./Ouput%20Screenshots/update_event.png)

### 5. Delete an Event in Postman
![Delete an Event](./Ouput%20Screenshots/delete_event.png)

