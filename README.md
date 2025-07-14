# Tomato Food Delivery Project

A full-stack food delivery web application with user authentication, cart, order management, and Razorpay payment integration.

---

## Features
- User registration and login (JWT-based authentication)
- Browse and add food items to cart
- Place orders with delivery address
- Online payment using Razorpay (test/live mode)
- View order history with item images
- Admin panel for food and order management

---

## Project Structure
```
Food Delivery Project/
  backend/      # Node.js/Express/MongoDB API
  frontend/     # React.js client
  admin/        # (Optional) Admin dashboard
```

---

## Prerequisites
- Node.js (v16+ recommended)
- npm (v8+ recommended)
- MongoDB Atlas account (or local MongoDB)
- Razorpay account (for payment integration)

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <repo-url>
cd "Tomato---Food-Delivery-Website/Food Delivery Project"
```

### 2. Backend Setup
```sh
cd backend
npm install
```

#### Create a `.env` file in the `backend/` directory:
```
MONGO_USERNAME=your_mongodb_username
MONGO_PASSWORD=your_mongodb_password
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_key_if_needed
```
- Get MongoDB credentials from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Get Razorpay keys from [Razorpay Dashboard](https://dashboard.razorpay.com/).
- Set a strong `JWT_SECRET` (any random string).

#### Start the backend server:
```sh
npm run server
```
- The backend runs on `http://localhost:4000` by default.

---

### 3. Frontend Setup
```sh
cd ../frontend
npm install
npm run dev
```
- The frontend runs on `http://localhost:5173` by default.

---

### 4. Admin Panel (Optional)
If you want to use the admin dashboard:
```sh
cd ../admin
npm install
npm run dev
```

---

## Environment Variables Reference
| Variable              | Description                        |
|---------------------- |------------------------------------|
| MONGO_USERNAME        | MongoDB Atlas username              |
| MONGO_PASSWORD        | MongoDB Atlas password              |
| JWT_SECRET            | Secret for JWT token signing        |
| RAZORPAY_KEY_ID       | Razorpay API Key ID                 |
| RAZORPAY_KEY_SECRET   | Razorpay API Key Secret             |
| STRIPE_SECRET_KEY     | (Optional) Stripe secret key        |

---

## Usage Notes
- Use Razorpay test keys for development/testing. Switch to live keys for production.
- After placing an order, the cart is automatically cleared.
- Orders page shows all past orders with item images and details.
- If you change any environment variable, **restart the backend server**.
- For any authentication issues, clear your browser's local storage and log in again.

---

## Troubleshooting
- **401 Unauthorized:** Check your JWT_SECRET and token validity.
- **Razorpay payment not working:** Check your Razorpay keys, disable ad blockers, and use test card details.
- **Images not loading:** Ensure backend is running and accessible at the correct URL.

---

## License
This project is for educational/demo purposes. Please customize and secure before using in production. 
