// Mongo Db based on CRUD operations
// CRUD : Create, Read, Update & Delete
// Inserting Data in mongo db 
use AkhilM
db.items.insertOne({name:"One plus 9", price: 35500, rating: 4.5, qty: 233, sold: 100})
// Itmes are collection 
db.items.insertMany([{name:"One plus 9", price: 35500, rating: 4.5, qty: 233, sold: 100}, {name:"One plus 6", price: 30000, rating: 4.0, qty: 200, sold: 116}, {name:"iphone 10s", price: 60000, rating: 3.9, qty: 150, sold: 50}])