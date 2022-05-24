import express from 'express';
import ProductModel from '../models/ProductModel';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    const products = await ProductModel.getAll();

    res.send(products);
  })
  .post(async (req, res) => {
    const { name, brand } = req.body;

    const newProduct = await ProductModel.add(name, brand);

    res.send(newProduct);
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const product = await ProductModel.getById(Number(req.params.id));

    res.send(product);
  })
  .delete(async (req, res) => {
    const products = await ProductModel.exclude(Number(req.params.id));

    res.send(products);
  })
  .put(async (req, res) => {
    const { name, brand } = req.body;

    const products = await ProductModel.update(
      Number(req.params.id),
      name,
      brand
    );

    res.send(products);
  });

export default router;
