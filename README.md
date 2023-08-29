# Description
This is a usefull application to manage and organize the products or inventory of a company, you can create and save new preoducts along with their specifications, you can also edit or delete any product.

## Some settings
This application was built to connect to a MongoDB database, there is a file called .env (it save environment variables) in the api directory where you must save your username and password to connect your own database.
### Note
You can use MongoDb Atlas, you must create an account and then a clouster to get a password and user to connect.

## Steps to clone and run application
Open Git Bash (or your preferred terminal) and change the current directory to the location where you want to clone this repo, then type:
```
git clone https://github.com/JulianLIMe/productManager.git
cd api
npm run dev
```
At this point you have lifted the RestAPI, now you need to run the clien which is where the front-end logic is, in other terminal type:
```
cd client && npm run dev
```

HAVE FUN!