# Flipkart Scraper API
[Postman documentation](https://documenter.getpostman.com/view/22495929/2s9Xy5NWqv)

### Tech Stack
* Node.js
* ExpressJS
* JWT
* MongoDB
* Mongoose

Deployed to AWS ([Live endpoint](https://xopepr7x6d.execute-api.ap-south-1.amazonaws.com/dev/))

### System Design
![system-design](https://github.com/rahulsm20/flipkart-scraper-api/assets/77540672/2d837ee7-ba6b-4c17-b34e-e8bb97fdc98b)

### Steps to run locally 

* Clone this repo
  ```
  git clone https://github.com/rahulsm20/flipkart-scraper-api
  ```

* Enter folder
  ```
  cd flipkart-scraper-api
  ```
* Install packages
  ```
  npm install
  ```
* Add a connection URL to a MongoDB instance in a .env file at the root of the directory and a 256-bit JWT secret key
  * Example
    ```
    MONGO_URL=mongodb+srv://admin:<password>@cluster0.5kaqvs5.mongodb.net/<collection_name>
    JWT_SECRET=<INSERT_SECRET>
    ```
* Run project
  * Dev mode
    ```
    npm run dev
    ``` 
  * Production mode
    ```
    npm start
    ```