# 🛒 QuickCart – Full Stack E-Commerce Web Application

QuickCart is a modern, full-stack **E-Commerce** platform built using **Next.js 14**, **MongoDB**, **Tailwind CSS**, **Clerk**, and **Inngest**.  
It provides a seamless online shopping experience with features like authentication, product management, cart functionality, order tracking, and admin capabilities.

🚀 **Live Demo:** [https://quick-cart-nova.vercel.app](https://quick-cart-nova.vercel.app)

---

## 🧩 Features

- 🔐 **Authentication:** User and admin login via **Clerk**.
- 🛍️ **Product Management:** Add, update, and list products via admin panel.
- 🛒 **Cart System:** Add, update, and remove items before checkout.
- 📦 **Order Management:** View and manage placed orders.
- ☁️ **Cloud Storage:** Product images hosted on **Cloudinary**.
- ⚙️ **Background Jobs:** Managed efficiently with **Inngest**.
- 🎨 **Responsive UI:** Built using **Tailwind CSS**.
- 🧠 **Next.js API Routes:** Backend and frontend integrated within one framework.
- 📊 **MongoDB Integration:** Store user, product, and order data securely.

---

## 📁 Project Structure

      QUICKCART/
      │
      ├── app/ # Next.js App Router pages
      ├── assets/ # Static assets (images, icons, etc.)
      ├── components/ # Reusable React components
      │ ├── seller/ # Seller/admin-specific UI components
      │
      ├── config/ # Database and Inngest configuration
      │ ├── db.js
      │ └── inngest.js
      │
      ├── context/ # Global state management (AppContext)
      │ └── AppContext.jsx
      │
      ├── lib/ # Utility functions
      │ └── authSeller.js
      │
      ├── models/ # Mongoose models
      │ ├── Address.js
      │ ├── Order.js
      │ ├── Product.js
      │ └── User.js
      │
      ├── public/ # Public assets
      │
      ├── .env # Environment variables
      ├── middleware.ts # Middleware (auth handling, etc.)
      ├── package.json
      ├── tailwind.config.mjs
      └── README.md

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Next.js API Routes, Node.js |
| Database | MongoDB |
| Authentication | Clerk |
| Background Jobs | Inngest |
| Cloud Storage | Cloudinary |
| Deployment | Vercel |

---

## 🧠 Getting Started

### 1️⃣ Clone the Repository

      git clone https://github.com/samith-shashika/quickcart.git

      cd quickcart

2️⃣ Install Dependencies

      npm install
      # or
      yarn install
  
3️⃣ Configure Environment Variables

      Create a .env file in the root directory:
            MONGODB_URI=your_mongodb_uri
            CLERK_SECRET_KEY=your_clerk_secret_key
            NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_public_key
            CLOUDINARY_URL=your_cloudinary_url
            INNGEST_API_KEY=your_inngest_key
  
4️⃣ Run the Development Server

      npm run dev
      Then open http://localhost:3000

---

🚀 Deployment

      Easily deploy using Vercel:
        vercel

---

🧠 Key Learnings

      * Building a full-stack web app with Next.js.
      * Implementing authentication with Clerk.
      * Managing async tasks using Inngest.
      * Using MongoDB for dynamic data handling.
      * Deploying full-stack apps efficiently on Vercel.
      * Applying clean folder structure and reusable UI components.

---

🧑‍💻 Author

      Samith Shashika
      📧 [samithsashika71@gmail.com]

---

📄 License

      This project is licensed under the MIT License – feel free to use and modify.
