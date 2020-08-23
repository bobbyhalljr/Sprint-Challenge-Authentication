const request = require('supertest');
const server = require('../api/server');
const authRouter = require('../auth/auth-router');

let token;

beforeAll((done) => {
    request(server).post('/login')
    .send({
        username: authRouter.user,
        password: authRouter.password
    })
    .end((err, response) => {
        token = response.headers.token
        done()
    })
})

describe('GET /jokes', () => {
    test('should require authorization', () => {
        return request(server)
        .get('/jokes')
        .then(res => {
            expect(res.status).toBe(404)
        })
    })

    // test('should respond with JSON', () => {
    //     return request(server)
    //     .get('/jokes')
    //     .set("Authorization", `${token}`)
    //     .then(res => {
    //         expect(res.status).toBe(200);
    //         expect(res.type).toBe('application/json')
    //     })
    // })
})

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