const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    failOnErrors: true,
    openapi: "3.0.0",
    info: {
      title: "Expressjs starter",
      version: "1.0.0",
      description: "Parking management system REST-API",
      contact: {
        name: "Nguyen Quan - kimochiee",
        url: "https://github.com/kimochiee",
        email: "kendystar147@gmail.com",
      },
    },
    components: {
      securitySchemes: {
        Authorization: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          value: "Bearer <JWT token here",
        },
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  // apis: ["./src/routes/*.js"],
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = swaggerDocs;
