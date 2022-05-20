import express from 'express';
import { errorMiddleware } from './middlewares';
import { user } from './routes/index';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/user', user);

app.use(errorMiddleware);

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
);
