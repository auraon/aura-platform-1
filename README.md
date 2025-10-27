# Aura Health & Lifestyle Platform

## Structure

- `frontend/` – React+TS app (deploy to Vercel/Netlify)
- `backend/` – Node.js+Express+TS REST API (deploy to Render/Heroku)

## Quickstart

### Backend

```sh
cd backend
cp .env.example .env           # Fill in Razorpay credentials
npm install
npm run dev
```

### Frontend

```sh
cd frontend
npm install
npm start
```

**Logo:** Place your logo as `frontend/public/aura-logo.png`.

## Payment Flow

- Razorpay: Frontend calls backend `/api/payment/razorpay` to create an order, then uses Razorpay JS checkout.

---