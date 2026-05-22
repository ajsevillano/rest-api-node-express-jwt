<div align="center">
  <img src="logo.png" alt="rest-api-node-express-jwt" width="480"/>

  [![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)
  [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
  [![Auth0](https://img.shields.io/badge/Auth0-EB5424?style=flat&logo=auth0&logoColor=white)](https://auth0.com/)

  **🔐 JWT-secured RESTful API with Auth0 and PostgreSQL — structured routes, database scripts, and Heroku-ready 🗄️**

</div>

---

## 📡 API Endpoints

| Method | Route | Scope required | Description |
|---|---|---|---|
| `GET` | `/products` | `read:products` | Get all products |
| `GET` | `/products/meals` | none | Get meals only |
| `GET` | `/products/drinks` | none | Get drinks only |

Protected routes require a valid JWT issued by Auth0 in the `Authorization: Bearer <token>` header.

## 🚀 Quick Start

### 1. Install

```bash
npm install
```

### 2. Configure environment

Copy `.env-example` to `.env`:

```env
ISSUERBASEURL=https://your-tenant.auth0.com
AUDIENCE=https://your-api-identifier
DATABASE_URL=postgresql://user:password@host:5432/dbname
```

### 3. Set up the database

```bash
npm run dbcreateproductstable    # Create the products table
npm run dbpopulateproductstable  # Seed with mock data
```

### 4. Run

```bash
npm run dev   # Development with hot reload
npm start     # Production
```

## 🗃️ Database Scripts

| Script | Description |
|---|---|
| `npm run dbcreateproductstable` | Creates the `products` table |
| `npm run dbpopulateproductstable` | Seeds mock data |
| `npm run dbemptyproductstable` | Empties the table |
| `npm run dbdeleteproductstable` | Drops the table |

## 🛠️ Tech Stack

- **Node.js** + **Express** — REST server with ESM modules
- **PostgreSQL** — relational data store via `pg`
- **Auth0** — JWT validation with `express-oauth2-jwt-bearer`
- **morgan** + **cors** — request logging and CORS
- **Heroku** — Procfile included for one-click deploy
