# LowerUpper
API to convert to uppercase and lowercase

You can check the website: https://lowerupper-c31ab.firebaseapp.com/

How to run the site ?

1. git clone https://github.com/harikrishnang3399/LowerUpper.git
2. Goto directory LowerUpper
3. Type in terminal to run server
        >node app.js
            OR
        >nodemon app.js
4. open index.html in browser
5. Thats all :)

NOTE: Your system should have Nodejs installed. All npm installs have been made and node_modules folder contains all of them.

Installs made(inside LowerUpper folder) :
1. npm install --save express
2. npm install --save multer
3. npm install --save cors
4. npm install --save body-parser
5. npm install --save-dev nodemon

If nodemon app.js didn't work, goto package.json file and add in scripts:
     "start": "nodemon app.js"
Now run 
        >npm start
