const express = require("express");
const router = express.Router();
const val = require("../middlewares/validator.handler");

//Specify Schemas for validation
const productSchema = require("../schemas/product.schema");
const creSch = productSchema.onCreate;
const updSch = productSchema.onUpdate;
const reqSch = productSchema.onRequest;

//Specify the service
const ProductsService = require("../services/product.service");
const service = new ProductsService();

//Endpoints
router.get("/", async (req, res, next) => {
   //Return all
   const { limit, offset } = req.query;
   await service.getAll(limit, offset)
      .then((result) => res.json({ products: result }))
      .catch((error) => next(error));
});

router.get("/:id", val(reqSch, "params"), async (req, res, next) => {
   //Return by id
   await service.getOne(req.params.id)
      .then((result) => res.json({ product: result }))
      .catch((error) => next(error));
});

router.post("/", val(creSch, "body"), async (req, res, next) => {
   //Create a new
   await service.add(req.body)
      .then((result) => res.status(201).json({ message: "Product created", product: result }))
      .catch((error) => next(error));
});

router.put("/:id", val(reqSch, "params"), val(updSch, "body"),
   async (req, res, next) => {
      //Modify by id
      const { id } = req.params;
      const newData = req.body;

      await service.update(id, newData)
         .then(() => res.status(202).json({ message: "Product updated" }))
         .catch((error) => next(error));
   }
);

router.delete("/:id", val(reqSch, "params"),
   async (req, res, next) => {
      //Delete by id
      const { id } = req.params;

      await service.delete(id)
         .then(() => res.status(202).json({ message: "Product deleted" }))
         .catch((error) => next(error));
   }
);

router.post("/fakegen/:id", val(reqSch, "params"),
   async (req, res, next) => {
      //Create bulk with the amount "id"
      const { id } = req.params;

      await service.generateUsers(id)
         .then(() => res.status(201).json({ message: "Product fake created" }))
         .catch((error) => next(error));
   }
);

module.exports = router;