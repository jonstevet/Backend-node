const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

let users = [];
let numberObjets = new Array(20);

Array.from(numberObjets).forEach(() => {
    users.push(createRandomUser());
});

function createRandomUser() {
    return {
        userId: faker.datatype.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password(),
        birthdate: faker.date.birthdate(),
        registeredAt: faker.date.past(),
    };
}

//Users endpoints
router.get('/', (req, res) => {
    res.json({ users });
});

router.get('/:id', (req, res) => {
    res.json({ users: users.find(user => user.id === parseInt(req.params.id)) });
});

module.exports = router;