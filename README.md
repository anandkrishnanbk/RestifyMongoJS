### RestifyMongoJS
<<<<<<< HEAD

RestifyMongoJS is a  simple sample angularjs,restify,mongojs project for CRUD Operations. Angularjs Bootstrap as front end client, restify as middleware and mongojs to communicate with mongodb. It is a simple product create,update,delete and listing of created products.
=======
RestifyMongoJS is a  simple sample angularjs,restify,mongojs project for CRUD Operations. `Angularjs` `Bootstrap` as front end client, `restify` as middleware and `mongojs` to communicate with mongodb. It is a simple product create,update,delete and listing of created products.
>>>>>>> cffa0c0faaf876ee568023854f7c3c7c57b4d639

### Install the project dependencies
`npm install` to install dependencies.

### Run the project
`mongod --dbpath <path to data>` to start mongodb server

`nodemon server.js` in separate terminal to start restify server

`gulp serve` to run client using browser sync


* Set up mongodb on your own and create 'product' db and 'products' user collection with your own documents.
Using mongojs to access mongodb.

* Then using my installed restify client and restify server code, we can do get,post,put,delete operations.

* Added sample UI to enter new Product and then we can query,view,edit,delete products.

