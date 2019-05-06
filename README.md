# Candidate Notes

## Instructions for initialising demo

From the project root folder:

```
yarn
yarn seed
yarn start:server 
yarn start:client 
```

## Challenge Walk-through

I have completed the task as described by:

* Creating an backend API, written in Node.js
* Creating a seeds file that inputs the prescribed sample data into the API
* Adding React to the frontend 
* Incorporating SASS to styling
* Adding a test file using Mocha, Chai and SuperTest to test the backend  ('yarn test' to initiate testing)

## Biggest Challenge

The biggest challenge was handling the different products the suppliers possessed. I wanted the user to only be able to select a product if a company had it in their roster. To achieve this I disabled the dropdown for the product selector until the supplier has been chosen - the API then makes a call and retrieves all the products that supplier has and fills in the supplier dropdown, enabling it in the process.



# [JDLT](https://jdlt.co.uk) full-stack developer challenge

We're hoping to see how you approach a challenge and what sort of standards you use in your code so please feel free to be as creative as you like.

The [job spec](https://jdlt.co.uk/join/full-stack-developer) will help you understand what we'd like to see.

## Dependencies
* NPM / Yarn
## Instructions
From the project root folder:
```
$ npm install
```
OR
```
$ yarn
```
Then it's over to you!

**Please demonstrate:**
* Selecting suppliers and products in the drop-downs
* A round-trip to a server pulling back prices
* Displaying the returned data in the grid
* Anything else you'd like to show us

### Sample data

| Supplier    | Product      | Price (£) |
| ------------|--------------|-----------|
| New Co Ltd  | Small wongle | 5         |
| New Co Ltd  | Large wongle | 8         |
| New Co Ltd  | Super wongle | 12        |
| Old Co Ltd  | Mini wongle  | 4         |
| Old Co Ltd  | Small wongle | 6         |
| Old Co Ltd  | Large wongle | 9         |
| Old Co Ltd  | Super wongle | 13        |
