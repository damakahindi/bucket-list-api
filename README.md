[![Build Status](https://travis-ci.org/damakahindi/bucket-list-api.svg?branch=master)](https://travis-ci.org/damakahindi/bucket-list-api)
[![Coverage Status](https://coveralls.io/repos/github/damakahindi/bucket-list-api/badge.svg?branch=master)](https://coveralls.io/github/damakahindi/bucket-list-api?branch=master)

# bucket-list-api
This is a  bucket-list API that allows users of the API to manages buckets, session and add users. 

## Dependencies
* Mongoose​
* Node
* Postman

## Installation

1. Install [**Node JS**](https://nodejs.org/en/).
1. Create a Mongo DB there [**MLab**](https://mlab.com/) . 
1. Clone the [**repository here**](https://github.com/andela-ekahindi/doc-api.git) or download the zip file of the project. Unzip it.
1. [**cd**] into the root of the *bucket-list-api project directory**.
1. Run `npm install` on the terminal.

## Tests

Run `MONGODB_URI=mongodb://<user>:<user>@ds1234.mlab.com:1237/name-of-mlab-mongo-db npm test` on the terminal while within the **project root directory**.

## Usage
### Starting
In the project root, run `MONGODB_URI=mongodb://<user>:<user>@ds1234.mlab.com:1237/name-of-mlab-mongo-db npm start`.
### Routes
* #### users

  * ##### create
  `POST`
  `http://127.0.0.1:5000/api/user`

* #### sections
  * ##### create
  `POST`
  `http://127.0.0.1:5000/api/section`

  * ##### update
  `PUT`
  `http://127.0.0.1:5000/api/section/:id`

  * ##### delete
  `DELETE`
  `http://127.0.0.1:5000/api/section/:id`

  * ##### get one
  `GET`
  `http://127.0.0.1:5000/api/section/:id`

  * ##### get documets belonging to a particular user
  `GET`
  `http://127.0.0.1:5000/api/user/:id/section`

* #### buckets

* ##### create
  `POST`
  `http://127.0.0.1:5000/api/bucket`

  * ##### update
  `PUT`
  `http://127.0.0.1:5000/api/bucket/:id`

  * ##### delete
  `DELETE`
  `http://127.0.0.1:5000/api/bucket/:id`

  * ##### get one
  `GET`
  `http://127.0.0.1:5000/api/bucket/:id`

  * ##### get documets belonging to a particular user
  `GET`
  `http://127.0.0.1:5000/api/user/:id/bucket`

**NB** Make sure all tests pass before testing the api with POSTman.

## Models

Three models are defined: `Bucket`, `User` and `Section`. 

## Testing

Testing is achieved through use of `supertest`, `mocha` and `chai` packages. `supertest` is used to make requests to the api and `mocha` is the testing framework test and `chai` is the exception library. They will both be installed when you run `npm install` and the tests will run when you run `npm test`.

## Express Routes

Api endpoints were created using `express` router. To access them on a http client, run `node index.js` on your terminal. The routes are defined under `server/routes`.


license MIT 😄 😄