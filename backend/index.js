const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend running' });
});

app.listen(5001, () => console.log('Server started on port 5001'));


const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));
