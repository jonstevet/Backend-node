import supertest from 'supertest';
import {app, server} from '../src/index.js';

const api = supertest(app);

describe('Cars routes', () => {

    describe('GET cars', () => {
        it('should return all cars', async () => {

            const res = await api.get('http://localhost:3000/api/v1/cars');

            expect(res.status).toEqual(200);
            expect(res.body).toHaveProperty('cars');
        });

    });

    afterAll(() => {
        server.close();
    });

    // Add more tests for other routes...
});