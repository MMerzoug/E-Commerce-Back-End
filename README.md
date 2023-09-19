# E-Commerce-Back-End

This API provides endpoints for creating, reading, updating, and deleting products.

## Table of Contents
- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Models](#models)
- [Routes](#routes)
- [Usage](#usage)
- [Examples](#examples)
- [Best Code Practices](#best-code-practices)
- [Tech Stack](#tech-stack)
- [Walkthrough Video](#walkthrough-video)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)
- [License](#license)

## About the Project
E-Commerce-Back-End is a robust backend system designed to handle e-commerce operations. From product categorization to management of individual product tags, this API covers a wide range of functionalities essential for any e-commerce platform.

### Built With
- Node.js
- Express.js
- Sequelize ORM
- MySQL

## Getting Started
To get a local copy up and running, follow these simple steps:

### Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary packages.

## Models
Category: A category of products.
Product: A product.
ProductTag: A link between a product and a tag.
Tag: A tag that can be applied to products.

## Routes
/api/categories: Get all categories.
/api/categories/:id: Get a single category by ID.
/api/products: Get all products.
/api/products/:id: Get a single product by ID.
/api/tags: Get all tags.
/api/tags/:id: Get a single tag by ID.

## Usage
To use this API, you will need to make HTTP requests to the endpoints defined above. For example, to get all categories, you would make a GET request to the /api/categories endpoint.

The response to a successful request will be a JSON object that contains the data for the requested resource. For example, the response to a GET request to the /api/categories endpoint would be a JSON object that contains an array of all categories.

If the request is unsuccessful, the response will be a JSON object that contains an error message.

## Examples
The following examples show how to use the API to create, read, update, and delete products.

### Creating a product
To create a product, you would make a POST request to the /api/products endpoint. The request body should contain the data for the new product. For example, the following request would create a product with the name "T-Shirt" and the price of $20.00:

POST /api/products
Content-Type: application/json

{
"name": "T-Shirt",
"price": 20.00
}

The response to a successful request would be a JSON object that contains the data for the newly created product.

### Reading a product
To read a product, you would make a GET request to the /api/products/:id endpoint, where :id is the ID of the product you want to read. For example, the following request would read the product with the ID of 1:

GET /api/products/1

The response to a successful request would be a JSON object that contains the data for the requested product.

### Updating a product
To update a product, you would make a PUT request to the /api/products/:id endpoint, where :id is the ID of the product you want to update. The request body should contain the updated data for the product. For example, the following request would update the name of the product with the ID of 1 to "Sweatshirt":

PUT /api/products/1
Content-Type: application/json

{
"name": "Sweatshirt"
}

The response to a successful request would be a JSON object that contains the data for the updated product.

### Deleting a product
To delete a product, you would make a DELETE request to the /api/products/:id endpoint, where :id is the ID of the product you want to delete. For example, the following request would delete the product with the ID of 1:

DELETE /api/products/1


The response to a successful request would be a JSON object that contains an empty body.


## Best Code Practices
This application adheres to the following code standards:

## Tech Stack
This application was made with the following technologies:

## Walkthrough Video
A walkthrough video demonstrating the functionality of the application can be found at the following link:

[Walkthrough Video](https://watch.screencastify.com/v/Q5jOMjnAfLZOJOTLvAri)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

I'd like to thank the following people and projects for their contributions:

- **[BCS Code Files](https://github.com/Bucky24/class_temp_repo.git)**: The codebase leverages these fantastic open-source projects to deliver some features.
- **Vinnie Lopez**: For his code insights and documentation improvements.
- **Donna Casas Silvas**: For her support and insights around insomnia.

## Contact
If you have any questions, feel free to reach out to me!

Github: MMerzoug
Email: monique.merzoug@icloud.com

## License
This project is licensed under the terms of the MIT license.

© 2023 Monique Merzoug. All Rights Reserved.