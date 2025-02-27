This is a full-stack web application built with React (frontend) and Strapi (backend). The frontend is hosted on Vercel, while the backend runs on Heroku using SQLite as the database. The project integrates Stripe for payments and provides seamless user interactions. 🚀               
🛠️ Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Strapi (Headless CMS)

Database: SQLite (for local development) / PostgreSQL (for production)

Hosting: Vercel (frontend) & Heroku (backend)

📌 Notes

SQLite is not recommended for production. Use PostgreSQL instead.

CORS must be configured in Strapi to allow frontend access.

Persistent Storage is required for Strapi media files (e.g., AWS S3 or Cloudinary).

🛠️ Troubleshooting

Strapi does not start? Ensure .env is correctly set up.

Frontend shows API errors? Check VITE_API_URL.

Database connection fails? Verify PostgreSQL credentials.






