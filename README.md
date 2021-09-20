# Blog Application Programming Interface

# About

This Project is an Application Programming Interface for a blog website. This include routes for blog posts and comments using javascript programming laguages (Node.js framework for server-side programming), which information is stored in database respectively. The purpose of this project is an asssessment test that can help user post blog.

# Content

- Installation
- Documentation
- Testing
- Deployment
- Tools Used
- Built-With
- Comments
- Additions

# Installation

- Visit the github respository [github respository link](https://github.com/Beloved1310/blogpostbApi)
- Clone the application programming interface to your Desktop from github.

  > navigate to the **_code_** button on the repository.

  > copy the link and clone using the command _git clone repository url_

  > or using github desktop

  > or download to your local desktop.

- Open the code using any code editor.

- On terminal

  > Run 'npm install' to run all dependecies

# Documentation

The Project is well documented on Postman. The Publication link is [blog post documentation on postman link](https://documenter.getpostman.com/view/15034996/UUxtDqDD). Click the link to view the documentation.

# Testing

The major testing done is manual testing using postman technologies and intergration testing using Jest.

# Deployment

The Project live deployment is [blog post deployment link on heroku](https://blogpostcomment.herokuapp.com/). Click and use the documentation to know the routes for easy navigation.

# Tools Used

- Visual Studio Code Editor
- Node Package Manager packages:
  - jest : for intergration testing.
  - nodemon: for local server running.
  - bcrypt : for storing hash password.
  - cloudinary: for storing images on cloud.
  - cors:for cross-origin requests.
  - debug: for debugging utilty.
  - dotenv: for loading environment utilty
  - express: for creating Restful API's
  - express-async-errors : for error handling.
  - joi: for data validation of javascript.
  - jsonwebtoken : for creating users token.
  - mongoose: for storing data on mongodb.
  - multer:for uploading files.
  - eslint: for identifying ECMAScript/Javascript code.
  - eslint-config-airbnb-base: for ESLint rules implentation.
  - husky : for improvement of git commit.
  - lint-staged: for linting before making commits.
  - prettier : for code formatting.
  - eslint-config-prettier: for prettier code formatting.
  - supertest: for testing purposes.

# Built-With

The application programming interface is built with:

- Javascript programming language,
- it's framework ( Node.js )
- Node package manager
- Mongo database to store information into the database.

- Environment variable names:

  - MONGODBURI : to connect to Mongodb atlas to store data
  - JWT_KEY : to authenticate users
  - debug : to asychronously log statement
  - CLOUDINARY_CLOUD_NAME : to set to store images on cloudinary
  - CLOUDINARY_API_KEY : api key to store images on cloudinary
  - CLOUDINARY_API_SECRET : secret key to store images on cloudinary

# Comments

This application programming interface can be intergrated to achieve blog website.

# Additions

In addition, user routes is added for registration and authentication of users to make blog posts and comments.

Validation using joi is still being implemented and jest unit and intergration testing for routes. This would be achieve by creating joi schemma to validate user input and writing unit and intergration test.
