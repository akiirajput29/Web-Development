db.items.find({price: 35500})

// Deleting items from Mongo Db

db.items.deleteOne({price: 35500})
// deleteOne will delete the matching document entry & will delete the first entry in case of multi document match

db.items.deleteMany({price: 35500})