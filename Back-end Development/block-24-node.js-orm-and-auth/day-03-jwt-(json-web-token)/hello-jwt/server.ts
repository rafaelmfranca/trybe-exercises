import { errorMiddleware } from '@middlewares';
import mainRouter from '@routes';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(mainRouter);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
