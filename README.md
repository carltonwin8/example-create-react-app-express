# React With Backend server

Initial code based on
[this](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)
article for the initial commit.

Later mongodb code was added following
[this](https://www.youtube.com/watch?v=fsCjFHuMXj0)
video.

For testing the CRUD operations used the chrome extension
[postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)
and used multiple tab, one for each CRUD operation.

I used a docker mongodb client and have google docs notes on how to set this up.

* docker run --name mongo1 -d mongo
* docker exec -it mongo1 mongo admin
* use react1
* db.createUser({ user: 'react1', pwd: 'react1access', roles: [ { role: "readWrite", db: "react1" } ] });
* db connection string "mongodb://react1:react1access@172.17.0.2:27017/react1"
* docker exec -it mongo1 mongo -u react1 -p react1access --authenticationDatabase "react"
  * use react1
  * show collections
  * db.notes.add({title: "title", body: "body of note"})
  * db.notes.find()
  * db.notes.remove({\_id:ObjectId("5a3c52fce3a30d5494a210e1")})
