# Bank-App

Simple application for managing transactions.

## Features:

* Create transaction
  * Select account from predefined set
  * Filter matching suggestions while typing
  * Validation error on non-existing account name
  * Validation error on typing invalid money amount
  * Validation error on creating transaction with bad input

* Show transactions history
  * Search field filtering the list
  * Hint on no matches found
  * Click upon transaction for more info

* Show transaction details
  * Allow changing transaction state
  * Exit details view

## How to Start:

1. Start the backend:
   * in sub-dir `backend/` run commands:
```
npm install
npm start
```
   * check the server is running at `localhost:7000` in the browser
   
2. Start the frontend
   * in sub-dir `frontend/` run commands:
```
npm install
npm start
```
   * access the UI at `localhost:3000` in the browser
