import express from 'express';
import routers from './routers';

const app = express();

app.use(express.json());

app.use('/v1', routers);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
