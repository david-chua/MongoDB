Mongo - NoSQL database
Collections (Tables) --> Can contain one more Documents (Rows)

blog collection for all post
users collection for all user
reviews collection for all review

MongoDB is a document database with scalability and flexibility that you want with querying and indexing that you need

Key MongoDB features
- Document based: MongoDB stores data in documents ( filed-value pair data structures. NoSQL)
- Scalable: Very easy to distribute data across multiple machines as your users and amount of data grows
- Flexible: No document data schema required, so each document can have different number and type of fields.
- Performant: Embedded data models, indexing, sharding, flexible documents, native duplication, etc.

MongoDB uses format similar to JSON. Contains values (typed) All MongoDB documents will be typed.
Contains field with key-value pairs

- Embedded Documents:
- Embedding/Denormalizing: Including related data into a single document. This allows for quicker access and easier data models(it's not always the best solutions though)
- Maximum size for each document is 16 MB.
- Each document contains unique ID.


- In relational database, Data is always normalized. To reference the field, you need to Join the tables.


## What is Mongoose and Why Use It?
- Mongoose is an Object Data Modeling (ODM) library for MongoDB and NodeJS, a higher level of abstraction;
- Mongoose allows for rapid and simple development of mongoDB database interactions
- Features: schemas to model data and relationships, easy data validation, simple query API, middleware, etc
- Mongoose Schema: where we model our data by describing the structure of the data, default, values, and validation;
- Mongoose model: a wrapper for the schema, providing an interface to the database for CRUD operations
