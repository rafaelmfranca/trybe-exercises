import express from 'express';

const app = express();

app.use(express.json());

app.use('/movies');

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
