import app from '../../src/application';
import * as request from 'supertest';
import * as mockDB from 'mock-knex';
import { birdieDB } from '../../src/db/BirdieDB';

describe('CareRecipientController', () => {
  let tracker: mockDB.Tracker;
  const mockAllCareRecipients = [{ id: 'id', name: 'test' }];
  beforeAll(() => {
    mockDB.mock(birdieDB);
    tracker = mockDB.getTracker();
  });

  beforeEach(() => {
    tracker.install();
    tracker.once('query', (query) => query.response(mockAllCareRecipients));
  });

  afterEach(() => {
    tracker.uninstall();
  });

  afterAll(() => birdieDB.destroy());

  it('should return all careRecipients', async () => {
    await request(app).get('/careRecipient/all');
    expect(tracker.queries.first().sql).toEqual(
      'select * from test_care_recipients'
    );
  });

  it('should return one careRecipient', async () => {
    await request(app).get(`/careRecipient/1243`);
    const query = tracker.queries.first();
    expect(query.sql).toEqual(
      'select * from test_care_recipients where id = ?'
    );
    expect(query.bindings[0]).toEqual('1243');
  });
});
