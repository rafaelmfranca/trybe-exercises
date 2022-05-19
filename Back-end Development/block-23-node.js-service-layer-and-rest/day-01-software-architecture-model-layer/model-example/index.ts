import express from 'express';
import authors from './routes/authors';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/authors', authors);

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
);
