# E-commerce Frontend

This is the frontend for a simple e-commerce product listing application built with Vue.js and PrimeVue.

## Features

- Product listing page that displays products with details such as name, description, price, and image.
- Form to add new products (only for authenticated users).
- Search bar to filter products by name.
- Login form for user authentication.
- Responsive design to ensure compatibility across different devices.

## Technologies Used

- Vue.js
- PrimeVue for UI components
- Vue Router for navigation
- Axios for HTTP requests

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Create  the project:

npm install
  <!-- Backend base Url -->
axios.defaults.baseURL = 'http://localhost:3000/api';

npm run serve


Project structure 

frontend/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Assets such as images
│   ├── components/          # Vue components
│   ├── router/              # Vue Router configuration
│   ├── views/               # Vue views/pages
│   ├── App.vue              # Root component
│   ├── main.js              # Entry point
├── .gitignore               # Git ignore file
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation

Available Scripts
In the project directory, you can run:

npm run serve: Runs the app in development mode.
npm run build: Builds the app for production.
npm run lint: Lints the code for any errors.

Components
ProductList.vue
Displays the list of products with details such as name, description, price, and image.

AddProduct.vue
Form to add a new product. Only accessible to authenticated users.

SearchBar.vue
Search bar to filter products by name.

Login.vue
Form for user authentication.

Views
Home.vue
The home page that contains the product listing and search bar.

AddProduct.vue
The page that contains the form to add a new product.

Login.vue
The login page for user authentication.

Configuration
API Endpoint
Configure the API endpoint in src/main.js:
