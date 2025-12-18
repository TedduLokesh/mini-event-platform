# 🎉 Mini Event Platform

A full-stack Mini Event Platform where users can register, login, create events, view events, and join events securely using JWT authentication. This project demonstrates complete frontend–backend integration using React, Node.js, Express, and MongoDB Atlas.

---

Mini Event Platform – Full Stack Project

A full-stack web application that allows users to register, login, create events, view events, and join events securely using JWT authentication. The project demonstrates complete frontend–backend integration using React, Node.js, Express, and MongoDB Atlas.

Features:
• User authentication with JWT
• Event creation and listing
• Event joining with validation
• Secure protected APIs
• MongoDB Atlas database

Tech Stack:
React.js, Node.js, Express.js, MongoDB Atlas, JWT, Mongoose

## 🚀 Features

### 👤 Authentication
- User Registration  
- User Login  
- Password hashing using bcrypt  
- Secure authentication using JWT tokens


1. Clone the repository
2. Install dependencies in server and client folders
3. Configure MongoDB Atlas and environment variables
4. Run backend using node index.js
5. Run frontend using npm start

### 📅 Event Management
- Create new events  
- View all events  
- Join events  
- Prevent duplicate joins  

### 🔐 Security
- JWT-based protected routes  
- Authorization middleware  
- Environment variables for secrets  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Axios  
- React Router DOM  

### Backend
- Node.js  
- Express.js  
- MongoDB Atlas  
- Mongoose  
- JSON Web Token (JWT)  
- bcrypt  
- dotenv  

---

## 📂 Project Structure


mini-event-platform/
│
├── client/ # Frontend (React)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/ # API calls
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── server/ # Backend (Node + Express)
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Auth middleware
│ ├── index.js # Entry point
│ └── package.json
│
├── .gitignore
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file inside the **server** folder:

PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key


⚠️ **Never push `.env` to GitHub**

---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the Repository

git clone https://github.com/your-username/mini-event-platform.git

cd mini-event-platform

### 2️⃣ Backend Setup
cd server
npm install
node index.js

Backend will run at:
http://localhost:5000


### 3️⃣ Frontend Setup
cd client
npm install
npm start


Frontend will run at:
http://localhost:3000


---

## 🔗 API Endpoints

### Auth Routes
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /auth/register | Register user |
| POST | /auth/login | Login user |

### Event Routes
| Method | Endpoint | Description |
|------|---------|------------|
| POST | /events/create | Create event |
| GET | /events | Get all events |
| POST | /events/join/:id | Join event |

---

## 🧪 Error Handling
- Proper error responses from backend  
- Frontend displays meaningful alert messages  
- JWT validation errors handled  

---

## 📸 Screens (Optional)
- Login Page  
- Register Page  
- Create Event Page  
- Event List Page  

(Add screenshots if required)

---

## 📌 Future Improvements
- Event update & delete  
- Role-based access (Admin/User)  
- Pagination & search  
- UI improvements  

---

## 👨‍💻 Author

**Teddu Lokesh**  
Full Stack Developer  
Hyderabad, India  

---

## ⭐ Acknowledgements
- MongoDB Atlas  
- React.js  
- Express.js

https://github.com/your-username/mini-event-platform
  

---

## 📜 License
This project is for educational and assignment purposes only.

This is my full-stack Mini Event Platform project built using React, Node.js, Express, and MongoDB Atlas. The repository includes complete source code and setup instructions.


