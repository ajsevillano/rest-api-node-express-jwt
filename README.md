# REST API - Node / Express / JWT

> A RESTful API built with Node.js and Express, secured with JWT authentication via Auth0. Serves product data (meals and drinks) from a PostgreSQL database. Originally built as a hackathon API.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)
![Auth0](https://img.shields.io/badge/Auth0-EB5424?style=flat&logo=auth0&logoColor=white)

## Endpoints

| Method | Route | Auth required | Description |
|---|---|---|---|
| GET | `/products` | Yes (read:products scope) | Get all products |
| GET | `/products/meals` | No | Get meals only |
| GET | `/products/drinks` | No | Get drinks only |

## Getting Started

### 1. Clone and install

```bash
npm install
```

### 2. Configure environment

Copy `.env-example` to `.env` and fill in your values:

```env
ISSUERBASEURL=https://your-auth0-domain
AUDIENCE=your-api-identifier
DATABASE_URL=your-postgresql-connection-string
```

### 3. Set up the database

```bash
# Create the products table
npm run dbcreateproductstable

# Populate with mock data
npm run dbpopulateproductstable
```

### 4. Run the server

```bash
# Development (with hot reload)
npm run dev

# Production
npm start
```

## Tech Stack

- Node.js + Express
- PostgreSQL (via `pg`)
- Auth0 JWT authentication (`express-oauth2-jwt-bearer`)
- Heroku (Procfile included)
