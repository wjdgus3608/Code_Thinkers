
const swaggerJSDoc = require('swagger-jsdoc')
// Swagger definition
// You can set every attribute except paths and swagger
// https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md
var swaggerDefinition = {
  swagger: '2.0',
  info: { // API informations (required)
    title: 'Hello World', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'A sample API', // Description (optional)
  },
  host: 'localhost:3000', // Host (optional)
  basePath: '/', // Base path (optional)
}

// Options for the swagger docs
var options = {
  // Import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // Path to the API docs
  apis: ['./app.js', './parameters.yaml'],
}

// Initialize swagger-jsdoc -> returns validated swagger spec in json format

const swaggerSpec = swaggerJSDoc(options)
//console.log(swaggerSpec);
module.exports=function(){
  return swaggerJSDoc(options)
}
