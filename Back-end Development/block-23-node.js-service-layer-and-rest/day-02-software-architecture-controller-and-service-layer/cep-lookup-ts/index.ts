import express from 'express';
import { error } from './middlewares';
import { zipCode } from './routes';

const app = express();

app.use(express.json());

app.use('/zipcode', zipCode);

app.use(error);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running!');
});
