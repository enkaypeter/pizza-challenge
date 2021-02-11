import expressLoader from './express';

export default async ({ expressApp }) => {
  expressLoader({ app: expressApp })
  console.error(`✌️   Express loaded`);

  const db = require('./database');
  await db.sequelize.authenticate()
  .then(() => console.info(`✌️   Database loaded`))
  .catch(err => console.error(`⚠️  Couldn't find .env file  ⚠️`))

};