// CRUD = create read update delete

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "database";

MongoClient.connect(
  connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
      return console.log("nahhhh mate");
    }

    const db = client.db(databaseName);


    db.collection('books').deleteOne({
      _id: new ObjectID('5cb33bffe38d73456cdfb701')
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error)
    })



  // CREATING

  // db.collection('users').insertMany( [
    //   {
    //     name: 'Bobby Firmino',
    //     age: 28
    //   }, {
    //     name: 'Sadio Mane',
    //     age: 27
    //   }
    // ])
  

  // READING

    // db.collection('users').findOne({ _id: new ObjectID('5cb32c478915da43bcb0a2e9') }, (error, user) => {
    //   if (error) {
    //     return console.log('error')
    //   }

    //   console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //   console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //   console.log(count)
    // })

    // db.collection('books').findOne({ _id: new ObjectID('5cb33bffe38d73456cdfb702') }, (error, user) => {
    //   if (error) {
    //     return console.log('error')
    //   }

    //   console.log(user)
    // })

    // db.collection('books').find({ completed: true }).toArray((error, titles) => {
    //   console.log(titles)
    // })



    // UPDATING

    //   db.collection('users').updateOne({
    //     _id: new ObjectID('5cb32c478915da43bcb0a2e8')
    //   }, {
    //     $set: {
    //       name: 'Laurie Boorhead'
    //     }
    //   }).then((result) => {
    //     console.log(result)
    //   }).catch((error) => {
    //     console.log(error)
    //   }
    // )
    // })

    // db.collection('books').updateMany({
      
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }).then((result) => {
    //   console.log(result.modifiedCount)
    // }).catch((error) => {
    //   console.log(error)
    // })



  })