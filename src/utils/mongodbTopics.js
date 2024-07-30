const mongodbTopics = [
    {
        head: "Introduction to MongoDB",
        Topics: [
            {
                heading: "Introduction to MongoDB",
                link: "#",
                content: "MongoDB is a NoSQL database designed for high performance, high availability, and easy scalability. It is a document-oriented database that stores data in flexible, JSON-like documents.",
                ulItems: [
                    "Overview of NoSQL databases.",
                    "Key features of MongoDB.",
                    "Use cases for MongoDB."
                ],
                Example: [
                    "`MongoDB is used for applications that require real-time analytics, content management, and high scalability.`"
                ]
            }
        ]
    },
    {
        head: "Installation and Setup",
        Topics: [
            {
                heading: "Installation and Setup",
                link: "#",
                content: "Installing and setting up MongoDB on various operating systems.",
                ulItems: [
                    "Download and install MongoDB.",
                    "Start the MongoDB server.",
                    "Connect to MongoDB using the MongoDB shell."
                ],
                Example: [
                    "`brew install mongodb-community` - Install MongoDB on macOS using Homebrew.",
                    "`mongod --config /usr/local/etc/mongod.conf --fork` - Start the MongoDB server.",
                    "`mongo` - Connect to MongoDB using the MongoDB shell."
                ]
            }
        ]
    },
    {
        head: "MongoDB vs. SQL Databases",
        Topics: [
            {
                heading: "MongoDB vs. SQL Databases",
                link: "#",
                content: "Comparing MongoDB with traditional SQL databases.",
                ulItems: [
                    "Differences in data models.",
                    "Schema flexibility.",
                    "Scalability and performance."
                ],
                Example: [
                    "`MongoDB stores data in flexible, JSON-like documents, while SQL databases use structured tables and schemas.`",
                    "`MongoDB can handle unstructured data and nested fields more efficiently than SQL databases.`"
                ]
            }
        ]
    },
    {
        head: "MongoDB Architecture",
        Topics: [
            {
                heading: "MongoDB Architecture",
                link: "#",
                content: "Understanding the architecture of MongoDB.",
                ulItems: [
                    "Documents and collections.",
                    "Replica sets and sharding.",
                    "Storage engine and data formats."
                ],
                Example: [
                    "`A MongoDB database consists of collections, which in turn contain documents.`",
                    "`Replica sets provide high availability through redundancy and failover.`"
                ]
            }
        ]
    },
    {
        head: "Basic MongoDB Commands",
        Topics: [
            {
                heading: "Basic MongoDB Commands",
                link: "#",
                content: "Introduction to basic MongoDB commands for managing databases and collections.",
                ulItems: [
                    "Creating and dropping databases.",
                    "Creating and dropping collections.",
                    "Inserting, querying, updating, and deleting documents."
                ],
                Example: [
                    "`use myDatabase` - Switch to a database.",
                    "`db.createCollection('myCollection')` - Create a new collection.",
                    "`db.myCollection.insertOne({ name: 'Alice', age: 25 })` - Insert a document."
                ]
            }
        ]
    },
    {
        head: "Creating Databases",
        Topics: [
            {
                heading: "Creating Databases",
                link: "#",
                content: "How to create and manage databases in MongoDB.",
                ulItems: [
                    "Creating a new database.",
                    "Listing existing databases.",
                    "Dropping databases."
                ],
                Example: [
                    "`use newDatabase` - Create and switch to a new database.",
                    "`show dbs` - List all databases.",
                    "`db.dropDatabase()` - Drop the current database."
                ]
            }
        ]
    },
    {
        head: "Creating Collections",
        Topics: [
            {
                heading: "Creating Collections",
                link: "#",
                content: "How to create and manage collections in MongoDB.",
                ulItems: [
                    "Creating a new collection.",
                    "Listing collections in a database.",
                    "Dropping collections."
                ],
                Example: [
                    "`db.createCollection('newCollection')` - Create a new collection.",
                    "`show collections` - List all collections in the current database.",
                    "`db.newCollection.drop()` - Drop a collection."
                ]
            }
        ]
    },
    {
        head: "Inserting Documents",
        Topics: [
            {
                heading: "Inserting Documents",
                link: "#",
                content: "How to insert documents into MongoDB collections.",
                ulItems: [
                    "Inserting a single document.",
                    "Inserting multiple documents.",
                    "Using `insertOne` and `insertMany` methods."
                ],
                Example: [
                    "`db.collection.insertOne({ name: 'John', age: 30 })` - Insert a single document.",
                    "`db.collection.insertMany([{ name: 'Jane', age: 25 }, { name: 'Bob', age: 35 }])` - Insert multiple documents."
                ]
            }
        ]
    },
    {
        head: "Querying Documents",
        Topics: [
            {
                heading: "Querying Documents",
                link: "#",
                content: "How to query documents from MongoDB collections.",
                ulItems: [
                    "Basic query operations.",
                    "Using query operators.",
                    "Projecting specific fields."
                ],
                Example: [
                    "`db.collection.find({ age: { $gt: 25 } })` - Find documents where age is greater than 25.",
                    "`db.collection.find({}, { name: 1, age: 1 })` - Project name and age fields only."
                ]
            }
        ]
    },
    {
        head: "Updating Documents",
        Topics: [
            {
                heading: "Updating Documents",
                link: "#",
                content: "How to update documents in MongoDB collections.",
                ulItems: [
                    "Updating a single document.",
                    "Updating multiple documents.",
                    "Using `updateOne`, `updateMany`, and `replaceOne` methods."
                ],
                Example: [
                    "`db.collection.updateOne({ name: 'John' }, { $set: { age: 31 } })` - Update a single document.",
                    "`db.collection.updateMany({ age: { $lt: 30 } }, { $set: { status: 'young' } })` - Update multiple documents.",
                    "`db.collection.replaceOne({ name: 'John' }, { name: 'John', age: 31, status: 'single' })` - Replace a document."
                ]
            }
        ]
    },
    {
        head: "Deleting Documents",
        Topics: [
            {
                heading: "Deleting Documents",
                link: "#",
                content: "How to delete documents from MongoDB collections.",
                ulItems: [
                    "Deleting a single document.",
                    "Deleting multiple documents.",
                    "Using `deleteOne` and `deleteMany` methods."
                ],
                Example: [
                    "`db.collection.deleteOne({ name: 'John' })` - Delete a single document.",
                    "`db.collection.deleteMany({ age: { $gt: 30 } })` - Delete multiple documents."
                ]
            }
        ]
    },
    {
        head: "Indexing",
        Topics: [
            {
                heading: "Indexing",
                link: "#",
                content: "How to create and manage indexes in MongoDB for optimizing query performance.",
                ulItems: [
                    "Creating single-field indexes.",
                    "Creating compound indexes.",
                    "Viewing and dropping indexes."
                ],
                Example: [
                    "`db.collection.createIndex({ name: 1 })` - Create an index on the `name` field.",
                    "`db.collection.createIndex({ name: 1, age: -1 })` - Create a compound index on `name` and `age` fields.",
                    "`db.collection.getIndexes()` - View all indexes on a collection."
                ]
            }
        ]
    },
    {
        head: "Aggregation Framework",
        Topics: [
            {
                heading: "Aggregation Framework",
                link: "#",
                content: "Using the aggregation framework for advanced data processing and analysis in MongoDB.",
                ulItems: [
                    "Introduction to aggregation pipelines.",
                    "Common aggregation operators.",
                    "Examples of aggregation queries."
                ],
                Example: [
                    "`db.collection.aggregate([{ $match: { status: 'A' } }, { $group: { _id: '$category', total: { $sum: '$quantity' } } }])` - Aggregate documents by category and sum quantities."
                ]
            }
        ]
    },
    {
        head: "Data Modeling",
        Topics: [
            {
                heading: "Data Modeling",
                link: "#",
                content: "Best practices for data modeling in MongoDB.",
                ulItems: [
                    "Choosing between embedded and referenced data.",
                    "Designing schemas for scalability and performance.",
                    "Examples of data models for common use cases."
                ],
                Example: [
                    "`Embedded documents are best for one-to-few relationships, while references are better for one-to-many relationships.`",
                    "`Design schemas to minimize the number of joins and lookups for better performance.`"
                ]
            }
        ]
    },
    {
        head: "Schema Design Best Practices",
        Topics: [
            {
                heading: "Schema Design Best Practices",
                link: "#",
                content: "Guidelines for designing efficient and maintainable schemas in MongoDB.",
                ulItems: [
                    "Avoiding anti-patterns.",
                    "Using validation and constraints.",
                    "Optimizing schemas for common queries."
                ],
                Example: [
                    "`Avoid using large arrays that grow indefinitely to prevent performance issues.`",
                    "`Use schema validation to enforce data integrity and consistency.`"
                ]
            }
        ]
    },
    {
        head: "CRUD Operations",
        Topics: [
            {
                heading: "CRUD Operations",
                link: "#",
                content: "Performing Create, Read, Update, and Delete (CRUD) operations in MongoDB.",
                ulItems: [
                    "Inserting documents.",
                    "Querying documents.",
                    "Updating documents.",
                    "Deleting documents."
                ],
                Example: [
                    "`db.collection.insertOne({ name: 'Alice', age: 28 })` - Create a new document.",
                    "`db.collection.find({ name: 'Alice' })` - Read documents.",
                    "`db.collection.updateOne({ name: 'Alice' }, { $set: { age: 29 } })` - Update a document.",
                    "`db.collection.deleteOne({ name: 'Alice' })` - Delete a document."
                ]
            }
        ]
    },
    {
        head: "Working with ObjectId",
        Topics: [
            {
                heading: "Working with ObjectId",
                link: "#",
                content: "Understanding and using ObjectId in MongoDB.",
                ulItems: [
                    "Structure and properties of ObjectId.",
                    "Generating ObjectIds.",
                    "Using ObjectId in queries and updates."
                ],
                Example: [
                    "`ObjectId is a 12-byte identifier that is unique within a collection.`",
                    "`const id = new ObjectId();` - Generate a new ObjectId.",
                    "`db.collection.find({ _id: ObjectId('60b8d295f3a1a1b2c8b5d4c1') })` - Query by ObjectId."
                ]
            }
        ]
    },
    {
        head: "Embedded Documents",
        Topics: [
            {
                heading: "Embedded Documents",
                link: "#",
                content: "Using embedded documents in MongoDB to store related data within a single document.",
                ulItems: [
                    "Advantages of embedded documents.",
                    "Modeling one-to-few relationships.",
                    "Querying and updating embedded documents."
                ],
                Example: [
                    "`Embedded documents reduce the need for joins and improve read performance.`",
                    "`db.collection.updateOne({ _id: ObjectId('60b8d295f3a1a1b2c8b5d4c1') }, { $set: { 'address.city': 'New York' } })` - Update an embedded document."
                ]
            }
        ]
    },
    {
        head: "References",
        Topics: [
            {
                heading: "References",
                link: "#",
                content: "Using references in MongoDB to link documents across collections.",
                ulItems: [
                    "Advantages of references.",
                    "Modeling one-to-many relationships.",
                    "Querying and updating referenced documents."
                ],
                Example: [
                    "`References are useful for maintaining relationships between large datasets.`",
                    "`db.collection.find({ authorId: ObjectId('60b8d295f3a1a1b2c8b5d4c1') }).populate('author')` - Query and populate referenced documents."
                ]
            }
        ]
    },
    {
        head: "Query Operators",
        Topics: [
            {
                heading: "Query Operators",
                link: "#",
                content: "Using query operators in MongoDB to filter documents based on specific criteria.",
                ulItems: [
                    "Comparison operators (e.g., `$eq`, `$gt`, `$lt`).",
                    "Logical operators (e.g., `$and`, `$or`, `$not`).",
                    "Element operators (e.g., `$exists`, `$type`)."
                ],
                Example: [
                    "`db.collection.find({ age: { $gt: 30 } })` - Find documents where age is greater than 30.",
                    "`db.collection.find({ $or: [{ status: 'A' }, { age: { $lt: 30 } }] })` - Find documents where status is 'A' or age is less than 30."
                ]
            }
        ]
    },
    {
        head: "Projection",
        Topics: [
            {
                heading: "Projection",
                link: "#",
                content: "Using projection to specify which fields to include or exclude in query results.",
                ulItems: [
                    "Including specific fields.",
                    "Excluding specific fields.",
                    "Combining inclusion and exclusion."
                ],
                Example: [
                    "`db.collection.find({}, { name: 1, age: 1 })` - Include only the `name` and `age` fields.",
                    "`db.collection.find({}, { _id: 0, password: 0 })` - Exclude the `_id` and `password` fields."
                ]
            }
        ]
    },
    {
        head: "Sorting",
        Topics: [
            {
                heading: "Sorting",
                link: "#",
                content: "Sorting query results in MongoDB.",
                ulItems: [
                    "Sorting by a single field.",
                    "Sorting by multiple fields.",
                    "Specifying sort order (ascending/descending)."
                ],
                Example: [
                    "`db.collection.find().sort({ age: 1 })` - Sort results by `age` in ascending order.",
                    "`db.collection.find().sort({ age: -1, name: 1 })` - Sort results by `age` in descending order, then by `name` in ascending order."
                ]
            }
        ]
    },
    {
        head: "Limiting and Skipping Results",
        Topics: [
            {
                heading: "Limiting and Skipping Results",
                link: "#",
                content: "Limiting the number of documents returned and skipping a specified number of documents.",
                ulItems: [
                    "Using the `limit` method.",
                    "Using the `skip` method.",
                    "Combining `limit` and `skip` for pagination."
                ],
                Example: [
                    "`db.collection.find().limit(5)` - Limit the result set to 5 documents.",
                    "`db.collection.find().skip(10)` - Skip the first 10 documents.",
                    "`db.collection.find().skip(10).limit(5)` - Skip the first 10 documents and limit the result set to the next 5 documents."
                ]
            }
        ]
    },
    {
        head: "Text Search",
        Topics: [
            {
                heading: "Text Search",
                link: "#",
                content: "Performing text searches in MongoDB collections.",
                ulItems: [
                    "Creating text indexes.",
                    "Using the `$text` query operator.",
                    "Specifying text search options."
                ],
                Example: [
                    "`db.collection.createIndex({ content: 'text' })` - Create a text index on the `content` field.",
                    "`db.collection.find({ $text: { $search: 'keyword' } })` - Perform a text search for `keyword`.",
                    "`db.collection.find({ $text: { $search: 'keyword' } }, { score: { $meta: 'textScore' } }).sort({ score: { $meta: 'textScore' } })` - Sort results by text search score."
                ]
            }
        ]
    },
    {
        head: "Geospatial Queries",
        Topics: [
            {
                heading: "Geospatial Queries",
                link: "#",
                content: "Using geospatial queries to work with location-based data in MongoDB.",
                ulItems: [
                    "Creating geospatial indexes.",
                    "Using geospatial query operators.",
                    "Performing common geospatial queries."
                ],
                Example: [
                    "`db.collection.createIndex({ location: '2dsphere' })` - Create a 2dsphere index for geospatial data.",
                    "`db.collection.find({ location: { $near: { $geometry: { type: 'Point', coordinates: [lng, lat] }, $maxDistance: 1000 } } })` - Find documents near a specific point within 1000 meters.",
                    "`db.collection.find({ location: { $geoWithin: { $centerSphere: [[lng, lat], radius] } } })` - Find documents within a spherical area."
                ]
            }
        ]
    },
    {
        head: "GridFS",
        Topics: [
            {
                heading: "GridFS",
                link: "#",
                content: "Using GridFS to store and retrieve large files in MongoDB.",
                ulItems: [
                    "Overview of GridFS.",
                    "Storing files in GridFS.",
                    "Retrieving files from GridFS."
                ],
                Example: [
                    "`mongofiles -d mydb put myfile.txt` - Store a file in GridFS.",
                    "`db.fs.files.find()` - List files stored in GridFS.",
                    "`mongofiles -d mydb get myfile.txt` - Retrieve a file from GridFS."
                ]
            }
        ]
    },
    {
        head: "MongoDB Transactions",
        Topics: [
            {
                heading: "MongoDB Transactions",
                link: "#",
                content: "Performing multi-document transactions in MongoDB.",
                ulItems: [
                    "Starting a session and transaction.",
                    "Committing and aborting transactions.",
                    "Best practices for using transactions."
                ],
                Example: [
                    "`const session = client.startSession();` - Start a session.",
                    "`session.startTransaction();` - Start a transaction.",
                    "`session.commitTransaction();` - Commit the transaction.",
                    "`session.abortTransaction();` - Abort the transaction."
                ]
            }
        ]
    },
    {
        head: "Change Streams",
        Topics: [
            {
                heading: "Change Streams",
                link: "#",
                content: "Using change streams to listen for real-time changes in MongoDB.",
                ulItems: [
                    "Creating a change stream.",
                    "Listening for change events.",
                    "Processing change events."
                ],
                Example: [
                    "`const changeStream = db.collection.watch();` - Create a change stream.",
                    "`changeStream.on('change', next => { console.log(next); });` - Listen for and process change events."
                ]
            }
        ]
    },
    {
        head: "Replication",
        Topics: [
            {
                heading: "Replication",
                link: "#",
                content: "Setting up and managing replication in MongoDB.",
                ulItems: [
                    "Configuring replica sets.",
                    "Managing replica set members.",
                    "Handling failover and recovery."
                ],
                Example: [
                    "`rs.initiate()` - Initialize a replica set.",
                    "`rs.add('mongodb0.example.com:27017')` - Add a member to the replica set.",
                    "`rs.status()` - Check the status of the replica set."
                ]
            }
        ]
    },
    {
        head: "Sharding",
        Topics: [
            {
                heading: "Sharding",
                link: "#",
                content: "Using sharding to scale out MongoDB deployments.",
                ulItems: [
                    "Configuring sharding.",
                    "Sharding collections.",
                    "Managing shards."
                ],
                Example: [
                    "`sh.addShard('rs1/mongodb0.example.com:27017')` - Add a shard to the cluster.",
                    "`sh.enableSharding('mydb')` - Enable sharding for a database.",
                    "`sh.shardCollection('mydb.mycollection', { shardKey: 1 })` - Shard a collection."
                ]
            }
        ]
    },
    {
        head: "Backup and Restore",
        Topics: [
            {
                heading: "Backup and Restore",
                link: "#",
                content: "Backing up and restoring MongoDB databases.",
                ulItems: [
                    "Using `mongodump` and `mongorestore`.",
                    "Performing incremental backups.",
                    "Automating backups."
                ],
                Example: [
                    "`mongodump --db mydb --out /backup/directory` - Back up a database.",
                    "`mongorestore --db mydb /backup/directory/mydb` - Restore a database.",
                    "`mongodump --oplog` - Perform an incremental backup."
                ]
            }
        ]
    },
    {
        head: "Performance Tuning",
        Topics: [
            {
                heading: "Performance Tuning",
                link: "#",
                content: "Optimizing MongoDB performance.",
                ulItems: [
                    "Indexing strategies.",
                    "Query optimization.",
                    "Hardware and configuration tuning."
                ],
                Example: [
                    "`Ensure that frequently queried fields are indexed to improve query performance.`",
                    "`Use the `$explain` method to analyze and optimize queries.`",
                    "`Allocate sufficient memory and CPU resources to the MongoDB server for optimal performance.`"
                ]
            }
        ]
    },
    {
        head: "Security Best Practices",
        Topics: [
            {
                heading: "Security Best Practices",
                link: "#",
                content: "Implementing security best practices for MongoDB deployments.",
                ulItems: [
                    "Enabling authentication.",
                    "Using role-based access control (RBAC).",
                    "Encrypting data in transit and at rest."
                ],
                Example: [
                    "`Enable authentication to require users to log in to the MongoDB server.`",
                    "`Use RBAC to grant users only the permissions they need to perform their tasks.`",
                    "`Use SSL/TLS to encrypt data in transit between clients and the MongoDB server.`"
                ]
            }
        ]
    },
    {
        head: "User Authentication",
        Topics: [
            {
                heading: "User Authentication",
                link: "#",
                content: "Setting up user authentication in MongoDB.",
                ulItems: [
                    "Creating user accounts.",
                    "Assigning roles to users.",
                    "Managing user permissions."
                ],
                Example: [
                    "`db.createUser({ user: 'admin', pwd: 'password', roles: ['userAdminAnyDatabase'] })` - Create a user with administrative privileges.",
                    "`db.grantRolesToUser('admin', ['readWrite'])` - Assign roles to a user.",
                    "`db.getUsers()` - List all users in the database."
                ]
            }
        ]
    },
    {
        head: "Role-based Access Control",
        Topics: [
            {
                heading: "Role-based Access Control",
                link: "#",
                content: "Using role-based access control (RBAC) to manage permissions in MongoDB.",
                ulItems: [
                    "Creating custom roles.",
                    "Assigning roles to users.",
                    "Managing role permissions."
                ],
                Example: [
                    "`db.createRole({ role: 'customRole', privileges: [{ resource: { db: 'mydb', collection: '' }, actions: ['find', 'insert'] }], roles: [] })` - Create a custom role.",
                    "`db.grantRolesToUser('user1', ['customRole'])` - Assign a custom role to a user.",
                    "`db.getRoles()` - List all roles in the database."
                ]
            }
        ]
    },
    {
        head: "SSL/TLS Encryption",
        Topics: [
            {
                heading: "SSL/TLS Encryption",
                link: "#",
                content: "Encrypting data in transit using SSL/TLS in MongoDB.",
                ulItems: [
                    "Configuring SSL/TLS for MongoDB.",
                    "Generating and using SSL/TLS certificates.",
                    "Enforcing SSL/TLS connections."
                ],
                Example: [
                    "`Generate SSL/TLS certificates using OpenSSL or a trusted certificate authority.`",
                    "`Configure MongoDB to use SSL/TLS by setting the `net.ssl` options in the configuration file.`",
                    "`Use the `--ssl` option to enforce SSL/TLS connections when starting the MongoDB server and client.`"
                ]
            }
        ]
    },
    {
        head: "Monitoring and Metrics",
        Topics: [
            {
                heading: "Monitoring and Metrics",
                link: "#",
                content: "Monitoring MongoDB performance and collecting metrics.",
                ulItems: [
                    "Using `mongostat` and `mongotop`.",
                    "Setting up monitoring tools like MongoDB Cloud Manager or Prometheus.",
                    "Analyzing metrics for performance tuning."
                ],
                Example: [
                    "`mongostat` - Monitor MongoDB server status.",
                    "`mongotop` - Monitor collection-level activity.",
                    "`Use MongoDB Cloud Manager or Prometheus to collect and analyze MongoDB metrics for performance tuning.`"
                ]
            }
        ]
    },
    {
        head: "Using MongoDB with Node.js",
        Topics: [
            {
                heading: "Using MongoDB with Node.js",
                link: "#",
                content: "Integrating MongoDB with Node.js applications.",
                ulItems: [
                    "Installing the MongoDB Node.js driver.",
                    "Connecting to MongoDB from a Node.js application.",
                    "Performing CRUD operations from Node.js."
                ],
                Example: [
                    "`npm install mongodb` - Install the MongoDB Node.js driver.",
                    "`const { MongoClient } = require('mongodb'); const client = new MongoClient('mongodb://localhost:27017');` - Connect to MongoDB.",
                    "`client.db('mydb').collection('mycollection').insertOne({ name: 'Alice' });` - Perform a CRUD operation."
                ]
            }
        ]
    },
    {
        head: "Using Mongoose ODM",
        Topics: [
            {
                heading: "Using Mongoose ODM",
                link: "#",
                content: "Using Mongoose as an Object Data Modeling (ODM) library for MongoDB in Node.js applications.",
                ulItems: [
                    "Installing Mongoose.",
                    "Defining schemas and models.",
                    "Performing CRUD operations with Mongoose."
                ],
                Example: [
                    "`npm install mongoose` - Install Mongoose.",
                    "`const mongoose = require('mongoose'); const UserSchema = new mongoose.Schema({ name: String, age: Number }); const User = mongoose.model('User', UserSchema);` - Define a schema and model.",
                    "`User.create({ name: 'Alice', age: 28 });` - Perform a CRUD operation with Mongoose."
                ]
            }
        ]
    },
    {
        head: "Aggregation Pipeline Stages",
        Topics: [
            {
                heading: "Aggregation Pipeline Stages",
                link: "#",
                content: "Using the aggregation framework to perform complex data processing and analysis in MongoDB.",
                ulItems: [
                    "Overview of the aggregation framework.",
                    "Common aggregation pipeline stages (e.g., `$match`, `$group`, `$project`).",
                    "Building and executing aggregation pipelines."
                ],
                Example: [
                    "`db.collection.aggregate([ { $match: { status: 'A' } }, { $group: { _id: '$cust_id', total: { $sum: '$amount' } } }, { $project: { _id: 0, cust_id: '$_id', total: 1 } } ])` - Example aggregation pipeline.",
                    "`Use the `$lookup` stage to perform left outer joins between collections.`",
                    "`Use the `$facet` stage to perform multiple parallel aggregations and combine their results.`"
                ]
            }
        ]
    },
    {
        head: "Data Import and Export",
        Topics: [
            {
                heading: "Data Import and Export",
                link: "#",
                content: "Importing and exporting data in MongoDB.",
                ulItems: [
                    "Using `mongoimport` to import data.",
                    "Using `mongoexport` to export data.",
                    "Best practices for data import/export."
                ],
                Example: [
                    "`mongoimport --db mydb --collection mycollection --file data.json` - Import data from a JSON file.",
                    "`mongoexport --db mydb --collection mycollection --out data.json` - Export data to a JSON file.",
                    "`Ensure data integrity and consistency during import/export operations.`"
                ]
            }
        ]
    },
    {
        head: "Using MongoDB Atlas",
        Topics: [
            {
                heading: "Using MongoDB Atlas",
                link: "#",
                content: "Using MongoDB Atlas for managed MongoDB deployments.",
                ulItems: [
                    "Setting up a MongoDB Atlas account.",
                    "Creating and managing clusters.",
                    "Monitoring and scaling clusters."
                ],
                Example: [
                    "`Create an account on MongoDB Atlas and set up your first cluster.`",
                    "`Use the Atlas dashboard to monitor cluster performance and scale as needed.`",
                    "`Follow best practices for security and backup on MongoDB Atlas.`"
                ]
            }
        ]
    },
    {
        head: "MongoDB Stitch",
        Topics: [
            {
                heading: "MongoDB Stitch",
                link: "#",
                content: "Using MongoDB Stitch for serverless applications.",
                ulItems: [
                    "Setting up MongoDB Stitch.",
                    "Using Stitch Functions and Triggers.",
                    "Integrating Stitch with MongoDB Atlas."
                ],
                Example: [
                    "`Create a new MongoDB Stitch app from the Atlas dashboard.`",
                    "`Write and deploy Stitch Functions to handle application logic.`",
                    "`Use Stitch Triggers to automate tasks based on database events.`"
                ]
            }
        ]
    },
    {
        head: "Mobile Sync",
        Topics: [
            {
                heading: "Mobile Sync",
                link: "#",
                content: "Synchronizing data between mobile devices and MongoDB.",
                ulItems: [
                    "Setting up MongoDB Realm for mobile sync.",
                    "Configuring sync rules and permissions.",
                    "Handling sync conflicts."
                ],
                Example: [
                    "`Use MongoDB Realm to enable offline-first mobile applications with sync capabilities.`",
                    "`Configure sync rules in MongoDB Realm to control data access and permissions.`",
                    "`Implement conflict resolution strategies to handle sync conflicts gracefully.`"
                ]
            }
        ]
    },
    {
        head: "Integrating with Other Databases",
        Topics: [
            {
                heading: "Integrating with Other Databases",
                link: "#",
                content: "Integrating MongoDB with other databases.",
                ulItems: [
                    "Using MongoDB with relational databases.",
                    "Using MongoDB with NoSQL databases.",
                    "Data migration strategies."
                ],
                Example: [
                    "`Use ETL (Extract, Transform, Load) tools to migrate data between MongoDB and relational databases.`",
                    "`Implement data synchronization solutions to keep data consistent across different databases.`",
                    "`Follow best practices for data modeling and schema design when integrating MongoDB with other databases.`"
                ]
            }
        ]
    },
    {
        head: "Backup Strategies",
        Topics: [
            {
                heading: "Backup Strategies",
                link: "#",
                content: "Implementing effective backup strategies for MongoDB.",
                ulItems: [
                    "Using `mongodump` and `mongorestore`.",
                    "Automating backups with MongoDB Atlas.",
                    "Best practices for backup and recovery."
                ],
                Example: [
                    "`Schedule regular backups using `mongodump` to ensure data is always backed up.`",
                    "`Use MongoDB Atlas automated backups for hassle-free backup management.`",
                    "`Test backup and restore processes regularly to ensure data can be recovered in case of a failure.`"
                ]
            }
        ]
    },
    {
        head: "Disaster Recovery",
        Topics: [
            {
                heading: "Disaster Recovery",
                link: "#",
                content: "Planning and implementing disaster recovery strategies for MongoDB.",
                ulItems: [
                    "Creating a disaster recovery plan.",
                    "Setting up replication and backups.",
                    "Testing and validating recovery procedures."
                ],
                Example: [
                    "`Develop a comprehensive disaster recovery plan that outlines steps to recover from data loss or system failures.`",
                    "`Set up MongoDB replication and regular backups to ensure data can be restored quickly in case of a disaster.`",
                    "`Regularly test and validate your recovery procedures to ensure they are effective and up to date.`"
                ]
            }
        ]
    },
    {
        head: "Migration Strategies",
        Topics: [
            {
                heading: "Migration Strategies",
                link: "#",
                content: "Strategies for migrating data to and from MongoDB.",
                ulItems: [
                    "Planning a data migration.",
                    "Using ETL tools for migration.",
                    "Minimizing downtime during migration."
                ],
                Example: [
                    "`Plan your data migration carefully to ensure all data is migrated accurately and efficiently.`",
                    "`Use ETL tools to facilitate the migration process and handle data transformations.`",
                    "`Implement strategies to minimize downtime and ensure a smooth transition during the migration.`"
                ]
            }
        ]
    },
    {
        head: "Testing and Development with MongoDB",
        Topics: [
            {
                heading: "Testing and Development with MongoDB",
                link: "#",
                content: "Best practices for testing and development with MongoDB.",
                ulItems: [
                    "Setting up a development environment.",
                    "Writing tests for MongoDB applications.",
                    "Using test data and fixtures."
                ],
                Example: [
                    "`Set up a local development environment to test MongoDB applications without affecting production data.`",
                    "`Write unit and integration tests to ensure your MongoDB queries and operations work as expected.`",
                    "`Use test data and fixtures to simulate real-world scenarios and test your application's behavior.`"
                ]
            }
        ]
    },
    {
        head: "Common Pitfalls and Troubleshooting",
        Topics: [
            {
                heading: "Common Pitfalls and Troubleshooting",
                link: "#",
                content: "Avoiding common pitfalls and troubleshooting issues in MongoDB.",
                ulItems: [
                    "Understanding common MongoDB errors.",
                    "Best practices for troubleshooting performance issues.",
                    "Avoiding schema design mistakes."
                ],
                Example: [
                    "`Learn to recognize and resolve common MongoDB errors, such as connection issues and query failures.`",
                    "`Follow best practices for troubleshooting performance issues, such as analyzing query performance and indexing strategies.`",
                    "`Avoid common schema design mistakes, such as improper use of embedded documents and references.`"
                ]
            }
        ]
    }            
];


export default mongodbTopics;
