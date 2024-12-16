import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const { SUPABASE_URL, LOCAL_URL } = process.env;

const sequelize = new Sequelize(SUPABASE_URL, {
  dialect: 'postgres',
  logging: false
});

export default sequelize;
