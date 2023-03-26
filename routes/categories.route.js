const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

let categories = [];
let numberObjets = new Array(20);

Array.from(numberObjets).forEach(() => {
    categories.push(createRandomCategory());
});

function createRandomCategory() {
    return {
        id: faker.datatype.number(),
        name: faker.commerce.department(),
        description: faker.commerce.productDescription(),
    }
}

//Categories endpoints
router.get('/', (req, res) => {
    res.json({ categories });
});

router.get('/:id', (req, res) => {
    res.json({ categories: categories.find(category => category.id === parseInt(req.params.id)) });
});

module.exports = router;