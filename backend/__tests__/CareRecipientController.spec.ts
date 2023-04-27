/* eslint-disable @typescript-eslint/no-var-requires */
import app from '../src/application';
import * as request from 'supertest';
import * as mockDB from 'mock-knex';
import { birdieDB } from '../src/db/BirdieDB';
mockDB.mock(birdieDB);
const tracker = mockDB.getTracker();

describe('CareRecipientController', () => {
  beforeEach(() => tracker.install());
  afterEach(() => tracker.uninstall());

  it('should return all care careRecipients to be returned', async () => {
    const mockAllCareRecipients = [{ id: 'id', name: 'test' }];
    tracker.on('query', (query) => query.response(mockAllCareRecipients));

    const response = await request(app).get('/careRecipient/all');
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mockAllCareRecipients);
    expect(tracker.queries.first().sql).toEqual(
      'select * from `test_care_recipients` as `tcr`'
    );
  });

  it('should return one care careRecipient', async () => {
    const mockAllCareRecipient = { id: '1234' };
    tracker.on('query', (query) => {
      query.response(mockAllCareRecipient);
    });

    const response = await request(app).get(
      `/careRecipient/${mockAllCareRecipient.id}`
    );
    expect(response.body).toEqual(mockAllCareRecipient);
    expect(response.statusCode).toEqual(200);
    const query = tracker.queries.first();
    expect(query.sql).toEqual(
      'select * from `test_care_recipients` as `tcr` where `id` = ?'
    );
    expect(query.bindings[0]).toEqual('1234');
  });
});
