const request = require('supertest');
const app = require('./app');

describe('Testes das Rotas Principais', () => {
  it('GET / deve retornar status 200 e mensagem de sucesso', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'online');
  });

  it('GET /health deve retornar status healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe('healthy');
  });
});