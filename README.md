# api-hackathon
 A hackathon project utlizing the data from two public APIs to display countries information and location on google map. 
 
## Technologies Used

- HTML5
- Bootstrap 4
- CSS3
- JavaScript

## Live Demo

Try the application live at [https://malmossa.github.io/know-the-world/](https://malmossa.github.io/know-the-world/)

## Features

- U.S is the default country once the page is loaded.
- User can choose a country from the dropdown menu to get general informations and the locaction on map for that country. 

## Preview

![SGT React](assets/sgt_react.gif)

## Development

### System Requirements

- Node.js 10 or higher
- NPM 6 or higher

### Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/malmossa/know-the-world.git
    cd sgt-react
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Import the example database to MongoDB.

    ```shell
    mongoimport --db sgt-react database/dump.json
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
