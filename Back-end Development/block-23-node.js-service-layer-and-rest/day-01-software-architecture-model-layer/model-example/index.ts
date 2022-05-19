import express from 'express';
import { authors, books } from './routes';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/authors', authors);
app.use('/books', books);

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
);
