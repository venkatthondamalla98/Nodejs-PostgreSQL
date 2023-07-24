const express = require('express');
const db = require('./app/models')

const app = express();
const PORT = 5001;

app.use(express.json());

app.use(express.urlencoded({extended: true}))

db.sequelize.sync()
.then(() => {
    console.log("database connected...")
})
.catch((err) => {
    console.log("Failed to connect: " + err.message)
})

app.get('/', (req, res) => {
    res.json({message: "Welcome to Heritage!"});
})

require('./app/routes/productRoutes')(app);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})