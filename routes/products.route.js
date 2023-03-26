const express = require('express');
const ProductsService = require('./../services/product.service');
const validator = require('./../middlewares/validator.handler');
const { creProSch, updProSch, oneProSch } = require('./../schemas/product.schema');
const router = express.Router();
const products = new ProductsService();

//Products endpoints
router.get('/', async (req, res, next) => {
    //If the user sends limit and offset, we filter the products and return them
    const { limit, offset } = req.query;
    if (limit && offset) {
        await products.getRange(limit, offset)
        .then((result) => res.json({ products: result }))
        .catch((error) => next(error));
    } else {
        //Otherwise, we return all the products
        await products.getAll()
        .then((result) => res.json({ products: result }))
        .catch((error) => next(error));
    }
});

router.get('/:id', validator(oneProSch, 'params'), async (req, res, next) => {
    //Return the product with the id sent by the user
    await products.getOne(req.params.id)
    .then((result) => res.json({ products: result }))
    .catch((error) => next(error));
});

router.post('/', validator(creProSch, 'body'), async (req, res, next) => {
    //Create a new product
    await products.add(req.body)
    .then((result) => res.status(201).json({ message: 'Product created', product: result }))
    .catch((error) => next(error));
});

router.put('/:id', validator(oneProSch, 'params'), validator(updProSch, 'body'), 
    async (req, res, next) => {
        //modify the product with the id sent by the user
        const { id } = req.params;
        const newProductData = req.body;

        await products.update(id, newProductData)
        .then(() => res.status(202).json({ message: 'Product updated' }))
        .catch((error) => next(error));
    }
);

router.delete('/:id', validator(oneProSch, 'params'), async (req, res, next) => {
    //Delete the product with the id sent by the user
    const { id } = req.params;

    await products.delete(id)
    .then(() => res.status(202).json({ message: 'Product deleted' }))
    .catch((error) => next(error));

});



module.exports = router;