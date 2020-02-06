# MVC Architecture in express app

1) Model - Business Logic
2) Controller - Application Logic
3) View - Presentation Logic

Server-side rendered webiste - contains templates used to generate view to send back to client.

#Explaining MVC in natours
Request --> Router --> Controller

Controller will interact with Model then gets response from Model and select a view template and send data to View layer.

Application vs Business Logic

## Application Logic:
1. Code that is only concerned about the application's implementation, not the underlying business problem we're trying to solve (ie: showing and selling tours)
2. Concerned about managing request and responses
3. About the app's more technical aspect
4. Bridge between model and view layers 


Business Logic:
1. Code that actually solves the business problem we set out to solves
2. Directly releated to business rules, how the business work and business needs
3. Example:
- Creating new tours in the database
- Checking if user's password is correct.
- Validating user input data
- Ensuring only users who bought a tour can review it.

Fat models/thin controllers: offload as much logic as possible into the models and keep the contorllers as simple and lean as possible.
