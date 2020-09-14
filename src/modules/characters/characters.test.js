const request = require('supertest');
const app = require('../../app');

let firstCharacterCreated;

describe('Character Module', () => {

  test('Should create a new character', async () => {
    const { status, body } = await request(app)
      .post('/api/characters')
      .send({
        name: 'Harry Potter',
        role: 'student',
        school: 'Hogwarts School of Witchcraft and Wizardry',
        house: '5a05e2b252f721a3cf2ea33f',
        patronus: 'stag'
      });
    expect(status).toBe(201);
    expect(body).toBeInstanceOf(Object);
    expect(body).toHaveProperty('data.name', 'Harry Potter');

    firstCharacterCreated = body.data;

  });

  test('Should return all characters', async () => {
    const { status, body } = await request(app).get('/api/characters');
    expect(status).toBe(200);
    expect(body).toHaveProperty('docs');
    expect(body).toHaveProperty('total', 1)
    expect(body.docs).toHaveLength(1);
    expect(body.docs[0]).toHaveProperty('name', 'Harry Potter');
  });

  test('Should raise error when new character unnamed', async () => {
    const { status, body } = await request(app)
      .post('/api/characters')
      .send({
        role: 'student',
        school: 'Hogwarts School of Witchcraft and Wizardry',
        house: '5a05e2b252f721a3cf2ea33f',
        patronus: 'stag'
      });
    expect(status).toBe(422);
    expect(body).toHaveProperty('error', '"Name" é obrigatório');
  });

  test('Should update first character created, change name to Draco Malfoy', async () => {
    const { status, body } = await request(app)
      .put(`/api/characters/${firstCharacterCreated._id}`)
      .send({
        name: 'Draco Malfoy',
        role: 'student',
        school: 'Hogwarts School of Witchcraft and Wizardry',
        house: '5a05e2b252f721a3cf2ea33f',
        patronus: 'stag'
      });
    expect(status).toBe(202);
    expect(body).toBeInstanceOf(Object);
    expect(body).toHaveProperty('data.name', 'Draco Malfoy');
    expect(body).toHaveProperty('data.house', '5a05e2b252f721a3cf2ea33f');
    expect(body).toHaveProperty('data.patronus', 'stag');
  });

  test('Should raise error when update with _id in body', async () => {
    const { status, body } = await request(app)
      .put(`/api/characters/${firstCharacterCreated._id}`)
      .send({
        _id: firstCharacterCreated._id,
        name: 'Draco Malfoy',
        role: 'student',
        school: 'Hogwarts School of Witchcraft and Wizardry',
        house: '5a05e2b252f721a3cf2ea33f',
        patronus: 'stag'
      });
    expect(status).toBe(422);
    expect(body).toBeInstanceOf(Object);
    expect(body).toHaveProperty('error', '"_id" is not allowed');
  });

  test('Should delete character', async () => {
    const { status } = await request(app).delete(`/api/characters/${firstCharacterCreated._id}`);
    expect(status).toBe(204);
  });

});