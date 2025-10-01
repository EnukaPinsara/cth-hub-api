# CTH Hub API

- **CTH Hub API** is the backend service powering the [CTH Hub Frontend](https://cth-hub.netlify.app). 
- It provides RESTful APIs to manage hotel rates, contacts (travel agents & customers), staff, users, user roles, inventory, and real-time analytics.


## ⚡Features
- **Hotel & Rates Management**
  - CRUD operations for hotels and hotel rates
  - PDF uploads for rate files, automatically parsed into structured entries
- **Contacts Management**
  - CRUD operations for travel agents and customer details
  - Bulk upload via CSV/Excel for faster data entry
- **Staff & User Management**
  - CRUD operations for staff, users and user roles
  - Role-based access control (admin/staff/users)
  - Authentication & authorization
- **Inventory Management**
  - Track and manage (CRUD) hotel inventory items and categories
  - Supports bulk uploads and real-time inventory updates
- **Analytics and Reporting**
  - Real-time aggregated insights for bookings, rates, and stock levels
  - Logs all operations for error tracking and debugging using Winston
- **API & Integration**
  - Fully RESTful JSON-based API endpoints for seamless frontend integration.JSON-based endpoints for seamless frontend integration
  - Environment-based configuration for database connection and API URLs ensures a secure and flexible deployment


## 🛠 Tech Stack

- **Backend Framework**: Node.js + Express (JavaScript)
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT-based authentication & role-based permissions
- **File Handling**: Multer for uploads (PDF/CSV/Excel)
- **Validation**: Joi (schema validation)
- **Logging**: Winston
- **Code Quality & Formatting**: ESLint + Prettier
- **Development Tools**: Nodemon (auto-reload during development)
- **Deployment**: Render


## 📂 Project Structure
- `controllers/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Route handlers containing business logics
- `models/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# MongoDB schemas
- `routes/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# API route definitions
- `middlewares/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Authentication, validation, error handlers
- `services/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Business logic services
- `config/`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Environment and app configuration (DB connection, logger)
- `.eslintrc.json`&nbsp;&nbsp;&nbsp;# ESLint configuration
- `.prettierrc`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Prettier configuration
- `.env`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Environmennt variables
- `index.js`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;# Application entry point


## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+
- MongoDB (Atlas or local instance)

### Installation
#### 1. Clone the repository:
```bash
git clone https://github.com/<your-username>/cth-hub-api.git
cd cth-hub-api
```
#### 2. Install dependencies:
```bash
npm install
```
#### 3. Create a .env file at the root:
```bash
API_URL=api/v1
MONGODB_URI=<Your MongoDB Connection URI>
PORT=5000
```
#### 4. Start the development server:
```bash
npm run dev
```
#### 5. Access the API:
```bash
http://localhost:5000/api/v1/
 ```


## 🧰 Code Quality
- **Linting**: `npm run lint`
- **Code formatting**: `npm run format`
- **Logging via Winston**: console logs and file logs at `logs/`


## ✅ Notes
- Make sure MongoDB Atlas allows your IP or use a local MongoDB connection
- Server port can be configured via .env (PORT)
- API routes are prefixed with the API_URL environment variable (api/v1)
