var db = require("../models");

module.exports = function(app) {
  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Get an example by id
  // app.get("/api/examples/:id", function(req, res) {
  //   db.Example.findOne({where: {id: req.params.id}}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });


   //Get all users -- veryify table is working
   app.get("/api/userBios", function(req, res) {
    db.userBios.findAll({}).then(function(dbUserBios) {
      console.log(dbUserBios);
    });
  });

  //Get all products from all users
  app.get("/api/products", function(req, res) {
    db.Products.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  //Get all products for the logged in user --> need to associate users to their products to retrieve them (left-join)
  app.get("/api/products/:userId", function(req, res) {
    db.Products.findAll({
      where: { 
        userId: req.params.userId 
      } 
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Create a new product
  app.post("/api/products", function(req, res) {
    db.Products.create(req.body).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

 // Update a product
 app.post("/api/products/:id", function(req, res) {
  db.Products.update(req.body).then(function(dbProducts) {
    res.json(dbProducts);
  });
});

  // Delete a product
  app.delete("/api/products/:id", function(req, res) {
    db.Products.destroy({ 
      where: {
        id: req.params.id 
      } 
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

};
