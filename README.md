## Book store App

---

## Description
- A simple book store application, it display a list of books, and it has a search option we can easily recognize the book.If we can add book into care it has a increment and decrement option, easily increase the quantity.It calculate the total books prices and shipping charges also add display a order summary.
---

##  Table of Contents

- [Book store App](#book-store-app)
- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation \& setup](#installation--setup)
    - [Clone:](#clone)
- [Contributing](#contributing)
- [Contact](#contact)
- [Sample Output](#sample-output)

---
## Features
- It is book store application, it display list of available books by using API fetched data and useState hook.
- It has a search option, we can easily filter the book and easily recognize.
- The book card have a `ADD TO CART` button, if user add that book that text will change into `REMOVE FROM CART`. based on that colors will be changed for easy recognize.
- After user add the books into cart, cart has a quantity increase`+` , deecrease `-` ,and `remove` buttons are there, if user don't need that book user can remove that book in cart.
- User add the books into cart automatically generate a total bill summary, it has a book price, and shipping charges. 
- When app starts it show a `login page` user can enter the details for navigate to the book store, if user have no account they can register the with their details, it has a `register page`
- In the book card has a wish list button if user like that book, they can add the `wishlist page` ,wish list has a seperate page that page contains a `user details` like name and email in header, it has add to cart button also.
- If user can navigate to the book list it auto focus on a `search bar`. 
- It has a another feature for user easy recognization, when user clicks a book image that will navigate to another page and that show a book details, title,book image, author, price, description and wishlist button, if user can add wish list and also a add to cart,it is flexible to use.
##  Tech Stack

- Node Js

- TypeScript

- React 
 
---
## Installation & setup

1. To clone the project enter the below command in the terminal with the path you want to create your project folder.

#### Clone:

- https://github.com/SowmyaT-157/book-store-app

- To Install Node.js click the below link
       [Node.js](https://nodejs.org/)
- To check the Node.js
    - node -v
    - It will display the version of the node
- Navigate to project directory.
  
    - `cd` project path
  
- To create initial project setup 

 ``` bash
    npx create-react-app book-store --template typescript
 ```

- The default port 3000, if you want change the port
   * navigate to the package.json and change the script.

       * "start": "PORT=3005 react-scripts start"


1. To start the project use the below command in the terminal.
* To run the application file
```bash
    npm run start
```
* After navigate browser it show the application.
    * localhost:3005

---
## Contributing
1.Fork the repository

2.Create a new branch (git checkout -b feature-branch).

3.Make your changes and commit them (git commit -m "Add new feature").

4.Push to the branch (git push origin feature-branch).

5.Create a pull request.

---

## Contact

- For any issues or queries ,contact Sowmya T_157

  - https://github.com/SowmyaT-157

---
## Sample Output

![asset](book-store-app/asset/output.png)


