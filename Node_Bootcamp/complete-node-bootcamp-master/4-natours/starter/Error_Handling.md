# Error Handling in Express: An Overview:

## Operational Errors

Problems that we can predict will happen at some point, so we just need to handle them in advance

1. Invalid path accessed.
2. Invalid user input (validator error from mongoose)
3. Failed to connect to server
4. Failed to connect to database
5. Request timeout
6. Etc.


## Programming Errors

Bugs that we developers introduce into our code. Difficult to find and handle

1. Reading properties on undefined;
2. Passing a number where an object is expected.
3. Using await without async
4. Using req.query instead of req.body
5. etc.

