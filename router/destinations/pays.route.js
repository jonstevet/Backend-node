const express = require("express");
const router = express.Router();
const val = require("../../middlewares/validator.handler");

//Specify Schemas for validation
const paysSchema = require("../../schemas/pays.schema");
const create = paysSchema.onCreate;
const update = paysSchema.onUpdate;
const request = paysSchema.onRequest;
const reqFake = paysSchema.onReqFaker;

//Specify the service
const PaysService = require("../../services/pays.service");
const service = new PaysService();

//Endpoints
router.get("/", async (req, res, next) => {
   //Return all
   const { limit, offset } = req.query;
   await service.getAll(limit, offset)
      .then((result) => res.json({ pays: result }))
      .catch((error) => next(error));
});

router.get("/:id", val(request, "params"), async (req, res, next) => {
   //Return by id
   await service.getOne(req.params.id)
      .then((result) => res.json({ pay: result }))
      .catch((error) => next(error));
});

router.post("/", val(create, "body"), async (req, res, next) => {
   //Create a new
   await service.add(req.body)
      .then((result) => res.status(201).json({ message: "Pay created", pay: result }))
      .catch((error) => next(error));
});

router.put("/:id", val(request, "params"), val(update, "body"),
   async (req, res, next) => {
      //Modify by id
      const { id } = req.params;
      const newData = req.body;

      await service.update(id, newData)
         .then(() => res.status(202).json({ message: "Pay updated" }))
         .catch((error) => next(error));
   }
);

router.delete("/:id", val(request, "params"),
   async (req, res, next) => {
      //Delete by id
      const { id } = req.params;

      await service.delete(id)
         .then(() => res.status(202).json({ message: "Pay deleted" }))
         .catch((error) => next(error));
   }
);

router.post("/fakegen/:amount", val(reqFake, "params"), async (req, res, next) => {
      //Create bulk with the amount "id"
      const { amount } = req.params;
      await service.generateFaker(amount)
         .then(() => res.status(201).json({ message: "Pays fake created" }))
         .catch((error) => next(error));
   }
);

module.exports = router;