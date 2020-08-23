const request = require('supertest');
const server = require('../api/server');

describe('POST /register', () => {
    test('should return 404 http status code', async () => {
        const response = await request(server).get('/register');
        expect(response.status).toBe(404);
    })

    test('should return JSON using .then()', async () => {
        const response = await request(server).get('/jokes')

        expect(response.type).toMatch(/html/i)
    })
})