# sample-node-mongo-api

This is basic crud api using nodejs, mongodb, mongoose, and postman for validation.


Installations:

Needs mongo db instance running on your local

-add a mongo database and collection
-run below commands 
> use sample-node-mongodb \
> db.createUser({ user: "root", pwd: "root",
    roles: [{ role:"dbOwner",db:"sample-node-mongodb" } ] })

npm install 

To run the app \
node server.js

Use postman for api validation.

url: http://localhost:8081/api/bears/
