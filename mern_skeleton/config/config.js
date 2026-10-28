
import { randomBytes } from 'crypto';

const env = process.env.NODE_ENV || 'development';
const jwtSecret =
  process.env.JWT_SECRET ||
  (env === 'development' ? randomBytes(64).toString('hex') : undefined);

if (!jwtSecret) {
  throw new Error('JWT_SECRET must be set outside development');
}

const config = {
  env,
  port: process.env.PORT || 5000,
  jwtSecret,
  mongoUri: process.env.MONGODB_URI || 'mongodb+srv://ndikumteze_db_user:uQ4pay6Lv2GrhCrC@cluster0.cwwdk0w.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=Cluster0' ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
};

export default config;
