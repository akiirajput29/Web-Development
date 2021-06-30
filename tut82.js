// Searching for data in mongo db 
use AkhilM

// This query will return all the objects of rating 4.5
db.items.find({rating :{$gte: 4.5}})
db.items.find({rating :{$gt: 3.9}})

// And Operator
db.items.find({rating :{$gt: 3.9}, price:{$gt: 4000}})

db.items.find({rating :{$lt: 3.9}, price:{$gt: 24000}})

// OR Operator
db.items.find({$or: [{rating :{$lt: 3.9}}, {price:{$gt: 24000}}]})

// Projection
db.items.find({rating :{$gt: 3.9}}, {rating: 1})