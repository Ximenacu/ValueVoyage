const db = require('../config/connection');
const {Values} = require('../models');
const valuesData = require('./values.json')

db.once('open', async () => {
    await Values.deleteMany({});
    await Values.create(valuesData);
  
    console.log('all done!');
    process.exit(0);
  });
  