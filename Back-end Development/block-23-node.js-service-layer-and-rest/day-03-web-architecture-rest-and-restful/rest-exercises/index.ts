import express from 'express';
import { ProductController } from './routers';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', ProductController);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server ready!');
});
