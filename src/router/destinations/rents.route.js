import express from "express";

import val from "../../middlewares/validator.handler.js";
import rentsSchema from "../../schemas/rents.schema.js";
import RentsService from "../../services/rents.service.js";

const router = express.Router();
//Specify Schemas for validation
const create = rentsSchema.onCreate;
const update = rentsSchema.onUpdate;
const request = rentsSchema.onRequest;
const reqFake = rentsSchema.onReqFaker;
const reqRentTable = rentsSchema.onReqRentTable;
//Specify the service
const service = new RentsService();

//Endpoints
router.get("/", async (req, res, next) => {
   //Return all
   const { limit, offset } = req.query;
   await service.getAll(limit, offset)
      .then((result) => res.json({ rents: result }))
      .catch((error) => next(error));
});

router.post("/rentstatus", val(reqRentTable, "body"), async (req, res, next) => {
   //Return all
   const { dateinit, dateend } = req.body;
   await service.getAllTableRent(dateinit, dateend)
      .then((result) => res.json({ tabla: result }))
      .catch((error) => next(error));
});

router.get("/rentcount", async (req, res, next) => {
   //Return all
   await service.getCount()
      .then((result) => res.json({ tabla: result }))
      .catch((error) => next(error));
});

router.get("/:id", val(request, "params"), async (req, res, next) => {
   //Return by id
   await service.getOne(req.params.id)
      .then((result) => res.json({ rent: result }))
      .catch((error) => next(error));
});

router.post("/", val(create, "body"), async (req, res, next) => {
   //Create a new
   await service.add(req.body)
      .then((result) => res.status(201).json({ message: "Rent created", rent: result }))
      .catch((error) => next(error));
});

router.put("/:id", val(request, "params"), val(update, "body"),
   async (req, res, next) => {
      //Modify by id
      const { id } = req.params;
      const newData = req.body;

      await service.update(id, newData)
         .then(() => res.status(202).json({ message: "Rent updated" }))
         .catch((error) => next(error));
   }
);

router.delete("/:id", val(request, "params"),
   async (req, res, next) => {
      //Delete by id
      const { id } = req.params;

      await service.delete(id)
         .then(() => res.status(202).json({ message: "Rent deleted" }))
         .catch((error) => next(error));
   }
);

router.post("/fakegen/:amount", val(reqFake, "params"), async (req, res, next) => {
      //Create bulk with the amount "id"
      const { amount } = req.params;
      await service.generateFaker(amount)
         .then(() => res.status(201).json({ message: "Rents fake created" }))
         .catch((error) => next(error));
   }
);

export default router;