// const express = require('express');
// const mongoose = require('mongoose');
// const Item = require('./models/inventory');
// const qrCode = require('qrcode');

// //express app
// const app = express();

// //connect to mongodb
// const dbURI = "mongodb+srv://brianw0320:WB30ZX2RYXmrt8LL@prod.mplndst.mongodb.net/Austin?retryWrites=true&w=majority"
// mongoose.connect(dbURI)
//     .then((result) => {console.log("connected to db")})
//     .then(app.listen(3000))
//     .catch((err) => console.log(err));

// //register view engine
// app.set('view engine', 'ejs');

// //middleware
// app.use(express.urlencoded({ extended: true}));

// //first route to get the form
// app.get('/', (req, res) => {
//     res.render('index'); 
// });

// //route to get all items
// app.get('/all-items', (req, res) => {
//     Item.find()
//         .then((result) => {
//             res.render('allItems', { data: result });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// //route to add an item
// app.post('/items/addItem', (req, res) => {
//     const item = new Item(req.body)
//     const createdAT = item.createdAt;
//     const updatedAt = item.updatedAt;

//     item.save()
//     .then((result) => {
//         res.redirect('/all-items')
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// })

// //route to get an item by id
// app.get('/items/:id', (req, res) => {
//     const id = req.params.id;
//     Item.findById(id)
//         .then(result => {
//             res.render('item', {data: result })
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.delete('/items/:id', (req, res) => {
//     const id = req.params.id;
//     Item.findByIdAndDelete(id)
//         .then(result => {
//             res.json({redirect: '/all-items'})
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// index.js
const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app