import app from '../../src/application';
import * as request from 'supertest';
import * as mockDB from 'mock-knex';
import { birdieDB } from '../../src/db/BirdieDB';

describe('CareGiverController', () => {
  let tracker: mockDB.Tracker;
  const mockAllCareGivers = [
    {
      id: '1234',
      first_name: 'test',
      last_name: 'test',
    },
  ];
  beforeAll(() => {
    mockDB.mock(birdieDB);
    tracker = mockDB.getTracker();
  });

  beforeEach(() => {
    tracker.install();
    tracker.once('query', (query) => query.response(mockAllCareGivers));
  });

  afterEach(() => {
    tracker.uninstall();
  });

  afterAll(() => birdieDB.destroy());
  it('should return all careGivers', async () => {
    tracker.on('query', (query) => query.response(mockAllCareGivers));

    await request(app).get('/careGiver/all');
    expect(tracker.queries.first().sql).toEqual(
      'select * from test_caregivers'
    );
  });

  it('should return one careGiver', async () => {
    await request(app).get(`/careGiver/1234`);
    const query = tracker.queries.first();
    expect(query.sql).toEqual('select * from test_caregivers where id = ?');
    expect(query.bindings[0]).toEqual('1234');
  });
});
