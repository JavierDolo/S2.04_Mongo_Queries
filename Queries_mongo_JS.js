// Query 1: Show all documents in the Restaurants collection
db.restaurants.find()

// Query 2: Show restaurant_id, name, borough and cuisine for all documents
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 3: Show restaurant_id, name, borough and cuisine, excluding _id
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 4: Show restaurant_id, name, borough and zipcode, excluding _id
db.restaurants.find({}, { _id: 0, restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1 })

// Query 5: Show all restaurants located in the Bronx
db.restaurants.find({ borough: "Bronx" })

// Query 6: Show the first 5 restaurants in the Bronx
db.restaurants.find({ borough: "Bronx" }).limit(5)

// Query 7: Show the next 5 restaurants in the Bronx after skipping the first 5
db.restaurants.find({ borough: "Bronx" }).skip(5).limit(5)

// Query 8: Find restaurants with a score greater than 90
db.restaurants.find({ "grades.score": { $gt: 90 } })

// Query 9: Find restaurants with a score greater than 80 but less than 100
db.restaurants.find({ "grades.score": { $gt: 80, $lt: 100 } })

// Query 10: Find restaurants located at a latitude less than -95.754168
db.restaurants.find({ "address.coord.1": { $lt: -95.754168 } })

// Query 11: Find restaurants that do not prepare 'American' cuisine, have a score > 70 and longitude < -65.754168
db.restaurants.find({cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 }})

// Query 12: Same as above but without using $and
db.restaurants.find({cuisine: { $ne: "American" }, "grades.score": { $gt: 70 }, "address.coord.0": { $lt: -65.754168 }})

// Query 13: Find restaurants that do not prepare 'American' cuisine, received an 'A' grade, not in Brooklyn, sorted by cuisine descending
db.restaurants.find({ cuisine: { $ne: "American " }, "grades.grade": "A", borough: { $ne: "Brooklyn" } }).sort({ cuisine: -1 })

// Query 14: Find restaurants where name starts with 'Wil'
db.restaurants.find({ name: /^Wil/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 15: Find restaurants where name ends with 'ces'
db.restaurants.find({ name: /ces$/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 16: Find restaurants where name contains 'Reg'
db.restaurants.find({ name: /Reg/ }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 17: Find restaurants in the Bronx serving American or Chinese cuisine
db.restaurants.find({ borough: "Bronx", cuisine: { $in: ["American", "Chinese"] } })

// Query 18: Find restaurants in Staten Island, Queens, Bronx, or Brooklyn
db.restaurants.find({ borough: { $in: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 19: Find restaurants not in Staten Island, Queens, Bronx, or Brooklyn
db.restaurants.find({ borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 20: Find restaurants with a score not greater than 10
db.restaurants.find({ "grades.score": { $not: { $gt: 10 } } }, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 })

// Query 21: Find restaurants that serve something other than 'American' or 'Chinees' or name starts with 'Wil'
db.restaurants.find({ $or: [ { cuisine: { $nin: ["American", "Chinees"] } }, { name: /^Wil/ } ] })

// Query 22: Find restaurants with grade A, score 11, and date "2014-08-11T00:00:00Z"
db.restaurants.find({ grades: { $elemMatch: { grade: "A", score: 11, date: ISODate("2014-08-11T00:00:00Z") } } }, { restaurant_id: 1, name: 1, grades: 1 })

// Query 23: Find restaurants where 2nd grades element is grade A, score 9, date "2014-08-11T00:00:00Z"
 
db.restaurants.find({ "$and": [{ "grades.grade": "A" }, { "grades.score": 11 }, { "grades.date": ISODate("2014-08-11T00:00:00Z") }] }, { restaurant_id: 1, name: 1, grades: 1 })

// Query 24: Find restaurants where the second coord value is > 42 and <= 52
db.restaurants.find({"address.coord.1": { $gt: 42, $lte: 52 }}, { restaurant_id: 1, name: 1, address: 1 })

// Query 25: Sort restaurants by name ascending
db.restaurants.find().sort({ name: 1 })

// Query 26: Sort restaurants by name descending
db.restaurants.find().sort({ name: -1 })

// Query 27: Sort cuisine ascending and borough descending
db.restaurants.find().sort({ cuisine: 1, borough: -1 })

// Query 28: Find addresses without street field
db.restaurants.find({ "address.street": { $exists: false } })

// Query 29: Find documents where coord is a Double
db.restaurants.find({ "address.coord": { $type: "double" } })

// Query 30: Find restaurants where score % 7 == 0
db.restaurants.find({ "grades.score": { $mod: [7, 0] } }, { restaurant_id: 1, name: 1, grades: 1 })

// Query 31: Find name, borough, longitude, latitude and cuisine for restaurants with 'mon' in name
db.restaurants.find({ name: /mon/i }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1 })

// Query 32: Find name, borough, longitude, latitude and cuisine for restaurants where name starts with 'Mad'
db.restaurants.find({ name: /^Mad/ }, { name: 1, borough: 1, "address.coord": 1, cuisine: 1 })



