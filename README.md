# Symetra Store Client

## Table of Contents
- [Description](#description)
- [Live Link](#live-link)
- [Client Code](#client-code)
- [Instructions](#instructions)
- [Goals](#goals)
  - [Develop API resources](#develop-api-resources-to-enable)
  - [Stretch Goal](#stretch-goal)
- [Assumptions](#assumptions)
- [Deliverables](#deliverables)
- [Scripts](#scripts)
- [Notable Points](#notable-points)

## Description:
Imagine an ecommerce store where the store owner gives out discounts to every nth transaction. Customers, as they login, get to see if they have discount and the appropriate discount code. Customers can then purchase items using the discount code if available. The store owner reviews at various times what the count of purchases that were made in the store as well as the total count of discounts that were given out.

## Live Server Host:
https://ancient-reef-64647.herokuapp.com/  

## Client Code
https://github.com/sinsys/symetra-store  

## Instructions
- The app can be used online as both of the client and the server code are deployed. You can visit the live site here:
  - https://symetra-store.vercel.app
- To run the app locally:
  - Clone both of the server and client repositories to a directory on your machine
  - Run `npm i` within both project directories to install dependencies
  - Run `npm start` on the server code repository
  - Run `npm start` on the client code repository
  - The app will be running on `http://localhost:3000`
  - Tests are not available for the server code at this time due to time constraints. They will be added shortly
  - The client code can be tested by running `npm t`

## Goals: 
### Develop API resources:
- An admin to set the n, and the discount code. 
- Customers to check if there is a discount code and then make a purchase with or without the discount code
- Admin to see the report described above 

### Stretch Goal: 
- Develop a simple UI with different pages for admin and customer 

## Assumptions:
- Server side state can be maintained all in memory, so no persistence layer is required
- No authentication or authorization required on API/UI
- Reports and any other data can be simple JSON – don’t worry about prettying it up  

## Deliverables:
- Publish your code on github and share the link
- Share documentation about how to run code
> Quality of code is what we are looking for so choose a language of your choice. Good luck!  

## Scripts:  
- `npm i` - Installs the necessary dependencies
- `npm start` - Starts the server locally  

## Endpoints:
- `GET /api/products` - Returns an array of all products
- `GET /api/users` - Returns an array of all users
- `GET /api/users/random` - Returns a single, randomly selected user
- `GET /api/purchases` - Returns an array of all purchases
- `GET /api/purchases/coupon` - Returns all purchases that used a coupon
- `GET /api/admin` - Returns the active coupon interval and code
- `POST /api/purchases` - Adds a new purchase
- `POST /api/admin/coupon` - Changes the coupon code
- `POST /api/admin/interval` - Changes the coupon interval  

## Notable Points:
- Due to the time restriction, I was not able to write tests for the API paths. I intend to write tests, but they will take another 2-3 hours to create all of the fixtures required.
- We are just using a global module for data called `mockData`. The data will be persistent until the server sleeps (30 mins of inactivity).

