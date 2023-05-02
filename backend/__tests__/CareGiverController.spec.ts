import app from '../src/application';
import * as request from 'supertest';
import * as mockDB from 'mock-knex';
import { birdieDB } from '../src/db/BirdieDB';
mockDB.mock(birdieDB);
const tracker = mockDB.getTracker();

describe('CareRecipientController', () => {
  beforeEach(() => tracker.install());
  afterEach(() => tracker.uninstall());

  it('should return all careGivers', async () => {
    const mockAllCareRecipients = [
      {
        id: '1234',
        first_name: 'test',
        last_name: 'test',
      },
    ];
    tracker.on('query', (query) => query.response(mockAllCareRecipients));

    const response = await request(app).get('/careGiver/all');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mockAllCareRecipients);
    expect(tracker.queries.first().sql).toEqual(
      'select * from `test_caregivers` as `tcg`'
    );
  });

  it('should return one careGiver', async () => {
    const mockAllCareRecipient = { id: '1234' };
    tracker.on('query', (query) => {
      query.response(mockAllCareRecipient);
    });

    const response = await request(app).get(
      `/careGiver/${mockAllCareRecipient.id}`
    );
    expect(response.body).toEqual(mockAllCareRecipient);
    expect(response.statusCode).toEqual(200);
    const query = tracker.queries.first();
    expect(query.sql).toEqual(
      'select * from `test_caregivers` as `tcg` where `id` = ?'
    );
    expect(query.bindings[0]).toEqual('1234');
  });
});
