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
