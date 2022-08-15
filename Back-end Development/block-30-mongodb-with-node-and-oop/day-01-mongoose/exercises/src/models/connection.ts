import 'dotenv/config';
import { connect } from 'mongoose';

const connection = (
  mongoDatabaseURI = 
  process.env.MONGO_URI || 'mongodb://localhost:27017/glassesStore',
) => connect(mongoDatabaseURI);

export default connection;
