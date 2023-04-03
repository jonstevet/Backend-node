const express = require("express");
const router = express.Router();
const val = require("../../middlewares/validator.handler");

//Specify Schemas for validation
const carsSchema = require("../../schemas/cars.schema");
const create = carsSchema.onCreate;
const update = carsSchema.onUpdate;
const request = carsSchema.onRequest;
const reqFake = carsSchema.onReqFaker;

//Specify the service
const CarsService = require("../../services/cars.service");
const service = new CarsService();

//Endpoints
router.get("/", async (req, res, next) => {
   //Return all
   const { limit, offset } = req.query;
   await service.getAll(limit, offset)
      .then((result) => res.json({ cars: result }))
      .catch((error) => next(error));
});

router.get("/:id", val(request, "params"), async (req, res, next) => {
   //Return by id
   await service.getOne(req.params.id)
      .then((result) => res.json({ car: result }))
      .catch((error) => next(error));
});

router.post("/", val(create, "body"), async (req, res, next) => {
   //Create a new
   await service.add(req.body)
      .then((result) => res.status(201).json({ message: "Car created", car: result }))
      .catch((error) => next(error));
});

router.put("/:id", val(request, "params"), val(update, "body"),
   async (req, res, next) => {
      //Modify by id
      const { id } = req.params;
      const newData = req.body;

      await service.update(id, newData)
         .then(() => res.status(202).json({ message: "Car updated" }))
         .catch((error) => next(error));
   }
);

router.delete("/:id", val(request, "params"),
   async (req, res, next) => {
      //Delete by id
      const { id } = req.params;

      await service.delete(id)
         .then(() => res.status(202).json({ message: "Car deleted" }))
         .catch((error) => next(error));
   }
);

router.post("/fakegen/:amount", val(reqFake, "params"), async (req, res, next) => {
      //Create bulk with the amount
      const { amount } = req.params;
      await service.generateFaker(amount)
         .then(() => res.status(201).json({ message: "Cars fake created" }))
         .catch((error) => next(error));
   }
);

module.exports = router;