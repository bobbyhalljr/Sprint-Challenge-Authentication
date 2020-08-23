const request = require('supertest');
const server = require('../api/server');

describe('GET /', () => {
    test('should return status code 200', async () => {
        const response = await request(server).get('/');

        expect(response.status).toBe(200)
    })

    test('should return JSON', async () => {
        const response = await request(server).get('/');

        expect(response.type).toMatch(/json/i);
    })
})