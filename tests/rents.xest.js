import request from 'supertest';
import app from '../dist/index.js';

var idRequest = 0;

describe('Test endpoint Rent', () => {

   it('should create a new rent', async () => {
      const res = await request(app)
         .post('/rents')
         .send({
            car_id: 1,
            client_id: 1,
            dateinit: '2021-07-01',
            dateend: '2021-07-10',
            status: 'active',
            total: 500,
         });
      expect(res.status).toEqual(201);
      expect(res.body).toHaveProperty('message', 'Rent created');
      expect(res.body).toHaveProperty('rent');
      idRequest = res.body.rent.id;
   });

   console.log(idRequest);

   it('should get all rents with limit and offset', async () => {
      const res = await request(app).get('/rents?limit=10&offset=0');
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('rents');
   });

   it('should get table rent status', async () => {
      const res = await request(app)
         .post('/rents/rentstatus')
         .send({ dateinit: '2021-01-01', dateend: '2023-12-31' });
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('tabla');
   });

   it('should get rent count', async () => {
      const res = await request(app).get('/rents/rentcount');
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('tabla');
   });

   it('should get one rent by id', async () => {
      const res = await request(app).get('/rents/1');
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('rent');
   });

   it('should update a rent by id', async () => {
      const res = await request(app)
         .put('/rents/1')
         .send({ status: 'inactive' });
      expect(res.status).toEqual(202);
      expect(res.body).toHaveProperty('message', 'Rent updated');
   });

   it('should delete a rent by id', async () => {
      const res = await request(app).delete('/rents/1');
      expect(res.status).toEqual(202);
      expect(res.body).toHaveProperty('message', 'Rent deleted');
   });

   it('should generate fake rents', async () => {
      const res = await request(app).post('/rents/fakegen/10');
      expect(res.status).toEqual(201);
      expect(res.body).toHaveProperty('message', 'Rents fake created');
   });
});
