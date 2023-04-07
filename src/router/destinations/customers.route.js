import express from "express";

import customersSchema from "../../schemas/customers.schema.js";
import val from "../../middlewares/validator.handler.js";
import customersService from "../../services/customers.service.js";

//Specify Schemas for validation
const router = express.Router();
const create = customersSchema.onCreate;
const update = customersSchema.onUpdate;
const request = customersSchema.onRequest;
const reqFake = customersSchema.onReqFaker;
//Specify the service
const service = new customersService();

//Endpoints
router.get("/", async (req, res, next) => {
   //Return all
   const { limit, offset } = req.query;
   await service.getAll(limit, offset)
      .then((result) => res.json({ customers: result }))
      .catch((error) => next(error));
});

router.get("/:id", val(request, "params"), async (req, res, next) => {
   //Return by id
   await service.getOne(req.params.id)
      .then((result) => res.json({ customer: result }))
      .catch((error) => next(error));
});

router.post("/", val(create, "body"), async (req, res, next) => {
   //Create a new
   await service.add(req.body)
      .then((result) => res.status(201).json({ message: "Customer created", customer: result }))
      .catch((error) => next(error));
});

router.put("/:id", val(request, "params"), val(update, "body"),
   async (req, res, next) => {
      //Modify by id
      const { id } = req.params;
      const newData = req.body;

      await service.update(id, newData)
         .then(() => res.status(202).json({ message: "Customer updated" }))
         .catch((error) => next(error));
   }
);

router.delete("/:id", val(request, "params"),
   async (req, res, next) => {
      //Delete by id
      const { id } = req.params;

      await service.delete(id)
         .then(() => res.status(202).json({ message: "Customer deleted" }))
         .catch((error) => next(error));
   }
);

router.post("/fakegen/:amount", val(reqFake, "params"), async (req, res, next) => {
      //Create bulk with the amount "id"
      const { amount } = req.params;
      await service.generateFaker(amount)
         .then(() => res.status(201).json({ message: "Customer fake created" }))
         .catch((error) => next(error));
   }
);

export default router;
