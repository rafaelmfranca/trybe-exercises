import 'dotenv/config';
import connection from '../models/connection';
import app from './app';

const PORT = process.env.PORT || 3001;

connection()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
  })
  .catch((err) => console.log(err));
