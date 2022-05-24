import express from 'express';
import ProductModel from '../models/ProductModel';

const router = express.Router();

router
  .route('/')
  .get(async (_req, res) => {
    const products = await ProductModel.getAll();

    res.status(200).json(products);
  })
  .post(async (req, res) => {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    res.status(201).json(newProduct);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const product = await ProductModel.getById(Number(req.params.id));

    res.status(200).json(product);
  })
  .delete(async (req, res) => {
    const products = await ProductModel.exclude(Number(req.params.id));

    res.status(200).json(products);
  })
  .put(async (req, res) => {
    const { name, brand } = req.body;

    const products = await ProductModel.update(
      Number(req.params.id),
      name,
      brand
    );

    res.status(200).json(products);
  });

export default router;
