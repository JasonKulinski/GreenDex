# blackbear-be

**Welcome to the Blackbear Backend!**  
This is the backend for our Blackbear application. We're using the following stack:

1. React
1. Express.js
1. Node.js
1. Elasticsearch

This project encompasses the bottom three items of the stack. The React project is covered in the `blackbear-fe` repo.

## Environment Setup

1. Clone/pull the repo
1. Open your console/terminal
1. Run `npm i` to install the latest versions of all project dependencies
1. Copy the `sample.env` file
1. Rename the copied version to `.env`
1. Modify the defaults in the file to whatever you need
1. Run `npm run setup-es` to download and set up Elasticsearch (or, if you're on Windows: download the ES zip, extract it in the repo folder, and rename it to "elasticsearch"
1. Run `npm run es` to start Elasticsearch
1. Wait for ES to load
1. Copy the default password from the terminal output using Ctrl+Shift+C
1. Terminate the program using Ctrl+C
1. Paste the default password as the `ES_PASS` in the `.env` file
1. Save the file

## Once you're set up
1. Run `npm run es` to start Elasticsearch
1. Run `npm start` to start Node
1. Have fun!