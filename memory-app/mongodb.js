//CRUD = create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "memory-app";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("nahhhh mate");
    }

    const db = client.db(databaseName);

    db.collection("users").insertMany(
      [
        {
          name: "Jack Holmes",
          age: "23"
        },
        {
          name: "Mo Salah",
          age: "immortal"
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Could not add book");
        }

        console.log(result.ops);
      }
    );

    // db.collection("books").insertOne(
    //   {
    //     title: "Where Good Ideas Come From"
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Could not add book");
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);