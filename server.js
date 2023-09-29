const express = require('express');
const PORT = process.env.PORT
const app = express();
const apiRoutes = require('./Routes/apiRoutes');
//const htmlRoutes = require('./Routes/index');



// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host public folder
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});