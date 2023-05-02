import app from '../../src/application';
import * as request from 'supertest';
import * as mockDB from 'mock-knex';
import { birdieDB } from '../../src/db/BirdieDB';

describe('CareEventController', () => {
  let tracker: mockDB.Tracker;
  const mockCareEvents = [
    {
      id: '123456',
      visit_id: '1234',
      caregiver_id: '1234222',
      care_recipient_id: '3333333',
    },
  ];

  beforeAll(() => {
    mockDB.mock(birdieDB);
    tracker = mockDB.getTracker();
  });
  beforeEach(() => {
    tracker.install();
    tracker.once('query', (query) => query.response(mockCareEvents));
  });

  afterEach(() => {
    tracker.uninstall();
  });

  it('should return all events by visitId', async () => {
    const response = await request(app).get(`/careEvent/visit/1234`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mockCareEvents);
    const query = tracker.queries.first();
    expect(query.sql).toEqual(
      'select * from `events` as `e` where `visit_id` = ?'
    );
    expect(query.bindings[0]).toEqual('1234');
  });

  it('should return all events by careGiverId', async () => {
    const response = await request(app).get(`/careEvent/careGiver/1234222`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mockCareEvents);
    const query = tracker.queries.first();
    expect(query.sql).toEqual(
      'select * from `events` as `e` where `caregiver_id` = ?'
    );
    expect(query.bindings[0]).toEqual('1234222');
  });

  it('should return all events by careRecipientId', async () => {
    const response = await request(app).get(`/careEvent/careRecipient/3333333`);
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(mockCareEvents);
    const query = tracker.queries.last();
    expect(query.sql).toEqual(
      'select * from `events` as `e` where `care_recipient_id` = ?'
    );
    expect(query.bindings[0]).toEqual('3333333');
  });
});
