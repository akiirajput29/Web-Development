db.items.updateOne({name: "One plus 9"}, {$set: {price: 2}})

db.items.updateMany({name: "One plus 6"}, {$set: {price: 200, rating: 1.5}})