# Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction
An express app connecting to mySQL database and implementing RESTful API to return specific id data using parameterized routes and helper function from a GET request in Postman that returns JSON data.

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on Desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction: 

    express --view=hbs express_Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction

(6) Once the process is complete, navigate into the express_Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction directory: 

    cd express_Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction
    
(7) Now in the express_Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_Sequelize_RESTfulAPI_ParameterizedRoute_HelperFunction directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and require mysql2 and models in routes/index.js file.: 

COMMAND PROMPT

(14) Create necessary sequelize folders and files in project.:

    sequelize init

(15)  Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t film,actor,film_actor
    
VS CODE

(16) Create a new folder in your "models" folder called rel. Create a file in your rel folder called associations.js and define the relationships between the "film" and "actor" models in this file.: 

(17) In the models/index.js file add associations constant and at the bottom of the models/index.js file add the call to associations function.: ![Call associations function in models-index js file (Sequelized_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489585-326de400-1aca-11ea-8ad9-4c9f076914b4.JPG)

(18) Open config/config.json file and change settings to connect to the database.: ![Update database connection info in config-config json file (Sequelized_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489699-7bbe3380-1aca-11ea-9c15-13b28b09aca0.JPG)

(19) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application.: ![Require models in app js file (Sequelized_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489768-a8724b00-1aca-11ea-9f74-1e8dd8b3afda.JPG)

(20) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: ![Add models sequelize sync in app js file (Sequelized_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489851-cf308180-1aca-11ea-9156-bee825e5d511.JPG)

(21) In the routes/index.js file require the models.: ![Require models in index js file (Sequelized_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489903-f5562180-1aca-11ea-9fd7-82cf46cd3fc7.JPG)

(22) In the routes/index.js file add get() route for /actors that will use the findAll() method.: ![Add get() route for actors id in index js file (Sequelized_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489953-1cacee80-1acb-11ea-9c73-65e49d3bbb63.JPG)

COMMAND PROMPT

(23) Run nodemon in terminal to see DB sync'd up: 

    nodemon

POSTMAN

(24) Navigate to localhost3000/actors/[insert specific id #] in Postman and perform a GET request to view data.: ![Perform a GET request for localhost3000 - actors in POSTMAN to view data (Sequelize_RESTfulAPI_ParameterizedRoute)](https://user-images.githubusercontent.com/35668707/70489978-31898200-1acb-11ea-8d9e-bd19209b93b0.JPG)

NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
