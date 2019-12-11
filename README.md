# mender-validation-gateway
Mender's Validation Gateway is a REST API built with Node-js and Express-js framework, written in Typescript.\
The Validation Gateway validates all documentations submitted within the Mender app.\
Either it is with the RBQ license, Home Inspector license and etc...\
The Validation Gateway uses a crawler to help with the validation of information.

First off run: npm install

HOW TO RUN WEB APP IN DEV:

Within the project dir run the following script commands:
1.  npm run build
2.  npm start  (nodemon)   OR   npm run dev     (ts-node)
3.  Access: http://localhost:3000/swagger/

<br/>
<br/>

HOW TO RUN WEB APP IN PROD:

Within the project dir run the following script commands: 
1.  npm run prod
2.  http://localhost:3000/swagger/


NOTE:\
If you ever encounter some funky issues with the swagger generated files.\
You can run the build command (npm run build), which will clean the dist folder and build a new one.\
If problems still persist, then manually delete the dist folder and run the build command again.
      
***For more info about the scripts, refer to: package.json***
   
