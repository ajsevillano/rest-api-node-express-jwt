import express from 'express';
const router = express.Router();
import { getAllProducts } from '../models/products.js';

// GET ALL USERS
router.get(`/`, async function (req, res) {
  const result = await getAllProducts();
  res.json(result);
});

export default router;