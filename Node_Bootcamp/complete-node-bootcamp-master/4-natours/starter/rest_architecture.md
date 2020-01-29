1. Separate API into logical resources
2. Expose structured resource-based URLs
3. Use HTTP methods (verbs)
4. Send data as JSON (usually)
5. Be stateless

1. Separate API into logical resources
 What is a resource?
 - Object or representation of which something, which has data associated to it. Any information that can be named can be a resource.

3. Use http methods:
- /addNewTour --> POST /tours <-- used to create tours
- /getTour -->  GET method with /tours/7 <-- tour id
- /updateTour --> PUT /tours/7 <-- used to update resources.
- /deleteTour --> DELETE /tours/7 <-- deleting a resource.
- /getToursByUser --> GET /users/3/tours
- deleteToursByUser --> DElETE /users/3/tours/9

4. JSON is lightweight data format. Contains Key-Value Pairs. keys should be string.
5. Be stateless --> All state is handled on the client. This means that each rquest must contain all the information necessary to process a certain request. The server should not have to remember previous requests.
Example: loggedIn  currentPage
