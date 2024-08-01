# DrinkPedia

DrinkPedia is a React application built with Chakra UI that allows users to search and explore a variety of cocktails. The app fetches data from [TheCocktailDB](https://www.thecocktaildb.com/) API and presents it in a user-friendly interface.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- **Search Cocktails**: Users can search for cocktails by name.
- **Filter by Category**: Users can filter cocktails by different categories.
- **View Cocktail Details**: Users can click on a cocktail to view detailed information, including ingredients and instructions.
- **Responsive Design**: The app is fully responsive and works on all devices. 

## Installation

To get started with DrinkPedia, follow these steps:

1. **Clone the repository**:

    ```sh
    git clone https://github.com/yourusername/DrinkPedia.git
    cd DrinkPedia
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

3. **Start the development server**:

    ```sh
    npm start
    ```

## Usage

### Searching for Cocktails

- Enter a cocktail name in the search bar and hit enter.
- The search results will display a list of cocktails matching the query.

### Filtering by Category

- Click on the filter icon to open the filter modal.
- Select a category from the list.
- The app will display cocktails belonging to the selected category.

### Viewing Cocktail Details

- Click on a cocktail card to navigate to the cocktail details page.
- The details page shows the ingredients, measurements, and instructions for the selected cocktail.

## Project Structure

Here is an overview of the project's structure:

DrinkPedia/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── DrinkCard.jsx
│ │ ├── DrinkPage.jsx
│ │ ├── FilterModal.jsx
│ │ ├── Footer.jsx
│ │ ├── Hero.jsx
│ │ ├── Nav.jsx
│ │ └── SearchResults.jsx
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
├── README.md
└── ...

markdown

