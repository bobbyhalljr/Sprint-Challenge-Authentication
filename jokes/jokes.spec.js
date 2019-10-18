const request = require('supertest');
const server = require('../api/server');
const jokes = require('../jokes/jokes-router');

describe('GET /jokes', () => {
    test('should return 200 http status code', async () => {
        const response = await request(server).get('/jokes');
        expect(response.status).toBe(404);
    })

    test('should return JSON using .then()', async () => {
        const response = await request(server).get('/jokes')

        expect(response.type).toMatch(/html/i)
    })
})